import type { Where } from "payload"
import type { TokenResponse } from "@/domains/tokens/types"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"

export async function GET(request: Request) {
	try {
		const url = new URL(request.url)
		const searchParams = url.searchParams

		// Parse query parameters
		const isListed = searchParams.get("isListed")
		const tokenType = searchParams.get("tokenType")
		const tags = searchParams.get("tags")
		const search = searchParams.get("search")
		const chainId = searchParams.get("chainId")
		const sortBy = searchParams.get("sortBy") || "order"
		const sortOrder = searchParams.get("sortOrder") || (sortBy === "order" ? "desc" : "asc")
		const limit = Math.min(parseInt(searchParams.get("limit") || "100", 10), 1000)
		const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1)

		// Build where clause
		const whereConditions: Where[] = []

		// Always exclude underlying tokens - only show Super Tokens
		whereConditions.push({ tokenType: { not_equals: "underlyingToken" } })

		if (isListed !== null) {
			whereConditions.push({ isListed: { equals: isListed === "true" } })
		}

		if (tokenType) {
			whereConditions.push({ tokenType: { equals: tokenType } })
		}

		if (tags) {
			whereConditions.push({ tags: { contains: tags } })
		}

		if (chainId) {
			const chainIdNum = parseInt(chainId, 10)
			if (!Number.isNaN(chainIdNum)) {
				whereConditions.push({ chainId: { equals: chainIdNum } })
			}
		}

		if (search) {
			// Use like for case-insensitive search
			whereConditions.push({
				or: [{ name: { like: search } }, { symbol: { like: search } }],
			})
		}

		// Build the final where clause
		const where: Where = whereConditions.length > 0 ? { and: whereConditions } : {}

		const payload = await getPayloadInstance()

		// Fetch tokens from CMS
		const result = await payload.find({
			collection: "tokens",
			where,
			sort: `${sortOrder === "desc" ? "-" : ""}${sortBy}`,
			limit,
			page,
		})

		const { docs: tokens, totalDocs, totalPages, hasNextPage, hasPrevPage, nextPage, prevPage, pagingCounter } = result

		// Transform tokens to API format
		const transformedTokens: TokenResponse[] = tokens.map(
			(token: Token): TokenResponse => ({
				id: token.id,
				chainId: token.chainId,
				address: token.address,
				name: token.name,
				symbol: token.symbol,
				decimals: token.decimals,
				logoUri: token.logoUri,
				isListed: token.isListed,
				coingeckoId: token.coingeckoId,
				tags: token.tags,
				tokenType: token.tokenType,
				underlyingAddress: token.underlyingAddress,
				note: token.note,
				order: token.order,
			}),
		)

		return Response.json({
			docs: transformedTokens,
			totalDocs,
			limit,
			totalPages,
			page,
			pagingCounter,
			hasPrevPage,
			hasNextPage,
			prevPage,
			nextPage,
		})
	} catch (error) {
		console.error("Error fetching tokens:", error)
		return Response.json(
			{
				error: "Failed to fetch tokens",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
