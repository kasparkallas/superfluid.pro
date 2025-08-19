import { schedules } from "@trigger.dev/sdk";
import { fetchDailyPrices } from "@/features/fetch-daily-prices";

// Task definition - can be triggered manually via UI or scheduled
export const fetchDailyPricesScheduled = schedules.task({
	id: "fetch-daily-prices",
	cron: "0 1 * * *", // Every day at 01:00 UTC (once per day, after super tokens fetch)
	retry: {
		maxAttempts: 2,
	},
	machine: "medium-1x",
	run: async () => {
		// No token limit for production runs - process all tokens
		return await fetchDailyPrices("blob", undefined); // Use blob storage in production
	},
});
