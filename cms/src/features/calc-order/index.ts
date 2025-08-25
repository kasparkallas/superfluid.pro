import { getAllExistingTokens } from "@/features/sync-tokens"
import { getPayloadInstance } from "@/payload"
import type { Chain, Token } from "@/payload-types"
import type { FetchTokensStatisticsQuery } from "@/subgraph-protocol"
import { fetchAllTokenStatisticsWithProgress } from "./fetchTokenStatistics"

type TokenStatistic = FetchTokensStatisticsQuery["tokenStatistics"][0]

interface OrderScoreParams {
	isListed: boolean
	holders: number
	activeStreams: number
	totalStreams: number
}

/**
 * Calculate order score for a token based on various metrics
 * Score range: 0-1300
 */
function calculateOrderScore(params: OrderScoreParams): number {
	const { isListed, holders, activeStreams, totalStreams } = params

	let score = 0

	// Base score for listed tokens - significant boost
	if (isListed) {
		score += 100
	}

	// Holders score (150 points max)
	if (holders > 0) {
		// Use logarithmic scale to handle large ranges
		const holderScore = Math.min(150, Math.log10(holders + 1) * 60)
		score += holderScore
	}

	// Active streams score (150 points max)
	if (activeStreams > 0) {
		const streamScore = Math.min(150, Math.log10(activeStreams + 1) * 70)
		score += streamScore
	}

	// Total activity score (100 points max)
	if (totalStreams > 0) {
		const activityScore = Math.min(100, Math.log10(totalStreams + 1) * 40)
		score += activityScore
	}

	// Round to integer
	return Math.round(score)
}

/**
 * Fetch all mainnet chains from Payload CMS (excludes testnets)
 */
async function getMainnetChains(): Promise<Chain[]> {
	const payload = await getPayloadInstance()
	const chains: Chain[] = []
	let page = 1
	const limit = 100

	while (true) {
		const result = await payload.find({
			collection: "chains",
			page,
			limit,
			where: {
				isTestnet: { equals: false },
			},
		})

		chains.push(...result.docs)

		if (result.docs.length < limit) {
			break
		}

		page++
	}

	return chains
}

/**
 * Fetch token statistics for all chains
 */
async function fetchAllTokenStatistics(chains: Chain[]): Promise<Map<string, TokenStatistic>> {
	const statsMap = new Map<string, TokenStatistic>()

	console.log(`Fetching token statistics from ${chains.length} chains...`)

	for (const chain of chains) {
		// Skip if no subgraph endpoint
		if (!chain.subgraphV1?.hostedEndpoint) {
			console.log(`Skipping chain ${chain.id} (${chain.humanReadableName}) - no subgraph endpoint`)
			continue
		}

		try {
			console.log(`Fetching statistics for ${chain.humanReadableName}...`)

			const statistics = await fetchAllTokenStatisticsWithProgress({
				chainId: chain.id,
				endpoint: chain.subgraphV1.hostedEndpoint,
				chainName: chain.humanReadableName,
				onProgress: (fetched, chainName) => {
					process.stdout.write(`\r  ${chainName}: ${fetched} token statistics fetched...`)
				},
			})

			console.log(`\n   Fetched ${statistics.length} token statistics`)

			// Store statistics by token ID (format: chainId:address)
			for (const stat of statistics) {
				// Token ID in subgraph is just the address
				// We need to create the key as: chainId:address
				const key = `${chain.id}:${stat.id.toLowerCase()}`
				statsMap.set(key, stat)
			}
		} catch (error) {
			console.error(`\n   Failed to fetch statistics for ${chain.humanReadableName}:`, error)
		}
	}

	return statsMap
}

/**
 * Result structure for order calculation
 */
export interface OrderCalculationResult {
	total: number
	processed: number
	updated: number
	failed: number
	skipped: number
	updatedTokens: Array<{ tokenId: string; symbol: string; chainId: number; oldScore: number; newScore: number }>
	failedTokens: Array<{ tokenId: string; symbol: string; chainId: number; error: string }>
}

/**
 * Main function to calculate and update token order scores
 */
export async function calculateAndUpdateTokenOrders(): Promise<OrderCalculationResult> {
	console.log("Starting token order calculation...")

	const result: OrderCalculationResult = {
		total: 0,
		processed: 0,
		updated: 0,
		failed: 0,
		skipped: 0,
		updatedTokens: [],
		failedTokens: [],
	}

	// Fetch all data
	console.log("\n1. Fetching mainnet chains...")
	const chains = await getMainnetChains()
	console.log(`   Found ${chains.length} mainnet chains`)

	console.log("\n2. Fetching token statistics from subgraphs...")
	const statsMap = await fetchAllTokenStatistics(chains)
	console.log(`   Total statistics fetched: ${statsMap.size}`)

	console.log("\n3. Fetching all tokens from Payload...")
	const tokensMap = await getAllExistingTokens()
	console.log(`   Found ${tokensMap.size} tokens`)
	result.total = tokensMap.size

	// Create a set of mainnet chain IDs for filtering tokens
	const mainnetChainIds = new Set(chains.map((chain) => chain.id))

	// Calculate scores for all tokens
	console.log("\n4. Calculating order scores...")
	const tokensWithScores: { token: Token; newScore: number; oldScore: number }[] = []

	for (const [, token] of tokensMap) {
		// Skip testnet tokens since we only process mainnet
		if (!mainnetChainIds.has(token.chainId)) {
			result.skipped++
			continue
		}

		// Skip non-super tokens - they don't need order scores
		if (token.tokenType === "underlyingToken") {
			result.skipped++
			continue
		}

		result.processed++

		// Get statistics for this token
		const statKey = `${token.chainId}:${token.address.toLowerCase()}`
		const stats = statsMap.get(statKey)

		// Calculate new score
		const newScore = calculateOrderScore({
			isListed: token.isListed || false,
			holders: stats ? stats.totalNumberOfHolders || 0 : 0,
			activeStreams: stats ? stats.totalNumberOfActiveStreams || 0 : 0,
			totalStreams: stats ? (stats.totalNumberOfActiveStreams || 0) + (stats.totalNumberOfClosedStreams || 0) : 0,
		})

		// Only add to update list if score has changed
		const oldScore = token.order || 0
		if (Math.abs(newScore - oldScore) > 0.01) {
			tokensWithScores.push({ token, newScore, oldScore })
		}
	}

	console.log(`   ${tokensWithScores.length} tokens need order updates`)

	// Update tokens with changed scores
	if (tokensWithScores.length > 0) {
		console.log("\n5. Updating token orders...")

		const payload = await getPayloadInstance()

		for (const { token, newScore, oldScore } of tokensWithScores) {
			try {
				await payload.update({
					collection: "tokens",
					id: token.id,
					data: {
						order: newScore,
					},
				})
				result.updated++
				result.updatedTokens.push({
					tokenId: token.id,
					symbol: token.symbol,
					chainId: token.chainId,
					oldScore,
					newScore,
				})
				console.log(
					`   Updated ${token.symbol} on chain ${token.chainId}: ${oldScore.toFixed(2)} � ${newScore.toFixed(2)}`,
				)
			} catch (error) {
				result.failed++
				result.failedTokens.push({
					tokenId: token.id,
					symbol: token.symbol,
					chainId: token.chainId,
					error: error instanceof Error ? error.message : "Unknown error",
				})
				console.error(`   Failed to update ${token.symbol} on chain ${token.chainId}:`, error)
			}
		}

		console.log(`\n Order calculation complete: ${result.updated} updated, ${result.failed} failed`)
	} else {
		console.log("\n Order calculation complete: No updates needed")
	}

	return result
}
