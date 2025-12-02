"use client"
import { ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { TokenCard, TokenFilter, TokenTable } from "@/domains/tokens/components"
import { useTokenQueryParams, useTokens } from "@/domains/tokens/hooks"

export function TokenListContent() {
	const { page, filters, viewMode, setFilters, setPage, setViewMode, resetFilters } = useTokenQueryParams()

	const { data, isLoading, error } = useTokens({
		...filters,
		page,
		limit: 40,
	})

	const totalPages = data?.totalPages || 0
	const tokens = data?.docs || []

	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
				<div className="flex items-start justify-between">
					<div>
						<h1 className="text-3xl font-bold">Super Tokens</h1>
						<p className="text-muted-foreground">
							Explore {data?.totalDocs || 0} tokens across the Superfluid ecosystem
						</p>
					</div>
					<div className="flex flex-col gap-2 items-end">
						<div className="flex items-center gap-2">
							<Button
								variant={viewMode === "cards" ? "default" : "outline"}
								size="sm"
								onClick={() => setViewMode("cards")}
							>
								Cards
							</Button>
							<Button
								variant={viewMode === "table" ? "default" : "outline"}
								size="sm"
								onClick={() => setViewMode("table")}
							>
								Table
							</Button>
							<ThemeToggle />
						</div>
						<Button variant="outline" size="sm" asChild>
							<a href="/api-docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
								API
								<ExternalLink className="h-3 w-3" />
							</a>
						</Button>
					</div>
				</div>

				<TokenFilter filters={filters} onFiltersChange={setFilters} onReset={resetFilters} />

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
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
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
									onClick={() => setPage(Math.max(1, page - 1))}
									disabled={!data?.hasPrevPage}
								>
									Previous
								</Button>
								<span className="text-sm text-muted-foreground">
									Page {page} of {totalPages}
								</span>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setPage(Math.min(totalPages, page + 1))}
									disabled={!data?.hasNextPage}
								>
									Next
								</Button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}
