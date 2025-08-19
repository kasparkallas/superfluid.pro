import { schedules } from "@trigger.dev/sdk";
import { fetchAndStoreSuperTokens } from "@/features/fetch-super-tokens";

// Task definition - can be triggered manually via UI or scheduled
export const fetchSuperTokensScheduled = schedules.task({
	id: "fetch-super-tokens",
	cron: "0 0 * * *", // Every day at 00:00 UTC (foundation data for other automations)
	retry: {
		maxAttempts: 2,
	},
	run: async () => {
		return await fetchAndStoreSuperTokens("blob"); // Use blob storage in production
	},
});
