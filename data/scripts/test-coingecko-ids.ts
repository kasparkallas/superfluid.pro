#!/usr/bin/env tsx

import "dotenv/config"
import { fetchCoingeckoIds } from "../features/fetch-coingecko-ids/fetchCoingeckoIds"

// Note: Using 'local' storage parameter instead of environment variables for cleaner API

async function test() {
	console.log("Testing CoinGecko IDs fetching...\n")

	try {
		const result = await fetchCoingeckoIds("local") // Force local storage for tests
		console.log("\nTest completed successfully!")
		console.log("Result:", result)
	} catch (error) {
		console.error("Test failed:", error)
		process.exit(1)
	}
}

test()
