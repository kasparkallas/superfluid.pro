import { schedules } from "@trigger.dev/sdk";
import { fetchCoingeckoIds } from "@/features/fetch-coingecko-ids";

// Task definition - can be triggered manually via UI or scheduled
export const fetchCoingeckoIdsScheduled = schedules.task({
	id: "fetch-coingecko-ids",
	cron: "0 0 * * 1", // Every Monday at 00:00 UTC (once per week, after Sunday's super tokens run)
	retry: {
		maxAttempts: 2,
	},
	run: async () => {
		return await fetchCoingeckoIds("blob"); // Use blob storage in production
	},
});
