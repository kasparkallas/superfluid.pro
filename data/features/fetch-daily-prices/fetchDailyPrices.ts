import { Decimal } from "decimal.js"
import pLimit from "p-limit"
import type { CoinGeckoMappings } from "../../lib/api/schemas"
import { getCoinGeckoClient } from "../coingecko"
import { createPrefixedLogger } from "../logger"
import { createStorageProvider, getStorageConfig, type StorageProvider, type StorageType } from "../storage"
import type { AggregatedData, SuperTokenData } from "../types"

const logger = createPrefixedLogger("Daily Prices")

// Constants
const DAILY_PRICE_DAYS_INITIAL: "max" = "max" // Get all available history on first run
const DAILY_PRICE_DAYS_UPDATE: "7" = "7" // Get last 7 days for updates
const MINIMUM_LIQUIDITY_USD = 500
const API_CALL_DELAY_MS = 100
const CONCURRENCY_LIMIT = 10
const OHLCV_TIMEFRAME = "day"
const DEFAULT_CURRENCY = "usd"
const PRICE_DECIMAL_PLACES = 20

const coingeckoPro = getCoinGeckoClient()

// Helper function to format price using Decimal.js
function formatPrice(price: number): string {
	try {
		const decimal = new Decimal(price)
		return decimal.toFixed(PRICE_DECIMAL_PLACES).replace(/\.?0+$/, "")
	} catch (error) {
		logger.warn("Failed to format price with Decimal.js, falling back to string conversion", {
			price,
			error: (error as Error).message,
		})
		return price.toString()
	}
}

// Helper function to fetch classic API prices
async function fetchClassicPrices(
	token: { symbol: string },
	coingeckoId: string,
	days: "max" | "7",
): Promise<Array<{ date: string; price: string }>> {
	logger.info("Fetching classic OHLC prices", {
		symbol: token.symbol,
		coingeckoId,
		days,
	})

	const ohlcData = await coingeckoPro.coins.ohlc.get(coingeckoId, {
		vs_currency: DEFAULT_CURRENCY,
		days: days,
	})

	return ohlcData
		.filter((item: number[]) => item.length >= 5 && item[0] != null && item[4] != null)
		.map((item: number[]) => ({
			date: new Date(item[0]!).toISOString().substring(0, 10),
			price: formatPrice(item[4]!), // Close price with Decimal.js formatting
		}))
}

// Helper function to fetch onchain API prices
async function fetchOnchainPrices(
	token: { symbol: string; chainId: number; address: string },
	platformId: string,
): Promise<Array<{ date: string; price: string }>> {
	logger.info("Fetching onchain prices", {
		symbol: token.symbol,
		chainId: token.chainId,
	})

	// Step 1: Find pools for this token
	logger.info("Finding pools", {
		symbol: token.symbol,
		platformId,
	})
	const poolsResponse = await coingeckoPro.onchain.networks.tokens.pools.get(token.address, {
		network: platformId,
		include: "base_token,quote_token,dex",
		sort: "h24_volume_usd_liquidity_desc",
	})

	if (!poolsResponse.data || poolsResponse.data.length === 0) {
		logger.warn("No pools found", { symbol: token.symbol })
		return []
	}

	// Step 2: Select the best pool (highest liquidity)
	let bestPool = null
	let maxLiquidity = -1

	for (const pool of poolsResponse.data) {
		const liquidityStr = pool.attributes?.reserve_in_usd
		if (liquidityStr) {
			const liquidity = parseFloat(liquidityStr)
			if (liquidity > MINIMUM_LIQUIDITY_USD && liquidity > maxLiquidity) {
				maxLiquidity = liquidity
				bestPool = pool
			}
		}
	}

	if (!bestPool?.attributes?.address) {
		logger.warn("No suitable pool found", {
			symbol: token.symbol,
			minLiquidity: MINIMUM_LIQUIDITY_USD,
		})
		return []
	}

	logger.info("Using pool", {
		symbol: token.symbol,
		poolAddress: bestPool.attributes.address,
		liquidity: maxLiquidity.toFixed(0),
	})

	// Step 3: Fetch OHLCV data from the best pool
	const ohlcvResponse = await coingeckoPro.onchain.networks.pools.ohlcv.getTimeframe(OHLCV_TIMEFRAME, {
		network: platformId,
		pool_address: bestPool.attributes.address,
		currency: DEFAULT_CURRENCY,
		aggregate: "1",
		limit: 30,
		token: token.address.toLowerCase(),
	})

	const ohlcvList = ohlcvResponse.data?.attributes?.ohlcv_list || []
	return ohlcvList
		.filter((item: number[]) => item.length >= 5 && item[0] != null && item[4] != null)
		.map((item: number[]) => ({
			date: new Date(item[0]! * 1000).toISOString().substring(0, 10), // Convert from seconds to milliseconds
			price: formatPrice(item[4]!), // Close price with Decimal.js formatting
		}))
}

