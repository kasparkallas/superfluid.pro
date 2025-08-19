import { schedules } from "@trigger.dev/sdk";
import { syncChains } from "@/features/sync-chains";

// Task definition - sync chains from Superfluid metadata
export const syncChainsScheduled = schedules.task({
	id: "sync-chains",
	cron: "0 2 * * *", // Every day at 02:00 UTC (after data project completes)
	retry: {
		maxAttempts: 3,
	},
	run: async () => {
		console.log("Starting scheduled chain sync...");

		const results = await syncChains();

		console.log(`Chain sync completed: ${results.successful.length} successful, ${results.failed.length} failed`);

		if (results.failed.length > 0) {
			console.error("Failed chains:", results.failed);
		}

		return {
			total: results.total,
			successful: results.successful.length,
			failed: results.failed.length,
			successfulChains: results.successful,
			failedChains: results.failed,
		};
	},
});
