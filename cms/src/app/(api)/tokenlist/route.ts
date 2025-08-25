import superfluidMetadata from "@superfluid-finance/metadata"
import type { TokenInfo as OriginalTokenInfo, TokenList } from "@uniswap/token-lists"
import { orderBy } from "lodash-es"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"

// SuperToken extension types
export type SuperTokenExtensions = {
	readonly extensions: {
		readonly superTokenInfo:
			| {
					readonly type: "Pure" | "Native Asset"
			  }
			| {
					readonly type: "Wrapper"
					readonly underlyingTokenAddress: `0x${string}`
			  }
	}
}

export interface TokenInfo extends Omit<OriginalTokenInfo, "address"> {
	readonly address: `0x${string}`
}

export type SuperTokenInfo = TokenInfo & SuperTokenExtensions
type UnderlyingTokenInfo = TokenInfo

export type SuperTokenList = Omit<TokenList, "tokens"> & {
	readonly tokens: (SuperTokenInfo | UnderlyingTokenInfo)[]
}

// Helper function to map CMS token to TokenList format
function mapTokenToTokenListFormat(token: Token): SuperTokenInfo | UnderlyingTokenInfo {
	const baseToken: TokenInfo = {
		chainId: token.chainId,
		address: token.address as `0x${string}`,
		name: token.name,
		symbol: token.symbol,
		decimals: token.decimals,
		...(token.logoUri && { logoURI: token.logoUri }),
		...(token.tags && token.tags.length > 0 && { tags: token.tags }),
	}

	// Map token types to extensions
	switch (token.tokenType) {
		case "pureSuperToken":
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Pure",
					},
				},
			} as SuperTokenInfo

		case "nativeAssetSuperToken":
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Native Asset",
					},
				},
			} as SuperTokenInfo

		case "wrapperSuperToken":
			if (!token.underlyingAddress) {
				// Fallback to Pure type if no underlying address (shouldn't happen based on validation)
				return {
					...baseToken,
					extensions: {
						superTokenInfo: {
							type: "Pure",
						},
					},
				} as SuperTokenInfo
			}
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Wrapper",
						underlyingTokenAddress: token.underlyingAddress as `0x${string}`,
					},
				},
			} as SuperTokenInfo
		default:
			// Regular token without extensions
			return baseToken
	}
}