// Type definitions
type TokenPriceData = {
	token: SuperTokenData
	coingeckoId?: string
	prices: Array<{ date: string; price: string }>
	method: "classic" | "onchain" | "none"
}

// Helper function to read existing price data
async function readExistingPriceData(
	storage: StorageProvider,
	chainName: string,
	token: { symbol: string; address: string },
): Promise<Array<{ date: string; price: string }> | null> {
	const sanitizedSymbol = token.symbol.replace(/[/\\]/g, "")
	const filename = `daily-prices/${chainName}/${sanitizedSymbol}_${token.address}.json`

	try {
		const existingData = await storage.get(filename)
		if (!existingData) return null

		const parsed = JSON.parse(existingData)
		// Support both old format (with full token data) and new format (with tokenReference)
		// This ensures backward compatibility during transition
		return parsed.pricesUsd || null
	} catch (_error) {
		// File doesn't exist or is invalid
		return null
	}
}

// Helper function to merge price data (newer data takes precedence)
function mergePriceData(
	existingPrices: Array<{ date: string; price: string }>,
	newPrices: Array<{ date: string; price: string }>,
): Array<{ date: string; price: string }> {
	const priceMap = new Map<string, string>()

	// Add existing prices
	for (const price of existingPrices) {
		priceMap.set(price.date, price.price)
	}

	// Override with new prices (newer data takes precedence)
	for (const price of newPrices) {
		priceMap.set(price.date, price.price)
	}

	// Convert back to array and sort by date (newest first)
	return Array.from(priceMap.entries())
		.map(([date, price]) => ({ date, price }))
		.sort((a, b) => b.date.localeCompare(a.date))
}

// Helper function to process a single token
async function processSingleToken(
	token: TokenPriceData["token"],
	coingeckoMappings: {
		mappings: Record<number, Record<string, string>>
		metadata?: { chainIdToPlatformIds?: Record<number, string> }
	},
	existingPrices: Array<{ date: string; price: string }> | null,
): Promise<TokenPriceData> {
	// Get CoinGecko ID from fresh mappings
	const coingeckoId = coingeckoMappings.mappings[token.chainId]?.[token.address.toLowerCase()]

	// Determine days to fetch based on whether we have existing data
	const daysToFetch = existingPrices && existingPrices.length > 0 ? DAILY_PRICE_DAYS_UPDATE : DAILY_PRICE_DAYS_INITIAL

	try {
		if (coingeckoId) {
			// Use classic API for tokens with CoinGecko ID
			const newPrices = await fetchClassicPrices(token, coingeckoId, daysToFetch)
			const prices = existingPrices ? mergePriceData(existingPrices, newPrices) : newPrices
			return {
				token,
				coingeckoId,
				prices,
				method: "classic",
			}
		} else {
			// Use onchain API for tokens without CoinGecko ID
			const platformId = coingeckoMappings.metadata?.chainIdToPlatformIds?.[token.chainId]

			if (platformId) {
				const newPrices = await fetchOnchainPrices(token, platformId)
				const prices = existingPrices ? mergePriceData(existingPrices, newPrices) : newPrices
				return {
					token,
					prices,
					method: "onchain",
				}
			} else {
				logger.warn("No platform ID found", {
					chainId: token.chainId,
					symbol: token.symbol,
				})
				return {
					token,
					prices: [],
					method: "none",
				}
			}
		}
	} catch (error) {
		logger.error("Error fetching prices", {
			symbol: token.symbol,
			error: (error as Error).message,
		})
		return {
			token,
			coingeckoId,
			prices: [],
			method: coingeckoId ? "classic" : "onchain",
		}
	}
}

