import { schedules } from "@trigger.dev/sdk";
import { syncTokensFromTokenList } from "@/features/sync-tokens";

// Task definition - sync tokens from official Superfluid tokenlist
export const syncTokenlistScheduled = schedules.task({
	id: "sync-tokenlist",
	cron: "30 2 * * *", // Every day at 02:30 UTC (30 minutes after chains sync)
	retry: {
		maxAttempts: 3,
	},
	run: async () => {
		console.log("Starting scheduled tokenlist sync...");

		await syncTokensFromTokenList();

		console.log("Tokenlist sync completed successfully");

		return {
			message: "Tokens synced successfully from tokenlist",
			syncedAt: new Date().toISOString(),
		};
	},
});
