"use client"
import { useState } from "react"
import { TokenCard } from "@/components/TokenCard"
import { TokenFilter } from "@/components/TokenFilters"
import { TokenTable } from "@/components/TokenTable"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useTokens } from "@/hooks/useTokens"
import type { TokenFilters as TokenFiltersType } from "@/types/tokens"

export default function HomePage() {
	const [filters, setFilters] = useState<TokenFiltersType>({})
	const [currentPage, setCurrentPage] = useState(1)
	const [viewMode, setViewMode] = useState<"cards" | "table">("cards")

	const { data, isLoading, error } = useTokens({
		...filters,
		page: currentPage,
		limit: 20,
	})

	const handleFiltersChange = (newFilters: TokenFiltersType) => {
		setFilters(newFilters)
		setCurrentPage(1) // Reset to first page when filters change
	}

	const handleResetFilters = () => {
		setFilters({})
		setCurrentPage(1)
	}

	const totalPages = data?.totalPages || 0
	const tokens = data?.docs || []

	return (
		<div className="container mx-auto py-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold">Superfluid Tokens</h1>
					<p className="text-muted-foreground">Explore {data?.totalDocs || 0} tokens across the Superfluid ecosystem</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant={viewMode === "cards" ? "default" : "outline"} size="sm" onClick={() => setViewMode("cards")}>
						Cards
					</Button>
					<Button variant={viewMode === "table" ? "default" : "outline"} size="sm" onClick={() => setViewMode("table")}>
						Table
					</Button>
					<ThemeToggle />
				</div>
			</div>

			<TokenFilter filters={filters} onFiltersChange={handleFiltersChange} onReset={handleResetFilters} />

			{isLoading && (
				<div className="flex items-center justify-center py-12">
					<div className="text-muted-foreground">Loading tokens...</div>
				</div>
			)}

			{error && (
				<div className="flex items-center justify-center py-12">
					<div className="text-red-600">
						Error loading tokens: {error instanceof Error ? error.message : "Unknown error"}
					</div>
				</div>
			)}

			{data && tokens.length === 0 && (
				<div className="flex items-center justify-center py-12">
					<div className="text-muted-foreground">No tokens found matching your filters.</div>
				</div>
			)}

			{data && tokens.length > 0 && (
				<>
					{viewMode === "cards" ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{tokens.map((token) => (
								<TokenCard key={token.id} token={token} />
							))}
						</div>
					) : (
						<TokenTable tokens={tokens} />
					)}

					{totalPages > 1 && (
						<div className="flex items-center justify-center gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
								disabled={!data?.hasPrevPage}
							>
								Previous
							</Button>
							<span className="text-sm text-muted-foreground">
								Page {currentPage} of {totalPages}
							</span>
							<Button
								variant="outline"
								size="sm"
								onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
								disabled={!data?.hasNextPage}
							>
								Next
							</Button>
						</div>
					)}
				</>
			)}
		</div>
	)
}
