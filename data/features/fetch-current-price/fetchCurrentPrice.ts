import { zeroAddress } from "viem"
import { getCoinGeckoClient } from "../coingecko"
import type { SuperTokenData } from "../fetch-super-tokens/core/types"
import { createPrefixedLogger } from "../logger"

const logger = createPrefixedLogger("Current Price")

type Address = `0x${string}`
type ChainId = number
type CoinId = string
type PlatformId = string

interface CurrentPriceResult {
	token: SuperTokenData
	priceUsd: string | null
	timestamp: string
	method: "classic" | "onchain" | "none"
	coingeckoId?: string
}

interface CoinGeckoMappings {
	mappings: Record<ChainId, Record<Address, CoinId>>
	metadata?: {
		chainIdToPlatformIds?: Record<ChainId, PlatformId>
	}
}

// Type definitions for CoinGecko API responses
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

async function fetchClassicCurrentPrice(token: SuperTokenData, coingeckoId: string): Promise<string | null> {
	const client = getCoinGeckoClient()

	try {
		logger.info("Fetching classic API price", {
			symbol: token.symbol,
			coingeckoId,
		})

		const response = await client.simple.price.get({
			vs_currencies: "usd",
			ids: coingeckoId,
		})

		const priceData = response as CoinGeckoSimplePriceResponse
		const price = priceData[coingeckoId]?.usd

		if (price !== undefined && price !== null) {
			return price.toString()
		}

		logger.warn("No price found in classic API response", {
			symbol: token.symbol,
			coingeckoId,
		})
		return null
	} catch (error) {
		logger.error("Error fetching classic price", {
			symbol: token.symbol,
			coingeckoId,
			error: (error as Error).message,
		})
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
		logger.info("Fetching onchain API price", {
			symbol: token.symbol,
			chainId: token.chainId,
			platformId,
			superTokenAddress: token.address,
			underlyingAddress: token.underlyingAddress,
			addressToQuery,
			isNativeAsset: token.isNativeAssetSuperToken,
		})

		const response = await client.onchain.simple.networks.tokenPrice.getAddresses(addressToQuery, {
			network: platformId,
		})

		const responseData = response as OnchainTokenPriceResponse
		const tokenPrices = responseData.data?.attributes?.token_prices
		const tokenData = tokenPrices?.[addressToQuery]

		if (tokenData && typeof tokenData === "string") {
			return tokenData
		}

		logger.warn("No price found in onchain API response", {
			symbol: token.symbol,
			addressQueried: addressToQuery,
		})
		return null
	} catch (error) {
		logger.error("Error fetching onchain price", {
			symbol: token.symbol,
			addressQueried: addressToQuery,
			error: (error as Error).message,
		})
		throw error
	}
}

export async function fetchCurrentPrice(
	token: SuperTokenData,
	coingeckoMappings: CoinGeckoMappings,
): Promise<CurrentPriceResult> {
	const timestamp = new Date().toISOString()

	// CoinGecko ID is always mapped to the Super Token address
	const coingeckoId = coingeckoMappings.mappings[token.chainId]?.[token.address.toLowerCase() as Address]

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
			const platformId = coingeckoMappings.metadata?.chainIdToPlatformIds?.[token.chainId]

			if (!platformId) {
				logger.warn("No platform ID found for chain", {
					chainId: token.chainId,
					symbol: token.symbol,
				})
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
		logger.error("Failed to fetch current price", {
			symbol: token.symbol,
			chainId: token.chainId,
			error: (error as Error).message,
		})

		return {
			token,
			priceUsd: null,
			timestamp,
			method: coingeckoId ? "classic" : "onchain",
			...(coingeckoId && { coingeckoId }),
		}
	}
}
