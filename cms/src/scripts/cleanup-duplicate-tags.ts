import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"

/**
 * One-time cleanup script to remove duplicate tags from all tokens in the CMS.
 * This script will:
 * 1. Fetch all tokens from the database
 * 2. Check each token for duplicate tags
 * 3. Update tokens that have duplicates with deduplicated tags
 * 4. Log the results
 */

async function cleanupDuplicateTags() {
	console.log("🚀 Starting duplicate tags cleanup...")

	const payload = await getPayloadInstance()
	let updatedCount = 0
	let totalTokensProcessed = 0
	let page = 1
	const limit = 100

	try {
		while (true) {
			console.log(`📄 Processing page ${page}...`)

			const result = await payload.find({
				collection: "tokens",
				page,
				limit,
				where: {},
			})

			const tokens = result.docs as Token[]
			totalTokensProcessed += tokens.length

			for (const token of tokens) {
				const originalTags = token.tags || []

				if (originalTags.length === 0) continue

				// Remove duplicates using Set
				const uniqueTags = Array.from(new Set(originalTags))

				// Check if there were duplicates
				if (originalTags.length !== uniqueTags.length) {
					console.log(
						`🔧 Found duplicates in token ${token.symbol} (${token.id}): [${originalTags.join(", ")}] -> [${uniqueTags.join(", ")}]`,
					)

					// Update the token with deduplicated tags
					await payload.update({
						collection: "tokens",
						id: token.id,
						data: {
							tags: uniqueTags,
						},
					})

					updatedCount++
				}
			}

			// If we got fewer docs than the limit, we've reached the end
			if (result.docs.length < limit) {
				break
			}

			page++
		}

		console.log(`✅ Cleanup completed!`)
		console.log(`📊 Statistics:`)
		console.log(`   - Total tokens processed: ${totalTokensProcessed}`)
		console.log(`   - Tokens updated: ${updatedCount}`)
		console.log(`   - Tokens without duplicates: ${totalTokensProcessed - updatedCount}`)
	} catch (error) {
		console.error("❌ Error during cleanup:", error)
		throw error
	}
}

import path from "node:path"
// Self-executing function if run directly
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
	cleanupDuplicateTags()
		.then(() => {
			console.log("🎉 Script completed successfully!")
			process.exit(0)
		})
		.catch((error) => {
			console.error("💥 Script failed:", error)
			process.exit(1)
		})
}

export { cleanupDuplicateTags }
