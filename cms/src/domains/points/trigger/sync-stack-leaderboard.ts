import { task } from "@trigger.dev/sdk"
import { getPayloadInstance } from "@/payload"

// Stack API Types
type StackLeaderboardEntry = {
	walletAddress: string
	totalPoints: number
	rank: number
	index: number
}

type StackLeaderboardResponse = {
	leaderboard: StackLeaderboardEntry[]
	stats: {
		total: number
	}
}

// Task Payload
type SyncStackLeaderboardPayload = {
	stackLeaderboardId: string
	campaignId: number
	persist?: boolean // Default false = dry-run, true = write to DB
	disableNegativeSync?: boolean // Default false = sync negative deltas
}

// Constants
const STACK_API_BASE = "https://athena.stack.so"
const PAGE_SIZE = 500
const EVENT_NAME = "stack_sync"
const DEDUP_WINDOW_MS = 15 * 60 * 1000 // 15 minutes

/**
 * Fetch a single page from Stack API
 */
async function fetchStackPage(leaderboardId: string, offset: number): Promise<StackLeaderboardResponse> {
	const url = `${STACK_API_BASE}/leaderboard/${leaderboardId}?offset=${offset}&limit=${PAGE_SIZE}`
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`Stack API error: ${response.status} ${response.statusText}`)
	}

	return response.json()
}

/**
 * Fetch all entries from Stack (handles pagination)
 * Note: Stack's stats.total can be inaccurate, so we detect empty pages or no new entries
 */
async function fetchAllStackEntries(leaderboardId: string): Promise<StackLeaderboardEntry[]> {
	const allEntries: StackLeaderboardEntry[] = []
	let offset = 0
	let previousLength = 0

	while (true) {
		console.log(`Fetching Stack leaderboard page at offset ${offset}...`)
		const page = await fetchStackPage(leaderboardId, offset)

		if (page.leaderboard.length === 0) {
			console.log("No more entries to fetch")
			break
		}

		allEntries.push(...page.leaderboard)
		console.log(`Fetched ${page.leaderboard.length} entries. Total: ${allEntries.length}`)

		// Stop if we got fewer than PAGE_SIZE (last page)
		// OR if we didn't get any new entries (total count bug workaround)
		if (page.leaderboard.length < PAGE_SIZE || allEntries.length === previousLength) {
			break
		}

		previousLength = allEntries.length
		offset += PAGE_SIZE
	}

	return allEntries
}

/**
 * Sync points from Stack leaderboard to CMS.
 *
 * For each account:
 * - If already synced (dedupKey exists): skip
 * - If delta === 0: skip
 * - If disableNegativeSync=true and delta < 0: skip
 * - Otherwise: create PointEvent for the delta
 */
export const syncStackLeaderboard = task({
	id: "sync-stack-leaderboard",
	queue: {
		concurrencyLimit: 1,
	},
	retry: {
		maxAttempts: 3,
	},
	run: async (payload: SyncStackLeaderboardPayload) => {
		const { stackLeaderboardId, campaignId, persist = false, disableNegativeSync = false } = payload

		// Calculate time window for deduplication (rounded to 15-minute intervals)
		const timeWindow = Math.floor(Date.now() / DEDUP_WINDOW_MS) * DEDUP_WINDOW_MS
		const uniqueId = `stack:${stackLeaderboardId}:${timeWindow}`

		console.log(
			`Starting Stack leaderboard sync: leaderboard=${stackLeaderboardId}, campaign=${campaignId}, persist=${persist}, disableNegativeSync=${disableNegativeSync}, timeWindow=${new Date(timeWindow).toISOString()}`,
		)

		const db = await getPayloadInstance()

		// 1. Validate campaign exists (only when persisting)
		if (persist) {
			try {
				await db.findByID({
					collection: "campaigns",
					id: campaignId,
				})
			} catch {
				throw new Error(`Campaign ${campaignId} not found`)
			}
		}

		// 2. Fetch all entries from Stack
		const stackEntries = await fetchAllStackEntries(stackLeaderboardId)
		console.log(`Fetched ${stackEntries.length} total entries from Stack`)

		if (stackEntries.length === 0) {
			return {
				success: true,
				persisted: persist,
				message: "No entries in Stack leaderboard",
				stackLeaderboardId,
				campaignId,
				totalEntries: 0,
				created: 0,
				skipped: 0,
				errors: 0,
			}
		}

		// 3. Pre-fetch existing CMS balances
		const accounts = stackEntries.map((e) => e.walletAddress.toLowerCase())
		const balanceIds = accounts.map((account) => `${campaignId}:${account}`)

		const existingBalances = new Map<string, number>()

		// Query in batches of 100
		for (let i = 0; i < balanceIds.length; i += 100) {
			const batch = balanceIds.slice(i, i + 100)
			const balances = await db.find({
				collection: "point-balances",
				where: {
					id: { in: batch },
				},
				limit: batch.length,
				depth: 0,
			})

			for (const balance of balances.docs) {
				existingBalances.set(balance.id, balance.totalPoints)
			}
		}

		// 4. Pre-fetch existing dedupKeys for this time window
		const dedupKeysToCheck = accounts.map((account) => `${campaignId}:${account}:${uniqueId}`.toLowerCase())

		const existingDedupKeys = new Set<string>()

		for (let i = 0; i < dedupKeysToCheck.length; i += 100) {
			const batch = dedupKeysToCheck.slice(i, i + 100)
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
					existingDedupKeys.add(doc.dedupKey)
				}
			}
		}

		// 5. Process each entry
		let createdCount = 0
		let skippedCount = 0
		let errorCount = 0

		for (const entry of stackEntries) {
			const account = entry.walletAddress.toLowerCase()
			const dedupKey = `${campaignId}:${account}:${uniqueId}`.toLowerCase()

			// Skip if already synced
			if (existingDedupKeys.has(dedupKey)) {
				skippedCount++
				continue
			}

			// Get current CMS balance
			const balanceId = `${campaignId}:${account}`
			const cmsBalance = existingBalances.get(balanceId) ?? 0

			// Calculate delta
			const delta = entry.totalPoints - cmsBalance

			// Skip if no change, or if negative and disableNegativeSync is true
			if (delta === 0 || (delta < 0 && disableNegativeSync)) {
				skippedCount++
				continue
			}

			// Create point event (only if persist=true)
			if (persist) {
				try {
					await db.create({
						collection: "point-events",
						data: {
							campaign: campaignId,
							eventName: EVENT_NAME,
							account: account,
							points: delta,
							uniqueId: uniqueId,
						},
					})
					existingDedupKeys.add(dedupKey) // Track within batch to catch duplicates
				} catch (error) {
					console.error(`Failed to create event for ${account}:`, error)
					errorCount++
					continue
				}
			}

			createdCount++

			if (createdCount % 100 === 0) {
				console.log(`Progress: ${createdCount} events ${persist ? "created" : "would be created"}...`)
			}
		}

		console.log(
			`Sync complete: ${createdCount} ${persist ? "created" : "would be created"}, ${skippedCount} skipped, ${errorCount} errors`,
		)

		return {
			success: true,
			persisted: persist,
			stackLeaderboardId,
			campaignId,
			totalEntries: stackEntries.length,
			created: createdCount,
			skipped: skippedCount,
			errors: errorCount,
		}
	},
})
