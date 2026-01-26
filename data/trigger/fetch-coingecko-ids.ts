import { schedules } from "@trigger.dev/sdk"
import { fetchCoingeckoIds } from "@/features/fetch-coingecko-ids"

// Task definition - can be triggered manually via UI or scheduled
export const fetchCoingeckoIdsScheduled = schedules.task({
	id: "fetch-coingecko-ids",
	cron: "0 0 1,15 * *", // 1st and 15th of each month at 00:00 UTC (CoinGecko IDs are stable)
	retry: {
		maxAttempts: 2,
	},
	run: async () => {
		return await fetchCoingeckoIds("blob") // Use blob storage in production
	},
})
