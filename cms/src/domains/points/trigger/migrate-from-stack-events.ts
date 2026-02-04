import { StackClient, type Event as StackEvent } from "@stackso/js-core"
import { task } from "@trigger.dev/sdk"
import { getPayloadInstance } from "@/payload"
import { createStorageProvider, getPointsStorageConfig } from "@/utils/storage"

// Task Payload
type MigrateFromStackEventsPayload = {
	campaignId: number // CMS campaign ID
	stackPointSystemId: number // Stack point system ID
	stackApiKeyEnvVar: string // Environment variable name containing Stack API key
	persist?: boolean // Default false = dry-run
	skipReplay?: boolean // Default false
}

// Stored event format
type StoredStackEvent = {
	event: string
	address: string
	timestamp: string
	points: number
}

type StoredEventsData = {
	metadata: {
		campaignId: number
		stackPointSystemId: number
		lastFetchTimestamp: string
		totalCount: number
	}
	events: StoredStackEvent[]
}

// Constants
const BATCH_SIZE = 1000

/**
 * Get the blob key for storing stack events
 */
function getBlobKey(campaignId: number, pointSystemId: number): string {
	return `stack-migration/${campaignId}-${pointSystemId}.json`
}

/**
 * Fetch all events from Stack using pagination
 */
async function fetchAllStackEvents(client: StackClient, startTimestamp?: Date): Promise<StackEvent[]> {
	const allEvents: StackEvent[] = []
	let offset = 0
	let hasMore = true

	console.log(`Fetching events from Stack${startTimestamp ? ` since ${startTimestamp.toISOString()}` : ""}...`)

	while (hasMore) {
		const queryBuilder = client.eventsQuery().limit(BATCH_SIZE).offset(offset)

		const query = queryBuilder.build()
		const events = await client.getEvents({ query })

		if (events.length === 0) {
			hasMore = false
		} else {
			// If we have a start timestamp, filter events
			if (startTimestamp) {
				const filteredEvents = events.filter((e) => new Date(e.timestamp) >= startTimestamp)
				for (const event of filteredEvents) {
					allEvents.push(event)
				}

				// If we got fewer filtered events than fetched, we've passed the cutoff
				if (filteredEvents.length < events.length) {
					hasMore = false
				}
			} else {
				for (const event of events) {
					allEvents.push(event)
				}
			}

			offset += events.length
			console.log(`  Fetched ${allEvents.length} events so far...`)
		}
	}

	return allEvents
}

/**
 * Convert a Stack event timestamp to ISO string
 */
function toTimestampString(timestamp: Date | string): string {
	if (timestamp instanceof Date) {
		return timestamp.toISOString()
	}
	return timestamp
}

/**
 * Migrate historical events from Stack.so to CMS
 *
 * Phase 0: Fetch & Store - Fetches events from Stack and caches in storage
 * Phase 1: Replay - Creates informational events from Stack history (does not affect balances)
 */