const fetchDailyPrices = async (storageType: StorageType, tokenLimit?: number, specificTokenAddress?: string) => {
	// Initialize storage
	const storageConfig = getStorageConfig(storageType)
	const storage: StorageProvider = createStorageProvider(storageConfig)
	logger.info("Using storage", {
		type: storageConfig.type,
		localPath: storageConfig.localPath,
	})

	// IMPORTANT: Always fetch fresh token data from fetch-super-tokens storage
	// This ensures we're always using the latest token metadata and statistics
	const allNetworksData = await storage.get("super-tokens/latest/all-networks.json")

	if (!allNetworksData) {
		throw new Error("No super token data found. Please run fetch-super-tokens first.")
	}

	let aggregatedData: AggregatedData
	try {
		aggregatedData = JSON.parse(allNetworksData)
	} catch (error) {
		throw new Error("Failed to parse super token data. The file might be corrupted.", { cause: error })
	}
	logger.info("Found tokens", {
		totalTokens: aggregatedData.totalTokens,
		chainCount: Object.keys(aggregatedData.chains).length,
	})

	// Group tokens by chain for efficient processing
	const tokensByChain = new Map<number, typeof aggregatedData.tokens>()

	for (const token of aggregatedData.tokens) {
		const chainTokens = tokensByChain.get(token.chainId) || []
		chainTokens.push(token)
		tokensByChain.set(token.chainId, chainTokens)
	}

	logger.info("Processing tokens", { chainCount: tokensByChain.size })

	// IMPORTANT: Always fetch fresh CoinGecko ID mappings from storage
	// This ensures we're using the latest mappings from fetch-coingecko-ids
	const coingeckoMappingsData = await storage.get("coingecko-mappings/super-token-ids.json")
	if (!coingeckoMappingsData) {
		throw new Error("No CoinGecko mappings found. Please run fetch-coingecko-ids first.")
	}

	let coingeckoMappings: CoinGeckoMappings
	try {
		coingeckoMappings = JSON.parse(coingeckoMappingsData)
	} catch (error) {
		throw new Error("Failed to parse CoinGecko mappings. The file might be corrupted.", { cause: error })
	}
	logger.info("Found fresh CoinGecko mappings", {
		mappedTokens: coingeckoMappings.mappedSuperTokens,
		totalTokens: coingeckoMappings.totalSuperTokens,
	})

	// Process tokens with optional limit or specific token - distribute across chains for better testing
	let tokensToProcess: typeof aggregatedData.tokens
	let modeDescription: string

	if (specificTokenAddress) {
		// Filter for specific token address (case-insensitive)
		const normalizedAddress = specificTokenAddress.toLowerCase()
		tokensToProcess = aggregatedData.tokens.filter((token) => token.address.toLowerCase() === normalizedAddress)

		if (tokensToProcess.length === 0) {
			throw new Error(`Token with address '${specificTokenAddress}' not found in super token data`)
		}

		modeDescription = `specific token ${specificTokenAddress} (${tokensToProcess.length} instance${tokensToProcess.length > 1 ? "s" : ""} across chains)`
		logger.info("Filtering for specific token", {
			address: specificTokenAddress,
			foundCount: tokensToProcess.length,
			chains: tokensToProcess.map((t) => t.chainId),
		})
	} else if (tokenLimit) {
		// When limiting, prioritize listed tokens and distribute across chains
		const tokensPerChain = Math.ceil(tokenLimit / tokensByChain.size)
		const selectedTokens: typeof aggregatedData.tokens = []

		for (const [, chainTokens] of tokensByChain) {
			// Sort tokens: listed tokens first, then by holder count (descending)
			const sortedTokens = chainTokens
				.slice() // Create a copy to avoid mutating original
				.sort((a, b) => {
					// Listed tokens come first
					if (a.isListed !== b.isListed) {
						return a.isListed ? -1 : 1
					}
					// Then sort by holder count (more holders = more likely to have price data)
					return b.totalNumberOfHolders - a.totalNumberOfHolders
				})

			const tokensFromThisChain = sortedTokens.slice(0, Math.min(tokensPerChain, tokenLimit - selectedTokens.length))
			selectedTokens.push(...tokensFromThisChain)
			if (selectedTokens.length >= tokenLimit) break
		}

		tokensToProcess = selectedTokens.slice(0, tokenLimit)
		const listedCount = tokensToProcess.filter((t) => t.isListed).length
		modeDescription = `${tokenLimit} tokens distributed across chains (${listedCount} listed, limited)`
	} else {
		tokensToProcess = aggregatedData.tokens
		modeDescription = `all ${tokensToProcess.length} tokens`
	}
	logger.info("Processing mode", { mode: modeDescription })

	// Process tokens in parallel with concurrency control
	const limit = pLimit(CONCURRENCY_LIMIT)
	logger.info("Processing tokens", { concurrencyLimit: CONCURRENCY_LIMIT })

	const pricePromises = tokensToProcess.map((token) =>
		limit(async () => {
			await new Promise((resolve) => setTimeout(resolve, API_CALL_DELAY_MS))

			// Read existing price data if available
			const chainName = aggregatedData.chains[token.chainId]?.name || `chain-${token.chainId}`
			const existingPrices = await readExistingPriceData(storage, chainName, token)

			if (existingPrices && existingPrices.length > 0) {
				logger.info("Found existing prices", {
					symbol: token.symbol,
					existingPriceCount: existingPrices.length,
					mode: "update",
				})
			}

			return processSingleToken(token, coingeckoMappings, existingPrices)
		}),
	)

	const results = await Promise.allSettled(pricePromises)

	const tokensWithPrices = results
		.filter((result) => result.status === "fulfilled")
		.map((result) => (result as PromiseFulfilledResult<TokenPriceData>).value)

	// Handle rejected promises
	const failedTasks = results.filter((result) => result.status === "rejected")
	if (failedTasks.length > 0) {
		logger.error("Tasks failed unexpectedly", { failedCount: failedTasks.length })
		failedTasks.forEach((failure, index) => {
			logger.error("Task failed", {
				taskIndex: index + 1,
				reason: (failure.reason as Error).message || String(failure.reason),
			})
		})
	}

	const successfulFetches = tokensWithPrices.filter((t) => t.prices.length > 0).length
	logger.info("Successfully fetched prices", {
		successful: successfulFetches,
		total: tokensWithPrices.length,
		successRate: `${((successfulFetches / tokensWithPrices.length) * 100).toFixed(1)}%`,
	})

	// Log summary by method
	const methodCounts = tokensWithPrices.reduce(
		(acc, t) => {
			acc[t.method] = (acc[t.method] || 0) + 1
			return acc
		},
		{} as Record<string, number>,
	)
	logger.info("Method usage", methodCounts)

	// Save individual files per token organized by network
	const timestamp = new Date().toISOString()
	const savedFiles: string[] = []

	for (const tokenData of tokensWithPrices) {
		const { token, coingeckoId, prices } = tokenData

		// Get network name from aggregated data
		const networkName = aggregatedData.chains[token.chainId]?.name || `chain-${token.chainId}`

		// Create filename: symbol_address.json
		// Only remove truly problematic filesystem characters (mainly slashes)
		let sanitizedSymbol = token.symbol
			.replace(/[/\\]/g, "") // Remove slashes (filesystem path separators)
			.replace(/\s+/g, "_") // Replace spaces with underscores
			.substring(0, 50) // Limit length to prevent filesystem issues

		// If symbol becomes empty after sanitization, use fallback
		if (!sanitizedSymbol) {
			sanitizedSymbol = "UNKNOWN"
		}

		const filename = `daily-prices/${networkName}/${sanitizedSymbol}_${token.address}.json`

		// Prepare individual token data - store the entire token object
		// This token data comes fresh from fetch-super-tokens storage
		const tokenFileData = {
			version: "1.0.0",
			timestamp,
			testRun: false,
			token, // Pass the whole SuperTokenData object
			coingeckoId,
			fetchedAt: timestamp,
			pricesUsd: prices,
		}

		try {
			await storage.put(filename, JSON.stringify(tokenFileData, null, 2), {
				contentType: "application/json",
			})
			savedFiles.push(filename)
			logger.info("Saved token price data", {
				symbol: token.symbol,
				chainId: token.chainId,
				filename,
			})
		} catch (error) {
			logger.error("Failed to save token", {
				symbol: token.symbol,
				error: (error as Error).message,
			})
		}
	}

	// Also save a summary file
	const summaryData = {
		version: "1.0.0",
		timestamp,
		testRun: false,
		summary: {
			totalTokensTested: tokensToProcess.length,
			totalTokensAvailable: aggregatedData.totalTokens,
			successfulFetches,
			methodCounts,
			savedFiles,
		},
		networks: Object.fromEntries(
			Array.from(tokensByChain.entries()).map(([chainId, tokens]) => [
				chainId,
				{
					name: aggregatedData.chains[chainId]?.name || `chain-${chainId}`,
					tokenCount: tokens.length,
				},
			]),
		),
	}

	const summaryFilename = `daily-prices/summary-${timestamp.split("T")[0]}.json`
	await storage.put(summaryFilename, JSON.stringify(summaryData, null, 2), {
		contentType: "application/json",
	})

	logger.info("Summary saved", {
		summaryFile: summaryFilename,
		individualFileCount: savedFiles.length,
	})

	return {
		success: true,
		totalTokensTested: tokensToProcess.length,
		totalTokensAvailable: aggregatedData.totalTokens,
		successfulFetches,
		methodCounts,
		summaryFile: summaryFilename,
		individualFiles: savedFiles,
		chains: tokensByChain.size,
		...(specificTokenAddress && { specificTokenAddress }),
	}
}

export { fetchDailyPrices }
