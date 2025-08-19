import { schedules } from "@trigger.dev/sdk";
import { syncTokensFromDataApi } from "@/features/sync-tokens";

// Task definition - sync tokens from Superfluid data API (includes CoinGecko mappings)
export const syncDataApiScheduled = schedules.task({
	id: "sync-data-api",
	cron: "0 3 * * *", // Every day at 03:00 UTC (after tokenlist sync)
	retry: {
		maxAttempts: 3,
	},
	run: async () => {
		console.log("Starting scheduled data API sync...");

		await syncTokensFromDataApi();

		console.log("Data API sync completed successfully");

		return {
			message: "Tokens synced successfully from data API",
			syncedAt: new Date().toISOString(),
		};
	},
});
