import { getPayloadInstance } from "@/payload"
import type { Chain } from "@/payload-types"
import { createStorageProvider, getStorageConfig } from "@/utils/storage"

interface PriceDataPoint {
	date: string
	price: string
}

interface StoredPriceData {
	version: string
	timestamp: string
	token: any
	coingeckoId?: string | null
	fetchedAt: string
	pricesUsd: PriceDataPoint[]
}

interface TokenPriceHistoryResponse {
	version: string
	timestamp: string
	token: {
		id: string
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
	coingeckoId: string | null
	fetchedAt: string
	priceHistory?: PriceDataPoint[]
}

export async function GET(request: Request, context: { params: Promise<{ chainId: string; address: string }> }) {
	try {
		const params = await context.params
		const { chainId, address } = params
		const url = new URL(request.url)
		const includePriceHistory = url.searchParams.get("includePriceHistory") === "true"

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

		const payload = await getPayloadInstance()

		// Get token from CMS
		const tokenId = `${chainIdNum}:${address.toLowerCase()}`
		const token = await payload.findByID({
			collection: "tokens",
			id: tokenId,
		})

		if (!token) {
			return Response.json(
				{ error: "Token not found", message: `Token ${address} not found on chain ${chainIdNum}` },
				{ status: 404 },
			)
		}

		// Conditionally fetch price history data and chain info
		let priceData: StoredPriceData | null = null
		if (includePriceHistory) {
			// Get chain info to find network name for price data
			const chain = await payload.findByID({
				collection: "chains",
				id: chainIdNum,
			})

			if (!chain) {
				return Response.json({ error: "Network not found", message: `Chain ${chainIdNum} not found` }, { status: 404 })
			}

			const storage = createStorageProvider(getStorageConfig())
			const networkName = (chain as Chain).canonicalName
			const priceFileName = `${token.symbol}_${address}.json`
			const priceDataJson = await storage.get(`daily-prices/${networkName}/${priceFileName}`)

			if (!priceDataJson) {
				return Response.json(
					{
						error: "Price data not found",
						message: `Price data not found for token ${address} on chain ${chainIdNum}`,
					},
					{ status: 404 },
				)
			}

			priceData = JSON.parse(priceDataJson)
		}

		// Transform to response format
		const responseData: TokenPriceHistoryResponse = {
			version: priceData?.version || "1.0.0",
			timestamp: priceData?.timestamp || new Date().toISOString(),
			token: {
				id: token.id,
				address: token.address,
				chainId: token.chainId,
				symbol: token.symbol,
				name: token.name,
				decimals: token.decimals,
				isListed: token.isListed || false,
				isNativeAssetSuperToken: token.tokenType === "nativeAssetSuperToken",
				isPureSuperToken: token.tokenType === "pureSuperToken",
				isWrapperSuperToken: token.tokenType === "wrapperSuperToken",
				underlyingAddress: token.underlyingAddress || null,
				lastUpdated: token.updatedAt,
			},
			coingeckoId: token.coingeckoId || null,
			fetchedAt: priceData?.fetchedAt || new Date().toISOString(),
			...(includePriceHistory && priceData && { priceHistory: priceData.pricesUsd }),
		}

		return Response.json(responseData, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		})
	} catch (error) {
		console.error("Error fetching price data:", error)
		return Response.json(
			{
				error: "Internal server error",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}

export const revalidate = 3600 // 1 hour
