import type { TokenList } from "@superfluid-finance/tokenlist"
import { nativeAssetAddresses } from "./nativeAssetAddresses"
import type { SuperTokenData } from "./types"

interface TokenListToken {
	chainId: number
	address: string
	symbol: string
	name: string
	decimals: number
	logoURI?: string
}

interface EnrichmentStats {
	totalEnriched: number
	enrichedTokens: string[]
}

// Create a lookup map from token list
const createTokenLookupMap = (tokenList: TokenList): Map<string, TokenListToken> => {
	const tokenMap = new Map<string, TokenListToken>()

	for (const token of tokenList.tokens) {
		const key = `${token.chainId}-${token.address.toLowerCase()}`
		tokenMap.set(key, token)
	}

	return tokenMap
}

// Create token key for lookups
const createTokenKey = (chainId: number, address: string): string => `${chainId}-${address.toLowerCase()}`

// Main enrichment function with optional stats collection
export const enrichTokensWithStats =
	(tokenList: TokenList) =>
	(tokens: SuperTokenData[]): { enrichedTokens: SuperTokenData[]; stats: EnrichmentStats } => {
		const tokenMap = createTokenLookupMap(tokenList)
		const enrichedTokensList: string[] = []

		const enriched = tokens.map((token) => {
			const key = createTokenKey(token.chainId, token.address)
			const listToken = tokenMap.get(key)

			// Determine the underlying address:
			// 1. For native asset super tokens, use the native asset address
			// 2. Otherwise, keep the underlying address from subgraph (which could be null)
			let underlyingAddress = token.underlyingAddress
			if (token.isNativeAssetSuperToken && nativeAssetAddresses[token.chainId]) {
				underlyingAddress = nativeAssetAddresses[token.chainId]!
			}

			if (!listToken) {
				return {
					...token,
					underlyingAddress,
				}
			}

			enrichedTokensList.push(token.address)
			return {
				...token,
				// Prefer token list data over subgraph data
				name: listToken.name || token.name,
				symbol: listToken.symbol || token.symbol,
				// Keep the underlying address as determined above
				underlyingAddress,
			}
		})

		return {
			enrichedTokens: enriched,
			stats: {
				totalEnriched: enrichedTokensList.length,
				enrichedTokens: enrichedTokensList,
			},
		}
	}

// Simplified wrapper that returns only enriched tokens
export const enrichTokens =
	(tokenList: TokenList) =>
	(tokens: SuperTokenData[]): SuperTokenData[] => {
		const { enrichedTokens } = enrichTokensWithStats(tokenList)(tokens)
		return enrichedTokens
	}

// Fetch token list from URL
export const fetchTokenList = async (url: string): Promise<TokenList> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`Failed to fetch token list: ${response.statusText}`)
	}
	return response.json()
}