export const migrateFromStackEvents = task({
	id: "migrate-from-stack-events",
	queue: {
		concurrencyLimit: 1,
	},
	retry: {
		maxAttempts: 3,
	},
	machine: {
		preset: "medium-2x",
	},
	run: async (payload: MigrateFromStackEventsPayload) => {
		const { campaignId, stackPointSystemId, stackApiKeyEnvVar, persist = false, skipReplay = false } = payload

		// Read API key from environment variable (prevents key from being logged in Trigger.dev dashboard)
		const stackApiKey = process.env[stackApiKeyEnvVar]
		if (!stackApiKey) {
			throw new Error(`Missing environment variable: ${stackApiKeyEnvVar}`)
		}

		console.log(
			`Starting Stack migration: campaign=${campaignId}, stackPointSystem=${stackPointSystemId}, persist=${persist}, skipReplay=${skipReplay}`,
		)

		const db = await getPayloadInstance()
		const storageConfig = getPointsStorageConfig()
		const storage = createStorageProvider(storageConfig)

		// Validate campaign exists
		try {
			const campaign = await db.findByID({
				collection: "campaigns",
				id: campaignId,
			})
			console.log(`Campaign: ${campaign.name}`)
		} catch {
			throw new Error(`Campaign ${campaignId} not found`)
		}

		// Initialize Stack client
		const stackClient = new StackClient({
			apiKey: stackApiKey,
			pointSystemId: stackPointSystemId,
		})

		// ========================================
		// Phase 0: Fetch & Store (Incremental)
		// ========================================
		console.log("\n=== Phase 0: Fetch & Store ===")

		const blobKey = getBlobKey(campaignId, stackPointSystemId)
		let existingData: StoredEventsData | null = null
		let existingEventsCount = 0
		let newEventsFetched = 0
		let blobUrl = ""

		// Try to load existing events from blob
		const existingContent = await storage.get(blobKey)
		if (existingContent) {
			try {
				existingData = JSON.parse(existingContent) as StoredEventsData
				existingEventsCount = existingData.events.length
				console.log(`Found existing blob with ${existingEventsCount} events`)
			} catch (error) {
				console.error("Failed to parse existing blob, will fetch all events:", error)
				existingData = null
			}
		}

		// Fetch events from Stack
		let stackEvents: StackEvent[]
		if (existingData && existingData.events.length > 0) {
			// Find latest timestamp and subtract 1 minute for safety buffer
			const latestTimestamp = existingData.events.reduce((max, e) => Math.max(max, new Date(e.timestamp).getTime()), 0)
			const startTimestamp = new Date(latestTimestamp - 60 * 1000) // 1 minute buffer

			console.log(`Fetching new events since ${startTimestamp.toISOString()}`)
			stackEvents = await fetchAllStackEvents(stackClient, startTimestamp)
		} else {
			console.log("Fetching ALL events from Stack (no existing blob)")
			stackEvents = await fetchAllStackEvents(stackClient)
		}

		newEventsFetched = stackEvents.length
		console.log(`Fetched ${newEventsFetched} events from Stack API`)

		// Merge and deduplicate events
		const existingEventKeys = new Set<string>()
		const mergedEvents: StoredStackEvent[] = []

		if (existingData) {
			for (const event of existingData.events) {
				const key = `${event.address.toLowerCase()}:${event.timestamp}:${event.event}`
				existingEventKeys.add(key)
				mergedEvents.push(event)
			}
		}

		let duplicatesSkipped = 0
		for (const event of stackEvents) {
			const timestampStr = toTimestampString(event.timestamp)
			const key = `${event.address.toLowerCase()}:${timestampStr}:${event.event}`
			if (!existingEventKeys.has(key)) {
				mergedEvents.push({
					event: event.event,
					address: event.address,
					timestamp: timestampStr,
					points: event.points,
				})
				existingEventKeys.add(key)
			} else {
				duplicatesSkipped++
			}
		}

		console.log(`Merged events: ${mergedEvents.length} total (${duplicatesSkipped} duplicates skipped)`)

		// Store to blob (only if persist=true)
		if (persist) {
			const dataToStore: StoredEventsData = {
				metadata: {
					campaignId,
					stackPointSystemId,
					lastFetchTimestamp: new Date().toISOString(),
					totalCount: mergedEvents.length,
				},
				events: mergedEvents,
			}

			blobUrl = await storage.put(blobKey, JSON.stringify(dataToStore))
			console.log(`Stored events to blob: ${blobUrl}`)
		} else {
			console.log("[DRY-RUN] Would store events to blob")
			blobUrl = `[dry-run] ${blobKey}`
		}

		// ========================================
		// Phase 1: Replay (as informational events)
		// ========================================
		const replayResult = {
			stackEventsTotal: mergedEvents.length,
			eventsCreated: 0,
			skipped: 0,
			errors: 0,
		}

		if (!skipReplay) {
			console.log("\n=== Phase 1: Replay (as informational events) ===")
			console.log(`Replaying ${mergedEvents.length} events from Stack history`)

			// Pre-fetch existing dedupKeys in batches
			const replayDedupKeysToCheck: string[] = []

			for (const event of mergedEvents) {
				const account = event.address.toLowerCase()
				const uniqueId = `${event.timestamp}:${event.event}`
				const dedupKey = `${campaignId}:${account}:${uniqueId}`.toLowerCase()
				replayDedupKeysToCheck.push(dedupKey)
			}

			const existingReplayDedupKeys = new Set<string>()
			console.log(`Checking ${replayDedupKeysToCheck.length} dedupKeys for existing events...`)

			for (let i = 0; i < replayDedupKeysToCheck.length; i += 100) {
				const batch = replayDedupKeysToCheck.slice(i, i + 100)
				const existing = await db.find({
					collection: "point-events",
					where: {
						dedupKey: { in: batch },
					},
					limit: batch.length,
					depth: 0,
				})

				for (const doc of existing.docs) {
					if (doc.dedupKey) {
						existingReplayDedupKeys.add(doc.dedupKey)
					}
				}

				if ((i + 100) % 1000 === 0) {
					console.log(`  Checked ${Math.min(i + 100, replayDedupKeysToCheck.length)} dedupKeys...`)
				}
			}

			console.log(`Found ${existingReplayDedupKeys.size} existing events to skip`)

			// Create events for each Stack event
			for (const event of mergedEvents) {
				const account = event.address.toLowerCase()
				const uniqueId = `${event.timestamp}:${event.event}`
				const dedupKey = `${campaignId}:${account}:${uniqueId}`.toLowerCase()

				// Skip if already exists
				if (existingReplayDedupKeys.has(dedupKey)) {
					replayResult.skipped++
					continue
				}

				if (persist) {
					try {
						await db.create({
							collection: "point-events",
							data: {
								campaign: campaignId,
								eventName: event.event,
								account: account,
								points: event.points,
								uniqueId: uniqueId,
								informational: true, // Mark as informational - does not affect balances
								eventTime: event.timestamp, // Use original Stack timestamp
							},
						})
						existingReplayDedupKeys.add(dedupKey) // Track within batch
						replayResult.eventsCreated++
					} catch (error) {
						console.error(`Failed to create replay event for ${account}:`, error)
						replayResult.errors++
					}
				} else {
					replayResult.eventsCreated++
				}

				if (replayResult.eventsCreated % 500 === 0) {
					console.log(
						`Replay progress: ${replayResult.eventsCreated} events ${persist ? "created" : "would be created"}...`,
					)
				}
			}

			console.log(
				`Replay complete: ${replayResult.eventsCreated} ${persist ? "created" : "would be created"}, ${replayResult.skipped} skipped, ${replayResult.errors} errors`,
			)
		} else {
			console.log("\n=== Phase 1: Replay (SKIPPED) ===")
		}

		// ========================================
		// Return Result
		// ========================================
		const result = {
			success: true,
			persisted: persist,
			campaignId,
			fetch: {
				existingEvents: existingEventsCount,
				newEventsFetched: newEventsFetched,
				totalEvents: mergedEvents.length,
				blobUrl,
			},
			replay: replayResult,
		}

		console.log("\n=== Migration Complete ===")
		console.log(JSON.stringify(result, null, 2))

		return result
	},
})
