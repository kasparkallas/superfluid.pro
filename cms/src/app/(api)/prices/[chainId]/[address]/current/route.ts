import CoinGecko from "@coingecko/coingecko-typescript"
import { find } from "lodash"
import { zeroAddress } from "viem"
import { createStorageProvider, getPricingStorageConfig } from "@/utils/storage"

interface SuperTokenData {
	address: string
	chainId: number
	symbol: string
	name: string
	decimals: number
	isListed: boolean
	isNativeAssetSuperToken: boolean
	isPureSuperToken: boolean
	isWrapperSuperToken: boolean
	underlyingAddress: string | null
	lastUpdated: string
}

interface AggregatedData {
	version: string
	timestamp: string
	totalTokens: number
	tokens: SuperTokenData[]
	chains: Record<string, { name: string; tokenCount: number; endpoint: string }>
}

interface CoinGeckoMappings {
	mappings: Record<string, Record<string, string>>
	metadata?: {
		chainIdToPlatformIds?: Record<string, string>
	}
}

interface CoinGeckoSimplePriceResponse {
	[coinId: string]: {
		usd?: number
	}
}

interface OnchainTokenPriceResponse {
	data?: {
		attributes?: {
			token_prices?: Record<string, string>
		}
	}
}

interface CurrentPriceResponse {
	token: SuperTokenData
	priceUsd: string | null
	timestamp: string
	method: "classic" | "onchain" | "none"
	coingeckoId?: string
}

function getCoinGeckoClient() {
	if (!process.env.COINGECKO_API_KEY) {
		throw new Error("COINGECKO_API_KEY environment variable is not set")
	}

	return new CoinGecko({
		proAPIKey: process.env.COINGECKO_API_KEY,
		timeout: 5000, // 5 second timeout
		maxRetries: 2,
	})
}

async function fetchClassicCurrentPrice(_token: SuperTokenData, coingeckoId: string): Promise<string | null> {
	const client = getCoinGeckoClient()

	try {
		const response = await client.simple.price.get({
			vs_currencies: "usd",
			ids: coingeckoId,
		})

		const priceData = response as CoinGeckoSimplePriceResponse
		const price = priceData[coingeckoId]?.usd

		if (price !== undefined && price !== null) {
			return price.toString()
		}

		return null
	} catch (error) {
		console.error("Error fetching classic price:", error)
		throw error
	}
}

async function fetchOnchainCurrentPrice(token: SuperTokenData, platformId: string): Promise<string | null> {
	const client = getCoinGeckoClient()

	// For onchain API, use underlying token address if available and not a native asset
	const addressToQuery =
		token.underlyingAddress && token.underlyingAddress !== zeroAddress && !token.isNativeAssetSuperToken
			? token.underlyingAddress.toLowerCase()
			: token.address.toLowerCase()

	try {
		const response = await client.onchain.simple.networks.tokenPrice.getAddresses(addressToQuery, {
			network: platformId,
		})

		const responseData = response as OnchainTokenPriceResponse
		const tokenPrices = responseData.data?.attributes?.token_prices
		const tokenData = tokenPrices?.[addressToQuery]

		if (tokenData && typeof tokenData === "string") {
			return tokenData
		}

		return null
	} catch (error) {
		console.error("Error fetching onchain price:", error)
		throw error
	}
}

async function fetchCurrentPrice(
	token: SuperTokenData,
	coingeckoMappings: CoinGeckoMappings,
): Promise<CurrentPriceResponse> {
	const timestamp = new Date().toISOString()
	const coingeckoId = coingeckoMappings.mappings[token.chainId.toString()]?.[token.address.toLowerCase()]

	try {
		if (coingeckoId) {
			const price = await fetchClassicCurrentPrice(token, coingeckoId)
			return {
				token,
				priceUsd: price,
				timestamp,
				method: "classic",
				coingeckoId,
			}
		} else {
			const platformId = coingeckoMappings.metadata?.chainIdToPlatformIds?.[token.chainId.toString()]

			if (!platformId) {
				return {
					token,
					priceUsd: null,
					timestamp,
					method: "none",
				}
			}

			const price = await fetchOnchainCurrentPrice(token, platformId)
			return {
				token,
				priceUsd: price,
				timestamp,
				method: "onchain",
			}
		}
	} catch (error) {
		console.error("Failed to fetch current price:", error)

		return {
			token,
			priceUsd: null,
			timestamp,
			method: coingeckoId ? "classic" : "onchain",
			...(coingeckoId && { coingeckoId }),
		}
	}
}

export async function GET(_request: Request, context: { params: Promise<{ chainId: string; address: string }> }) {
	try {
		const params = await context.params
		const { chainId, address } = params

		// Parse chainId
		const chainIdNum = parseInt(chainId, 10)
		if (Number.isNaN(chainIdNum)) {
			return Response.json({ error: "Invalid chainId", message: "chainId must be a number" }, { status: 400 })
		}

		// Validate address format
		if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
			return Response.json(
				{ error: "Invalid address", message: "Address must be a valid Ethereum address" },
				{ status: 400 },
			)
		}

		// Get storage provider
		const storage = createStorageProvider(getPricingStorageConfig())

		// Fetch fresh token data from aggregated file
		const allNetworksData = await storage.get("super-tokens/latest/all-networks.json")
		if (!allNetworksData) {
			return Response.json({ error: "No super token data found" }, { status: 404 })
		}

		const aggregatedData: AggregatedData = JSON.parse(allNetworksData)

		// Find specific token in aggregated data
		const token = find(
			aggregatedData.tokens,
			(t: SuperTokenData) => t.chainId === chainIdNum && t.address.toLowerCase() === address.toLowerCase(),
		)

		if (!token) {
			return Response.json(
				{ error: "Token not found", message: `Token ${address} not found on chain ${chainIdNum}` },
				{ status: 404 },
			)
		}

		// Fetch CoinGecko mappings
		const coingeckoMappingsData = await storage.get("coingecko-mappings/super-token-ids.json")
		if (!coingeckoMappingsData) {
			return Response.json({ error: "CoinGecko mappings not available", code: "MAPPINGS_UNAVAILABLE" }, { status: 503 })
		}

		const coingeckoMappings: CoinGeckoMappings = JSON.parse(coingeckoMappingsData)

		// Fetch current price
		const priceResult = await fetchCurrentPrice(token, coingeckoMappings)

		return Response.json(priceResult, {
			headers: {
				"Cache-Control": "public, s-maxage=300", // Cache for 5 minutes
			},
		})
	} catch (error) {
		console.error("Error fetching current price:", error)
		return Response.json(
			{
				error: "Failed to fetch current price",
				code: "INTERNAL_ERROR",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}

export const revalidate = 300 // 5 minutes
