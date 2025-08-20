import { extendedSuperTokenList, type SuperTokenInfo, type TokenInfo } from "@superfluid-finance/tokenlist"
import Fuse from "fuse.js"
import { isAddress } from "viem"
import { z } from "zod"
import type { McpServer } from "@/types"

type TokenResult = {
	token: SuperTokenInfo | TokenInfo
	underlyingToken?: TokenInfo
}

// Type for the result when token is not yet found.
type PartialTokenResult = {
	token?: SuperTokenInfo | TokenInfo
	underlyingToken?: TokenInfo
}

export const createGetSuperfluidTokenTool = (server: McpServer) => {
	server.tool(
		"get-superfluid-token",
		"Get a specific Superfluid token by address and chain ID, including underlying token if applicable. `@superfluid-finance/tokenlist` NPM package is used as the source.",
		{
			tokenAddress: z.string().trim().toLowerCase().refine(isAddress, { message: "Invalid token address" }),
			chainId: z.number().int().positive(),
		},
		async (args: { tokenAddress: string; chainId: number }) => {
			const tokenList = extendedSuperTokenList

			const tokenAddressLower = args.tokenAddress.toLowerCase()
			const result: PartialTokenResult = {}

			for (const token of tokenList.tokens) {
				if (token.chainId === args.chainId && token.address.toLowerCase() === tokenAddressLower) {
					result.token = token

					if (
						"extensions" in token &&
						token.extensions?.superTokenInfo &&
						typeof token.extensions.superTokenInfo === "object" &&
						"type" in token.extensions.superTokenInfo &&
						token.extensions.superTokenInfo.type === "Wrapper" &&
						"underlyingTokenAddress" in token.extensions.superTokenInfo
					) {
						const underlyingAddress = (token.extensions.superTokenInfo.underlyingTokenAddress as string).toLowerCase()
						const underlying = tokenList.tokens.find(
							(t) => t.chainId === args.chainId && t.address.toLowerCase() === underlyingAddress,
						)
						if (underlying) {
							result.underlyingToken = underlying
						}
					}
					break
				}
			}

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2),
					},
				],
			}
		},
	)
}

export const createFindSuperfluidTokensTool = (server: McpServer) => {
	server.tool(
		"find-superfluid-tokens",
		"Find Superfluid tokens by search terms (symbol or fuzzy name match) with optional chain ID filtering. Multiple search terms are combined with OR logic. `@superfluid-finance/tokenlist` NPM package is used as the source.",
		{
			searchTerms: z
				.union([z.string().min(2), z.array(z.string().min(2)).min(1)])
				.transform((val) => (Array.isArray(val) ? val : [val])),
			chainIds: z.array(z.number().int().positive()).optional(),
		},
		async (args: { searchTerms: string[]; chainIds?: number[] }) => {
			const tokenList = extendedSuperTokenList

			let tokensToSearch = tokenList.tokens
			if (args.chainIds && args.chainIds.length > 0) {
				tokensToSearch = tokensToSearch.filter((token) => args.chainIds?.includes(token.chainId))
			}

			// Collect all results from all search terms
			const allMatchedTokens = new Map<string, SuperTokenInfo | TokenInfo>()

			for (const searchTerm of args.searchTerms) {
				const searchTermLower = searchTerm.toLowerCase()
				const exactSymbolMatches: Array<SuperTokenInfo | TokenInfo> = []
				const otherTokens: Array<SuperTokenInfo | TokenInfo> = []

				for (const token of tokensToSearch) {
					if (token.symbol.toLowerCase() === searchTermLower) {
						exactSymbolMatches.push(token)
					} else {
						otherTokens.push(token)
					}
				}

				const fuse = new Fuse(otherTokens, {
					keys: ["name"],
					threshold: 0.3,
					includeScore: true,
				})

				const fuzzyResults = fuse.search(searchTerm)
				const termResults = [...exactSymbolMatches, ...fuzzyResults.map((result) => result.item)]

				// Add to map using unique key (chainId + address) to avoid duplicates
				for (const token of termResults) {
					const key = `${token.chainId}-${token.address.toLowerCase()}`
					allMatchedTokens.set(key, token)
				}
			}

			const allResults = Array.from(allMatchedTokens.values())

			const resultsWithUnderlying = allResults.map((token) => {
				const result: TokenResult = { token }

				if (
					"extensions" in token &&
					token.extensions?.superTokenInfo &&
					typeof token.extensions.superTokenInfo === "object" &&
					"type" in token.extensions.superTokenInfo &&
					token.extensions.superTokenInfo.type === "Wrapper" &&
					"underlyingTokenAddress" in token.extensions.superTokenInfo
				) {
					const underlyingAddress = (token.extensions.superTokenInfo.underlyingTokenAddress as string).toLowerCase()
					const underlying = tokenList.tokens.find(
						(t) => t.chainId === token.chainId && t.address.toLowerCase() === underlyingAddress,
					)
					if (underlying) {
						result.underlyingToken = underlying
					}
				}

				return result
			})

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(resultsWithUnderlying, null, 2),
					},
				],
			}
		},
	)
}
