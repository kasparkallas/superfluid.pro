import { schedules, tasks } from "@trigger.dev/sdk"
import { getPayloadInstance } from "@/payload"
import { PUSH_REQUEST_STATUS } from "../types"
import type { processPushRequest } from "./process-push-request"

/**
 * CRON job to retry stale push requests.
 * Runs every 15 minutes.
 * Finds push requests that:
 * - Are NOT completed
 * - Were created more than 15 minutes ago
 * - Were created less than 2 hours ago
 */
export const retryStaleRequests = schedules.task({
	id: "retry-stale-push-requests",
	cron: "*/15 * * * *", // Every 15 minutes
	retry: {
		maxAttempts: 3,
	},
	run: async () => {
		console.log("Checking for stale push requests...")

		const db = await getPayloadInstance()
		const now = new Date()
		const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60 * 1000)
		const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000)

		// Find stale push requests
		const staleRequests = await db.find({
			collection: "push-requests",
			where: {
				and: [
					{ status: { not_equals: PUSH_REQUEST_STATUS.COMPLETED } },
					{ createdAt: { less_than: fifteenMinutesAgo.toISOString() } },
					{ createdAt: { greater_than: twoHoursAgo.toISOString() } },
				],
			},
			limit: 100, // Process max 100 at a time
			depth: 0,
		})

		if (staleRequests.docs.length === 0) {
			console.log("No stale push requests found")
			return { retriggered: 0 }
		}

		console.log(`Found ${staleRequests.docs.length} stale push requests`)

		let retriggeredCount = 0
		for (const request of staleRequests.docs) {
			try {
				await tasks.trigger<typeof processPushRequest>("process-push-request", {
					pushRequestId: request.id,
				})
				retriggeredCount++
				console.log(`Retriggered push request ${request.id}`)
			} catch (error) {
				console.error(`Failed to retrigger push request ${request.id}:`, error)
			}
		}

		console.log(`Retriggered ${retriggeredCount} stale push requests`)
		return { retriggered: retriggeredCount, total: staleRequests.docs.length }
	},
})
