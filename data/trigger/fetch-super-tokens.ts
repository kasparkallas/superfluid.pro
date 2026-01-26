import { schedules } from "@trigger.dev/sdk"
import { fetchAndStoreSuperTokens } from "@/features/fetch-super-tokens"

// Task definition - can be triggered manually via UI or scheduled
export const fetchSuperTokensScheduled = schedules.task({
	id: "fetch-super-tokens",
	cron: "0 0 * * 1,3,5", // Mon/Wed/Fri at 00:00 UTC (token lists change infrequently)
	retry: {
		maxAttempts: 2,
	},
	run: async () => {
		return await fetchAndStoreSuperTokens("blob") // Use blob storage in production
	},
})
