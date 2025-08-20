export interface TokenPrice {
	usd?: number
	usd_24h_change?: number
}

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
	pricing?: TokenPrice
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

export interface TokenFilters {
	isListed?: boolean
	tokenType?: string
	tags?: string
	search?: string
	chainId?: number
}

export interface TokenQueryParams extends TokenFilters {
	page?: number
	limit?: number
	sortBy?: string
	sortOrder?: "asc" | "desc"
	includePricing?: boolean
}
