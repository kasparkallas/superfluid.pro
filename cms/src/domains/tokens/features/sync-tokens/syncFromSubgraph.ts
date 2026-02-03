import { getPayloadInstance } from "@/payload"
import type { Chain, Token } from "@/payload-types"
import { type FetchAllTokensQuery, getBuiltGraphSDKWithUrl } from "@/subgraph-protocol"
import { getAllChains, getExistingToken, getTokenTags, hasChanges, mergeTags, type TokenType } from "."

// # Types
type SubgraphToken = FetchAllTokensQuery["tokens"][number]

interface ChainSyncStats {
	created: number
	updated: number
	skipped: number
	failed: number
}

// # Main Function
export async function syncFromSubgraph() {
	console.log("Starting subgraph token sync...")

	const payload = await getPayloadInstance()

	// Fetch all chains (both mainnets and testnets)
	const chains = await getAllChains("mainnetsAndTestnets", payload)

	// Filter chains that have subgraph endpoints
	const chainsWithSubgraph = chains.filter(
		(chain) => chain.subgraphV1?.hostedEndpoint && chain.subgraphV1.hostedEndpoint !== "",
	)

	console.log(
		`Found ${chainsWithSubgraph.length} chains with subgraph endpoints (out of ${chains.length} total chains)`,
	)

	// Track overall statistics
	let totalCreated = 0
	let totalUpdated = 0
	let totalSkipped = 0
	let totalFailed = 0
	let chainsProcessed = 0

	// Process each chain
	for (const chain of chainsWithSubgraph) {
		try {
			const stats = await syncChainTokens(chain, payload)
			totalCreated += stats.created
			totalUpdated += stats.updated
			totalSkipped += stats.skipped
			totalFailed += stats.failed
			chainsProcessed++
		} catch (error) {
			console.error(`Failed to sync tokens for chain ${chain.humanReadableName} (${chain.id}):`, error)
			// Continue with next chain instead of failing entire sync
		}
	}

	// Log final summary
	const totalTokens = totalCreated + totalUpdated + totalSkipped + totalFailed
	console.log(
		`Subgraph sync completed: ${chainsProcessed} chains processed, ${totalTokens} tokens total (${totalCreated} created, ${totalUpdated} updated, ${totalSkipped} skipped, ${totalFailed} failed)`,
	)
}

// # Helper Functions

async function syncChainTokens(
	chain: Chain,
	payload: Awaited<ReturnType<typeof getPayloadInstance>>,
): Promise<ChainSyncStats> {
	const endpoint = chain.subgraphV1?.hostedEndpoint
	if (!endpoint) {
		throw new Error(`No subgraph endpoint for chain ${chain.id}`)
	}

	console.log(`Syncing tokens for chain ${chain.humanReadableName} (${chain.id})...`)

	const sdk = getBuiltGraphSDKWithUrl(endpoint)

	// Track statistics for this chain
	const stats: ChainSyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	// Pagination using id_gt pattern - process each page immediately
	let lastId = ""
	let pageCount = 0
	let totalTokensFetched = 0

	while (true) {
		const result = await sdk.FetchAllTokens({ id_gt: lastId })
		const tokens = result.tokens

		if (tokens.length === 0) {
			break
		}

		pageCount++
		totalTokensFetched += tokens.length

		console.log(
			`Fetched page ${pageCount} with ${tokens.length} tokens for chain ${chain.humanReadableName}. Total fetched: ${totalTokensFetched}`,
		)

		// Process this page immediately
		const pageStats = await processSubgraphPage(tokens, chain, payload)
		stats.created += pageStats.created
		stats.updated += pageStats.updated
		stats.skipped += pageStats.skipped
		stats.failed += pageStats.failed

		// Update lastId for next iteration
		lastId = tokens[tokens.length - 1].id

		// Safety check: if we got fewer than 1000 tokens, we've reached the end
		if (tokens.length < 1000) {
			break
		}
	}

	// Log summary for this chain
	console.log(
		`Processed ${totalTokensFetched} tokens for ${chain.humanReadableName}: ${stats.created} created, ${stats.updated} updated, ${stats.skipped} skipped, ${stats.failed} failed`,
	)

	return stats
}

async function processSubgraphPage(
	tokens: SubgraphToken[],
	chain: Chain,
	payload: Awaited<ReturnType<typeof getPayloadInstance>>,
): Promise<ChainSyncStats> {
	const stats: ChainSyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	for (const subgraphToken of tokens) {
		const tokenType = determineTokenType(subgraphToken)
		const tags = getTokenTags(tokenType, chain.isTestnet || false)

		// On-demand lookup for each token
		const existingToken = await getExistingToken(subgraphToken.id, chain.id, payload)

		// Extract underlying address (normalize empty string to null)
		const underlyingAddress =
			subgraphToken.underlyingAddress &&
			subgraphToken.underlyingAddress !== "0x0000000000000000000000000000000000000000"
				? subgraphToken.underlyingAddress
				: null

		if (existingToken) {
			// Token exists, update isListed and tags
			const updateData: Partial<Token> = {}

			const updatedIsListed = subgraphToken.isListed || existingToken.isListed

			// Update isListed field
			if (existingToken.isListed !== updatedIsListed) {
				updateData.isListed = updatedIsListed
			}

			// Update tags by adding missing ones
			const mergedTags = mergeTags(existingToken.tags, tags)
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
					console.error(`Failed to update token ${subgraphToken.id} on chain ${chain.id}:`, error)
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
						address: subgraphToken.id,
						chainId: chain.id,
						decimals: subgraphToken.decimals,
						name: subgraphToken.name,
						symbol: subgraphToken.symbol,
						logoUri: "",
						tags,
						tokenType,
						underlyingAddress,
						isListed: subgraphToken.isListed,
						order: 0,
					},
				})

				stats.created++
			} catch (error) {
				console.error(`Failed to create token ${subgraphToken.id} on chain ${chain.id}:`, error)
				stats.failed++
			}
		}
	}

	return stats
}

function determineTokenType(token: SubgraphToken): TokenType {
	if (!token.isSuperToken) {
		return "underlyingToken"
	}

	if (token.isNativeAssetSuperToken) {
		return "nativeAssetSuperToken"
	}

	// Check if underlyingAddress exists and is not zero address
	if (token.underlyingAddress && token.underlyingAddress !== "0x0000000000000000000000000000000000000000") {
		return "wrapperSuperToken"
	}

	return "pureSuperToken"
}
