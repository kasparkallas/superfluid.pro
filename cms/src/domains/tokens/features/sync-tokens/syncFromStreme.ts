import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"
import { getExistingToken, hasChanges, mergeTags, shouldUpdateLogoUri } from "."

// # Types
interface StremeToken {
	id: number
	block_number: number
	tx_hash: string
	contract_address: string
	requestor_fid: number
	deployer: string
	name: string
	symbol: string
	img_url: string
	cast_hash: string
	type: string
	pair: string
	presale_id: number | null
	chain_id: number
	metadata: unknown | null
	tokenFactory: string
	postDeployHook: string
	liquidityFactory: string
	postLpHook: string
	poolConfig: {
		tick: number
		pairedToken: string
		devBuyFee: number
	}
	timestamp: {
		_seconds: number
		_nanoseconds: number
	}
	staking_pool: string
	pfp_url: string
	staking_address: string
	pool_address: string
	username: string
	lastTraded: {
		_seconds: number
		_nanoseconds: number
	}
	created_at: string
}

interface SyncStats {
	created: number
	updated: number
	skipped: number
	failed: number
}

// # Main Function
export async function syncFromStreme() {
	const payload = await getPayloadInstance()
	const pageSize = 200 // API returns 200 tokens per page

	// Track overall statistics
	const stats: SyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	let page = 1
	let beforeTimestamp: number | undefined
	let totalFetched = 0

	// Process pages as they come - don't accumulate all tokens
	while (true) {
		const url = beforeTimestamp
			? `https://api.streme.fun/api/tokens?before=${beforeTimestamp}`
			: "https://api.streme.fun/api/tokens"

		console.log(
			`Fetching Streme tokens page ${page}${beforeTimestamp ? ` (before timestamp: ${beforeTimestamp})` : ""}`,
		)

		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Failed to fetch tokens from Streme API: ${response.status} ${response.statusText}`)
		}

		const pageTokens: StremeToken[] = await response.json()

		if (pageTokens.length === 0) {
			console.log("No more tokens to fetch")
			break
		}

		totalFetched += pageTokens.length
		console.log(`Fetched ${pageTokens.length} tokens on page ${page}. Total fetched: ${totalFetched}`)

		// Process this page immediately
		const pageStats = await processStremePage(pageTokens, payload)
		stats.created += pageStats.created
		stats.updated += pageStats.updated
		stats.skipped += pageStats.skipped
		stats.failed += pageStats.failed

		console.log(
			`Page ${page} processed: ${pageStats.created} created, ${pageStats.updated} updated, ${pageStats.skipped} skipped, ${pageStats.failed} failed`,
		)

		// If we got fewer tokens than the page size, we've reached the end
		if (pageTokens.length < pageSize) {
			console.log("Reached the last page")
			break
		}

		// Get the timestamp from the last token for the next page
		const lastToken = pageTokens[pageTokens.length - 1]
		if (lastToken.timestamp?._seconds) {
			beforeTimestamp = lastToken.timestamp._seconds
		} else {
			console.log("Last token has no timestamp, stopping pagination")
			break
		}

		page++
	}

	console.log(
		`Streme sync completed: ${totalFetched} tokens fetched, ${stats.created} created, ${stats.updated} updated, ${stats.skipped} skipped, ${stats.failed} failed`,
	)
}

// # Helper Functions

async function processStremePage(
	stremeTokens: StremeToken[],
	payload: Awaited<ReturnType<typeof getPayloadInstance>>,
): Promise<SyncStats> {
	const stats: SyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	for (const stremeToken of stremeTokens) {
		// On-demand lookup for each token
		const existingToken = await getExistingToken(stremeToken.contract_address, stremeToken.chain_id, payload)

		if (existingToken) {
			// Token exists, update with Streme information
			const updateData: Partial<Token> = {}

			// Update basic token information
			updateData.name = stremeToken.name
			updateData.symbol = stremeToken.symbol
			updateData.tokenType = "pureSuperToken"
			updateData.isListed = false

			// Update logoUri if available and current one is empty
			if (shouldUpdateLogoUri(existingToken.logoUri, stremeToken.img_url)) {
				updateData.logoUri = stremeToken.img_url
			}

			// Add Streme-specific tags if they don't exist
			const stremeTags = ["streme", "supertoken"] as const
			const mergedTags = mergeTags(existingToken.tags, [...stremeTags])
			if (mergedTags) {
				updateData.tags = mergedTags
			}

			// Only update if there are changes
			if (hasChanges(existingToken, updateData)) {
				try {
					await payload.update({
						collection: "tokens",
						id: existingToken.id,
						data: updateData,
					})
					stats.updated++
				} catch (error) {
					console.error(
						`Failed to update Streme token ${stremeToken.contract_address} on chain ${stremeToken.chain_id}:`,
						error,
					)
					stats.failed++
				}
			} else {
				stats.skipped++
			}
		} else {
			// Token doesn't exist, create it
			try {
				await payload.create({
					collection: "tokens",
					data: {
						address: stremeToken.contract_address,
						chainId: stremeToken.chain_id,
						decimals: 18, // Streme tokens are typically 18 decimals
						name: stremeToken.name,
						symbol: stremeToken.symbol,
						logoUri: stremeToken.img_url || "",
						tags: ["streme", "supertoken"],
						tokenType: "pureSuperToken",
						underlyingAddress: undefined, // Pure super tokens don't have underlying address
						isListed: false,
						order: 0,
					},
				})

				stats.created++
			} catch (error) {
				console.error(
					`Failed to create Streme token ${stremeToken.contract_address} on chain ${stremeToken.chain_id}:`,
					error,
				)
				stats.failed++
			}
		}
	}

	return stats
}
