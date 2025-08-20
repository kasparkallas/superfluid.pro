import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { TokenFilters as TokenFiltersType } from "@/types/tokens"

interface TokenFiltersProps {
	filters: TokenFiltersType
	onFiltersChange: (filters: TokenFiltersType) => void
	onReset: () => void
}

export function TokenFilter({ filters, onFiltersChange, onReset }: TokenFiltersProps) {
	const [searchValue, setSearchValue] = useState(filters.search || "")

	const handleFilterChange = useCallback(
		(key: keyof TokenFiltersType, value: string | boolean | undefined) => {
			onFiltersChange((prevFilters) => ({
				...prevFilters,
				[key]: value === "" ? undefined : value,
			}))
		},
		[onFiltersChange],
	)

	// Debounced search handler
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (searchValue !== (filters.search || "")) {
				handleFilterChange("search", searchValue || undefined)
			}
		}, 300) // 300ms debounce delay

		return () => clearTimeout(timeoutId)
	}, [searchValue, filters.search, handleFilterChange])

	// Reset search value when filters are reset
	useEffect(() => {
		if (!filters.search && searchValue) {
			setSearchValue("")
		}
	}, [filters.search, searchValue])

	return (
		<div className="flex flex-wrap gap-4 p-4 bg-muted/50 rounded-lg">
			<div className="flex-1 min-w-48">
				<Input placeholder="Search tokens..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
			</div>

			<Select
				value={filters.tokenType || "all"}
				onValueChange={(value) => handleFilterChange("tokenType", value === "all" ? undefined : value)}
			>
				<SelectTrigger className="w-48">
					<SelectValue placeholder="Token Type" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Types</SelectItem>
					<SelectItem value="underlyingToken">Underlying Token</SelectItem>
					<SelectItem value="pureSuperToken">Pure Super Token</SelectItem>
					<SelectItem value="nativeAssetSuperToken">Native Asset Super Token</SelectItem>
					<SelectItem value="wrapperSuperToken">Wrapper Super Token</SelectItem>
				</SelectContent>
			</Select>

			<Select
				value={filters.tags || "all"}
				onValueChange={(value) => handleFilterChange("tags", value === "all" ? undefined : value)}
			>
				<SelectTrigger className="w-32">
					<SelectValue placeholder="Tags" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Tags</SelectItem>
					<SelectItem value="streme">Streme</SelectItem>
					<SelectItem value="testnet">Testnet</SelectItem>
					<SelectItem value="underlying">Underlying</SelectItem>
					<SelectItem value="supertoken">Supertoken</SelectItem>
				</SelectContent>
			</Select>

			<Select
				value={filters.isListed === undefined ? "all" : String(filters.isListed)}
				onValueChange={(value) => handleFilterChange("isListed", value === "all" ? undefined : value === "true")}
			>
				<SelectTrigger className="w-32">
					<SelectValue placeholder="Listed" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All</SelectItem>
					<SelectItem value="true">Listed</SelectItem>
					<SelectItem value="false">Not Listed</SelectItem>
				</SelectContent>
			</Select>

			<Button variant="outline" onClick={onReset}>
				Reset
			</Button>
		</div>
	)
}
