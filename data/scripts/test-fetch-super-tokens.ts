#!/usr/bin/env tsx

/**
 * Test script to run fetchAndStoreSuperTokens locally
 *
 * Usage:
 *   npm run test:local
 *   # or with custom path:
 *   LOCAL_STORAGE_PATH=./my-data npm run test:local
 */

import { fetchAndStoreSuperTokens } from "../features/fetch-super-tokens/fetchAndStoreSuperTokens"

async function main() {
	console.log("🚀 Starting local test of fetchAndStoreSuperTokens...")
	console.log("Environment variables:")
	console.log("- NODE_ENV:", process.env.NODE_ENV)
	console.log("- LOCAL_STORAGE_PATH:", process.env.LOCAL_STORAGE_PATH || "./data")
	console.log("")

	try {
		const result = await fetchAndStoreSuperTokens("local") // Force local storage for tests

		console.log("\n✅ Test completed successfully!")
		console.log("Results:", {
			duration: `${result.duration}ms`,
			totalTokens: result.totalTokens,
			chains: result.chains,
			staleChainsCount: result.staleChainsCount,
			failedChainsCount: result.failedChainsCount,
		})

		if (result.staleChainsCount > 0 || result.failedChainsCount > 0) {
			console.log("\n⚠️  Some chains had issues - check logs above for details")
		}
	} catch (error) {
		console.error("\n❌ Test failed:", error)
		process.exit(1)
	}
}

// Set environment variables for local testing
Object.assign(process.env, {
	NODE_ENV: "development",
})

main().catch(console.error)
