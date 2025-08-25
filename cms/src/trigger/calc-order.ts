import { schedules } from "@trigger.dev/sdk"
import { calculateAndUpdateTokenOrders } from "@/features/calc-order"

// Task definition - calculate and update token order scores
export const calcOrderScheduled = schedules.task({
	id: "calc-order",
	cron: "0 4 * * *", // Every day at 04:00 UTC (after all token syncs complete)
	retry: {
		maxAttempts: 3,
	},
	machine: "medium-1x",
	run: async () => {
		console.log("Starting scheduled order calculation...")

		const results = await calculateAndUpdateTokenOrders()

		console.log(`Order calculation completed: ${results.updated} updated, ${results.failed} failed`)

		if (results.failed > 0) {
			console.error("Failed tokens:", results.failedTokens)
		}

		return {
			total: results.total,
			processed: results.processed,
			updated: results.updated,
			failed: results.failed,
			skipped: results.skipped,
			updatedTokens: results.updatedTokens,
			failedTokens: results.failedTokens,
			syncedAt: new Date().toISOString(),
		}
	},
})
