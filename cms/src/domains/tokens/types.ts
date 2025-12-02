// Shared token types for the tokens domain

export interface TokenResponse {
	id: string
	chainId: number
	address: string
	name: string
	symbol: string
	decimals: number
	logoUri?: string | null
	isListed?: boolean | null
	coingeckoId?: string | null
	tags?: ("streme" | "testnet" | "underlying" | "supertoken")[] | null
	tokenType: "underlyingToken" | "pureSuperToken" | "nativeAssetSuperToken" | "wrapperSuperToken"
	underlyingAddress?: string | null
	note?: string | null
	order?: number | null
}

export interface PayloadTokensApiResponse {
	docs: TokenResponse[]
	totalDocs: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: number | null
	nextPage: number | null
}
