import { schedules } from "@trigger.dev/sdk/v3";
import { syncFromStreme } from "@/features/sync-tokens";

// Task definition - sync tokens from Streme.fun community platform
export const syncStremeScheduled = schedules.task({
	id: "sync-streme",
	cron: "30 3 * * *", // Every day at 03:30 UTC (after data API sync)
	retry: {
		maxAttempts: 3,
	},
	run: async () => {
		console.log("Starting scheduled Streme sync...");

		await syncFromStreme();

		console.log("Streme sync completed successfully");

		return {
			message: "Tokens synced successfully from Streme.fun",
			syncedAt: new Date().toISOString(),
		};
	},
});
