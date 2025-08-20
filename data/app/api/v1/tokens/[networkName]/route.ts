import { filter, orderBy } from "lodash"
import { type NextRequest, NextResponse } from "next/server"
import type { SuperTokenData } from "@/features/fetch-super-tokens/core/types"
import { createStorageProvider, getStorageConfig } from "@/features/storage"
import { ApiErrorSchema, NetworkParamSchema, TokenFilterQuerySchema, TokensResponseSchema } from "@/lib/api/schemas"

export async function GET(request: NextRequest, context: { params: Promise<{ networkName: string }> }) {
	try {
		// Await params in Next.js 15
		const params = await context.params

		// Validate path parameters
		const paramsResult = NetworkParamSchema.safeParse(params)
		if (!paramsResult.success) {
			const errorResponse = ApiErrorSchema.parse({
				message: "Invalid network name",
				code: "VALIDATION_ERROR",
			})
			return NextResponse.json(errorResponse, { status: 400 })
		}

		// Validate query parameters
		const searchParams = Object.fromEntries(request.nextUrl.searchParams)
		const queryResult = TokenFilterQuerySchema.safeParse(searchParams)

		if (!queryResult.success) {
			const errorResponse = ApiErrorSchema.parse({
				message: "Invalid query parameters",
				code: "VALIDATION_ERROR",
			})
			return NextResponse.json(errorResponse, { status: 400 })
		}

		const { networkName } = paramsResult.data
		const { isListed, isNativeAssetSuperToken, isPureSuperToken, isWrapperSuperToken, sortBy, sortOrder } =
			queryResult.data

		// Get data using existing storage abstraction
		const storageConfig = getStorageConfig(process.env.NODE_ENV === "production" ? "blob" : "local")
		const storage = createStorageProvider(storageConfig)

		// Try to get network-specific data first
		const networkTokensJson = await storage.get(`super-tokens/latest/${networkName}.json`)
		if (!networkTokensJson) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Network '${networkName}' not found`,
			})
			return NextResponse.json(errorResponse, { status: 404 })
		}

		const networkData = JSON.parse(networkTokensJson)
		let tokens: SuperTokenData[] = networkData.tokens

		// Apply filters using lodash
		if (isListed !== undefined) {
			tokens = filter(tokens, { isListed })
		}
		if (isNativeAssetSuperToken !== undefined) {
			tokens = filter(tokens, { isNativeAssetSuperToken })
		}
		if (isPureSuperToken !== undefined) {
			tokens = filter(tokens, { isPureSuperToken })
		}
		if (isWrapperSuperToken !== undefined) {
			tokens = filter(tokens, { isWrapperSuperToken })
		}

		// Apply sorting using lodash
		tokens = orderBy(tokens, [sortBy], [sortOrder])

		// Validate response
		const responseData = TokensResponseSchema.parse(tokens)

		return NextResponse.json(responseData, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		})
	} catch (error) {
		console.error("API Error fetching network tokens:", error)
		const errorResponse = ApiErrorSchema.parse({
			message: "Internal server error",
		})
		return NextResponse.json(errorResponse, { status: 500 })
	}
}

export const revalidate = 3600 // 1 hour
