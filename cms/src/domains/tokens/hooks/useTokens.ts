import { useQuery } from "@tanstack/react-query"
import type { TokenFilters } from "../components/TokenFilters"
import type { PayloadTokensApiResponse } from "../types"

export interface TokenQueryParams extends TokenFilters {
	page?: number
	limit?: number
	sortBy?: string
	sortOrder?: "asc" | "desc"
	includePricing?: boolean
}

async function fetchTokens(params: TokenQueryParams): Promise<PayloadTokensApiResponse> {
	const searchParams = new URLSearchParams()

	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined && value !== null && value !== "") {
			searchParams.append(key, String(value))
		}
	})

	const response = await fetch(`/tokens?${searchParams.toString()}`)

	if (!response.ok) {
		throw new Error(`Failed to fetch tokens: ${response.status} ${response.statusText}`)
	}

	return response.json()
}

export function useTokens(params: TokenQueryParams = {}) {
	return useQuery({
		queryKey: ["tokens", params],
		queryFn: () => fetchTokens(params),
		staleTime: 1000 * 60 * 5, // 5 minutes
	})
}
