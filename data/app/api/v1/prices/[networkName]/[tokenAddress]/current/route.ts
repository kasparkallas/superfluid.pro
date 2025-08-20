import { find } from "lodash"
import { type NextRequest, NextResponse } from "next/server"
import { fetchCurrentPrice } from "@/features/fetch-current-price"
import type { AggregatedData, SuperTokenData } from "@/features/fetch-super-tokens/core/types"
import { createPrefixedLogger } from "@/features/logger"
import { createStorageProvider, getStorageConfig } from "@/features/storage"
import { createRateLimiter } from "@/lib/api/rate-limit"
import { ApiErrorSchema, CurrentPriceSchema, TokenParamSchema } from "@/lib/api/schemas"

const logger = createPrefixedLogger("API Current Price")

// Create rate limiter for this endpoint
const rateLimiter = createRateLimiter({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 60, // 60 requests per 5 minutes per IP
})

export async function GET(
	request: NextRequest,
	context: { params: Promise<{ networkName: string; tokenAddress: string }> },
) {
	// Apply rate limiting
	const rateLimitResponse = await rateLimiter(request)
	if (rateLimitResponse) {
		return rateLimitResponse
	}

	let params: { networkName: string; tokenAddress: string } | undefined

	try {
		// Await params in Next.js 15
		params = await context.params

		// Validate path parameters
		const paramsResult = TokenParamSchema.safeParse(params)
		if (!paramsResult.success) {
			const errorResponse = ApiErrorSchema.parse({
				message: "Invalid network name or token address",
				code: "VALIDATION_ERROR",
			})
			return NextResponse.json(errorResponse, { status: 400 })
		}

		const { networkName, tokenAddress } = paramsResult.data

		// Get data using existing storage abstraction
		const storageConfig = getStorageConfig(process.env.NODE_ENV === "production" ? "blob" : "local")
		const storage = createStorageProvider(storageConfig)

		// Fetch all super tokens data
		const allNetworksData = await storage.get("super-tokens/latest/all-networks.json")
		if (!allNetworksData) {
			const errorResponse = ApiErrorSchema.parse({
				message: "No super token data found",
			})
			return NextResponse.json(errorResponse, { status: 404 })
		}

		const aggregatedData: AggregatedData = JSON.parse(allNetworksData)

		// Verify network exists
		const networkChainId = Object.entries(aggregatedData.chains).find(([, chain]) => chain.name === networkName)?.[0]

		if (!networkChainId) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Network '${networkName}' not found`,
			})
			return NextResponse.json(errorResponse, { status: 404 })
		}

		// Find specific token in aggregated data
		const token = find(
			aggregatedData.tokens,
			(t: SuperTokenData) =>
				t.chainId === parseInt(networkChainId, 10) && t.address.toLowerCase() === tokenAddress.toLowerCase(),
		)

		if (!token) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Token '${tokenAddress}' not found on network '${networkName}'`,
			})
			return NextResponse.json(errorResponse, { status: 404 })
		}

		// Fetch CoinGecko mappings
		const coingeckoMappingsData = await storage.get("coingecko-mappings/super-token-ids.json")
		if (!coingeckoMappingsData) {
			const errorResponse = ApiErrorSchema.parse({
				message: "CoinGecko mappings not available",
				code: "MAPPINGS_UNAVAILABLE",
			})
			return NextResponse.json(errorResponse, { status: 503 })
		}

		const coingeckoMappings = JSON.parse(coingeckoMappingsData)

		// Fetch current price
		const priceResult = await fetchCurrentPrice(token, coingeckoMappings)

		// Validate response
		const validatedResponse = CurrentPriceSchema.parse(priceResult)

		return NextResponse.json(validatedResponse, {
			headers: {
				"Cache-Control": "public, s-maxage=300", // Cache for 5 minutes
			},
		})
	} catch (error) {
		// Log error with structured logging
		logger.error("Failed to fetch current price", {
			error: error instanceof Error ? error.message : String(error),
			// Only log non-sensitive error details
			errorType: error instanceof Error ? error.constructor.name : typeof error,
			networkName: params?.networkName,
			tokenAddress: params?.tokenAddress,
		})

		const errorResponse = ApiErrorSchema.parse({
			message: "Failed to fetch current price",
			code: "INTERNAL_ERROR",
		})
		return NextResponse.json(errorResponse, { status: 500 })
	}
}

export const revalidate = 300 // 5 minutes
