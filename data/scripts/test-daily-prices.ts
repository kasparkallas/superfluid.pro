#!/usr/bin/env tsx

import "dotenv/config"
import { fetchDailyPrices } from "../features/fetch-daily-prices/fetchDailyPrices"

// Note: Using 'local' storage parameter instead of environment variables for cleaner API
//
// Usage examples:
//   pnpm test:daily-prices                                    # Fetch all tokens
//   TOKEN_LIMIT=10 pnpm test:daily-prices                    # Fetch only 10 tokens
//   TOKEN_ADDRESS=0x1234... pnpm test:daily-prices           # Fetch specific token across all chains

async function main() {
	try {
		const tokenLimit = process.env.TOKEN_LIMIT ? parseInt(process.env.TOKEN_LIMIT, 10) : undefined
		const specificToken = process.env.TOKEN_ADDRESS

		console.log("Starting daily prices test...")
		console.log("Environment variables:")
		console.log("- NODE_ENV:", process.env.NODE_ENV)
		console.log("- LOCAL_STORAGE_PATH:", process.env.LOCAL_STORAGE_PATH || "./data")
		console.log("- TOKEN_LIMIT:", tokenLimit || "no limit")
		console.log("- TOKEN_ADDRESS:", specificToken || "not specified")
		console.log("")

		const result = await fetchDailyPrices("local", tokenLimit, specificToken) // Force local storage for tests
		console.log("Test completed successfully:", result)
	} catch (error) {
		console.error("Test failed:", error)
		process.exit(1)
	}
}

main()
