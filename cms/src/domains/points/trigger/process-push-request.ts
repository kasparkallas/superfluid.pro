import { task } from "@trigger.dev/sdk"
import { getPayloadInstance } from "@/payload"
import type { Campaign, PushRequest } from "@/payload-types"
import { PUSH_REQUEST_STATUS } from "../types"

type ProcessPushRequestPayload = {
	pushRequestId: number
}

type PushRequestEvent = {
	eventName: string
	account: string
	points: number
	uniqueId?: string
}

type NormalizedPayload = {
	events: PushRequestEvent[]
}

/**
 * Background task to process a push request.
 * 1. Fetch PushRequest from DB
 * 2. Mark as "processing"
 * 3. Parse payload JSON
 * 4. Pre-fetch existing dedupKeys in a single query (avoids N+1)
 * 5. For each event:
 *    - Check dedupKey for duplicates (skip if exists)
 *    - Create PointEvent (balance update happens via afterChange hook)
 * 6. Mark PushRequest as "completed" (or "failed" with error)
 */
export const processPushRequest = task({
	id: "process-push-request",
	retry: {
		maxAttempts: 5,
	},
	run: async (payload: ProcessPushRequestPayload) => {
		const { pushRequestId } = payload
		console.log(`Processing push request ${pushRequestId}...`)

		const db = await getPayloadInstance()

		// 1. Fetch PushRequest
		let pushRequest: PushRequest
		try {
			pushRequest = await db.findByID({
				collection: "push-requests",
				id: pushRequestId,
				depth: 1, // Include campaign
			})
		} catch {
			console.error(`Push request ${pushRequestId} not found`)
			throw new Error(`Push request ${pushRequestId} not found`)
		}

		// 2. Mark as processing
		await db.update({
			collection: "push-requests",
			id: pushRequestId,
			data: {
				status: PUSH_REQUEST_STATUS.PROCESSING,
			},
		})

		try {
			// 3. Parse payload
			const normalizedPayload = pushRequest.payload as NormalizedPayload
			const events = normalizedPayload.events
			const campaign = pushRequest.campaign as Campaign

			// 4. Pre-fetch existing dedupKeys in a single query to avoid N+1
			const eventsWithUniqueId = events.filter((e) => e.uniqueId)
			const dedupKeysToCheck = eventsWithUniqueId.map((e) =>
				`${campaign.id}:${e.account.toLowerCase()}:${e.uniqueId}`.toLowerCase(),
			)

			const existingDedupKeys = new Set<string>()
			if (dedupKeysToCheck.length > 0) {
				const existing = await db.find({
					collection: "point-events",
					where: {
						dedupKey: { in: dedupKeysToCheck },
					},
					limit: dedupKeysToCheck.length,
					depth: 0,
				})
				for (const doc of existing.docs) {
					if (doc.dedupKey) {
						existingDedupKeys.add(doc.dedupKey)
					}
				}
			}

			let processedCount = 0
			let skippedCount = 0

			// 5. Process each event
			for (const event of events) {
				// Check for duplicates using pre-fetched set
				if (event.uniqueId) {
					const dedupKey = `${campaign.id}:${event.account.toLowerCase()}:${event.uniqueId}`.toLowerCase()
					if (existingDedupKeys.has(dedupKey)) {
						console.log(`Skipping duplicate event with uniqueId: ${event.uniqueId}`)
						skippedCount++
						continue
					}
					// Add to set to catch duplicates within the same batch
					existingDedupKeys.add(dedupKey)
				}

				// Create PointEvent - balance update happens automatically via afterChange hook
				await db.create({
					collection: "point-events",
					data: {
						campaign: campaign.id,
						pushRequest: pushRequestId,
						eventName: event.eventName,
						account: event.account.toLowerCase(),
						points: event.points,
						uniqueId: event.uniqueId,
					},
				})

				processedCount++
			}

			// 6. Mark as completed
			await db.update({
				collection: "push-requests",
				id: pushRequestId,
				data: {
					status: PUSH_REQUEST_STATUS.COMPLETED,
					processedAt: new Date().toISOString(),
				},
			})

			console.log(`Push request ${pushRequestId} completed: ${processedCount} processed, ${skippedCount} skipped`)

			return {
				success: true,
				pushRequestId,
				processed: processedCount,
				skipped: skippedCount,
			}
		} catch (error) {
			// Mark as failed
			const errorMessage = error instanceof Error ? error.message : "Unknown error"
			await db.update({
				collection: "push-requests",
				id: pushRequestId,
				data: {
					status: PUSH_REQUEST_STATUS.FAILED,
					error: errorMessage,
					processedAt: new Date().toISOString(),
				},
			})

			console.error(`Push request ${pushRequestId} failed:`, error)
			throw error // Re-throw to trigger retry
		}
	},
})
