import superfluidMetadata from "@superfluid-finance/metadata"
import type { SuperTokenInfo, TokenInfo } from "@superfluid-finance/tokenlist"
import type { TokenList } from "@uniswap/token-lists"
import { orderBy } from "lodash-es"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"

type UnderlyingTokenInfo = TokenInfo

// Custom SuperTokenList that allows both SuperTokenInfo and UnderlyingTokenInfo
// and includes tags metadata
export type SuperTokenList = Omit<TokenList, "tokens"> & {
	readonly tokens: (SuperTokenInfo | UnderlyingTokenInfo)[]
	readonly tags?: {
		readonly supertoken?: {
			readonly name: string
			readonly description: string
		}
		readonly underlying?: {
			readonly name: string
			readonly description: string
		}
		readonly testnet?: {
			readonly name: string
			readonly description: string
		}
		readonly streme?: {
			readonly name: string
			readonly description: string
		}
	}
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
					...(token.order != null && { orderingScore: token.order }),
					superTokenInfo: {
						type: "Pure",
					},
				},
			} as SuperTokenInfo

		case "nativeAssetSuperToken":
			return {
				...baseToken,
				extensions: {
					...(token.order != null && { orderingScore: token.order }),
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
						...(token.order != null && { orderingScore: token.order }),
						superTokenInfo: {
							type: "Pure",
						},
					},
				} as SuperTokenInfo
			}
			return {
				...baseToken,
				extensions: {
					...(token.order != null && { orderingScore: token.order }),
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

			// Sort all tokens by symbol - this naturally groups super tokens with their underlying tokens
			// (e.g., ARB near ARBx, USDC near USDCx)
			const sortedChainTokens = orderBy(chainTokens, ["symbol"], ["asc"])

			// Add to final array
			sortedTokens.push(...sortedChainTokens)
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
			tags: {
				supertoken: {
					name: "SuperToken",
					description: "This is a supertoken, learn more from the extensions.",
				},
				underlying: {
					name: "Underlying Token",
					description: "This is an underlying token, of a supertoken.",
				},
				testnet: {
					name: "Testnet",
					description: "This is a testnet token.",
				},
				streme: {
					name: "Streme",
					description: "This is a token from streme.fun",
				},
			},
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