export const GET = async (request: Request) => {
	try {
		const url = new URL(request.url)
		const searchParams = url.searchParams

		// Parse query parameters for filtering
		const isListed = searchParams.get("isListed")
		const tokenType = searchParams.get("tokenType")
		const tags = searchParams.get("tags")
		const excludeTags = searchParams.get("excludeTags")
		const chainId = searchParams.get("chainId")

		// Build where clause - when no filters are specified, include all tokens
		const where: any = {}

		if (isListed !== null) {
			where.isListed = { equals: isListed === "true" }
		}

		if (tokenType) {
			where.tokenType = { equals: tokenType }
		}

		if (tags) {
			// Support comma-separated tags
			const tagList = tags.split(",").filter(Boolean)
			if (tagList.length > 0) {
				where.tags = { contains: tagList[0] } // Payload doesn't support multiple contains in one query
			}
		}

		if (excludeTags) {
			// Support comma-separated tags to exclude
			const excludeTagList = excludeTags.split(",").filter(Boolean)
			if (excludeTagList.length > 0) {
				// Use not_contains to exclude tokens with specific tags
				where.tags = { ...where.tags, not_contains: excludeTagList[0] }
			}
		}

		if (chainId) {
			// Support comma-separated chain IDs
			const chainIds = chainId.split(",").map(Number).filter(Number.isInteger)
			if (chainIds.length === 1) {
				where.chainId = { equals: chainIds[0] }
			} else if (chainIds.length > 1) {
				where.chainId = { in: chainIds }
			}
		}

		// Note: Empty where object returns all tokens, which is the desired behavior

		const payload = await getPayloadInstance()

		// Get tokens from the database with filtering (public endpoint)
		const { docs: tokens } = await payload.find({
			collection: "tokens",
			limit: 10000, // Get all matching tokens
			where,
			sort: "chainId,symbol", // Sort by chainId then symbol for consistent ordering
		})

		// Collect underlying token addresses from wrapper super tokens
		const underlyingAddresses = new Set<string>()
		for (const token of tokens) {
			if (token.tokenType === "wrapperSuperToken" && token.underlyingAddress) {
				// Create composite ID for underlying token (chainId:address)
				underlyingAddresses.add(`${token.chainId}:${token.underlyingAddress.toLowerCase()}`)
			}
		}

		// Query for underlying tokens if any wrapper super tokens exist
		let underlyingTokens: Token[] = []
		if (underlyingAddresses.size > 0) {
			const { docs: foundUnderlyingTokens } = await payload.find({
				collection: "tokens",
				limit: 1000,
				where: {
					id: { in: Array.from(underlyingAddresses) },
				},
			})
			underlyingTokens = foundUnderlyingTokens
		}

		// Combine all tokens and deduplicate by composite ID (chainId:address)
		const tokenMap = new Map<string, Token>()

		// Add initial tokens
		for (const token of tokens) {
			const key = `${token.chainId}:${token.address.toLowerCase()}`
			tokenMap.set(key, token)
		}

		// Add underlying tokens (will not overwrite existing ones)
		for (const token of underlyingTokens) {
			const key = `${token.chainId}:${token.address.toLowerCase()}`
			if (!tokenMap.has(key)) {
				tokenMap.set(key, token)
			}
		}

		const allTokens = Array.from(tokenMap.values())

		// Get testnet chain IDs programmatically from Superfluid metadata
		const testnetChainIds = new Set(superfluidMetadata.testnets.map((network) => network.chainId))

		// Group tokens by chainId for better sorting control
		const tokensByChain = new Map<number, Token[]>()
		for (const token of allTokens) {
			const chainTokens = tokensByChain.get(token.chainId) || []
			chainTokens.push(token)
			tokensByChain.set(token.chainId, chainTokens)
		}

		// Sort each chain's tokens: Super Tokens first, then underlying tokens
		// Within each group, sort by order (descending) then by symbol
		const sortedTokens: Token[] = []

		// Get all chain IDs and sort them (mainnet first, then testnet)
		const chainIds = Array.from(tokensByChain.keys()).sort((a, b) => {
			const aIsTestnet = testnetChainIds.has(a)
			const bIsTestnet = testnetChainIds.has(b)

			// If one is testnet and the other isn't, mainnet comes first
			if (aIsTestnet !== bIsTestnet) {
				return aIsTestnet ? 1 : -1
			}

			// Both same type, sort by chainId
			return a - b
		})

		// Process each chain
		for (const chainId of chainIds) {
			const chainTokens = tokensByChain.get(chainId) || []

			// Separate Super Tokens from underlying tokens
			const superTokens = chainTokens.filter(
				(t) =>
					t.tokenType === "pureSuperToken" ||
					t.tokenType === "nativeAssetSuperToken" ||
					t.tokenType === "wrapperSuperToken",
			)
			const underlyingTokens = chainTokens.filter((t) => t.tokenType === "underlyingToken")

			// Sort Super Tokens by order (descending - higher order = more important = comes first), then by symbol
			const sortedSuperTokens = orderBy(superTokens, ["order", "symbol"], ["desc", "asc"])

			// Sort underlying tokens by symbol only (alphabetical)
			const sortedUnderlyingTokens = orderBy(underlyingTokens, ["symbol"], ["asc"])

			// Add to final array: Super Tokens first, then underlying tokens
			sortedTokens.push(...sortedSuperTokens, ...sortedUnderlyingTokens)
		}

		// Find the most recent update timestamp from all tokens
		let latestUpdate = new Date().toISOString()
		if (sortedTokens.length > 0) {
			const timestamps = sortedTokens
				.map((token) => token.updatedAt)
				.filter(Boolean)
				.map((ts) => new Date(ts).getTime())

			if (timestamps.length > 0) {
				const maxTimestamp = Math.max(...timestamps)
				latestUpdate = new Date(maxTimestamp).toISOString()
			}
		}

		// Format as tokenlist with proper types (sortedTokens is already sorted)
		const tokenList: SuperTokenList = {
			name: "Superfluid Token List",
			timestamp: latestUpdate,
			version: {
				major: 5,
				minor: sortedTokens.length,
				patch: new Date(latestUpdate).getTime() - new Date("2025-01-01").getTime(),
			},
			tokens: sortedTokens.map(mapTokenToTokenListFormat),
		}

		return Response.json(tokenList)
	} catch (error) {
		console.error("Failed to export tokenlist:", error)

		return Response.json(
			{
				error: "Failed to export tokenlist",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
