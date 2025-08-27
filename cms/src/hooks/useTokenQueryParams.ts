"use client"

import { parseAsBoolean, parseAsInteger, parseAsString, parseAsStringEnum, useQueryStates } from "nuqs"
import type { TokenFilters } from "@/types/tokens"

export const tokenQueryParsers = {
	page: parseAsInteger.withDefault(1),
	search: parseAsString,
	tokenType: parseAsString,
	tags: parseAsString,
	isListed: parseAsBoolean,
	chainId: parseAsInteger,
	sortBy: parseAsString,
	sortOrder: parseAsString,
	viewMode: parseAsStringEnum<"cards" | "table">(["cards", "table"]).withDefault("cards"),
}

export function useTokenQueryParams() {
	const [queryParams, setQueryParams] = useQueryStates(tokenQueryParsers, {
		shallow: false,
		history: "push",
	})

	const filters: TokenFilters = {
		search: queryParams.search || undefined,
		tokenType: queryParams.tokenType || undefined,
		tags: queryParams.tags || undefined,
		isListed: queryParams.isListed ?? undefined,
		chainId: queryParams.chainId || undefined,
	}

	const setFilters = (newFilters: TokenFilters | ((prev: TokenFilters) => TokenFilters)) => {
		const resolvedFilters = typeof newFilters === "function" ? newFilters(filters) : newFilters
		setQueryParams({
			search: resolvedFilters.search || null,
			tokenType: resolvedFilters.tokenType || null,
			tags: resolvedFilters.tags || null,
			isListed: resolvedFilters.isListed ?? null,
			chainId: resolvedFilters.chainId || null,
			page: 1, // Reset to first page when filters change
		})
	}

	const setPage = (page: number) => {
		setQueryParams({ page })
	}

	const setViewMode = (viewMode: "cards" | "table") => {
		setQueryParams({ viewMode })
	}

	const resetFilters = () => {
		setQueryParams({
			search: null,
			tokenType: null,
			tags: null,
			isListed: null,
			chainId: null,
			page: 1,
		})
	}

	return {
		page: queryParams.page,
		filters,
		viewMode: queryParams.viewMode,
		sortBy: queryParams.sortBy,
		sortOrder: queryParams.sortOrder as "asc" | "desc" | undefined,
		setFilters,
		setPage,
		setViewMode,
		resetFilters,
		setQueryParams,
	}
}
