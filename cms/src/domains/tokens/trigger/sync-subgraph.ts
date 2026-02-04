import { schedules } from "@trigger.dev/sdk"
import { syncFromSubgraph } from "@/domains/tokens/features/sync-tokens"

// Task definition - sync tokens from Superfluid subgraphs (both Super Tokens and underlying tokens)
export const syncSubgraphScheduled = schedules.task({
	id: "sync-subgraph",
	cron: "0 4 * * *", // Every day at 04:00 UTC (after other syncs)
	retry: {
		maxAttempts: 3,
	},
	machine: "small-2x",
	run: async () => {
		console.log("Starting scheduled subgraph sync...")

		await syncFromSubgraph()

		console.log("Subgraph sync completed successfully")

		return {
			message: "Tokens synced successfully from subgraphs",
			syncedAt: new Date().toISOString(),
		}
	},
})
