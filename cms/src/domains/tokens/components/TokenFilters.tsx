import superfluidMetadata from "@superfluid-finance/metadata"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface TokenFilters {
	isListed?: boolean
	tokenType?: string
	tags?: string
	search?: string
	chainId?: number
}

// Get chains from Superfluid metadata and separate into mainnets and testnets
const allChains = superfluidMetadata.networks.map((network) => ({
	id: network.chainId,
	name: network.humanReadableName,
	isTestnet: network.isTestnet,
}))

const mainnets = allChains.filter((chain) => !chain.isTestnet).sort((a, b) => a.name.localeCompare(b.name))

const testnets = allChains.filter((chain) => chain.isTestnet).sort((a, b) => a.name.localeCompare(b.name))

interface TokenFiltersProps {
	filters: TokenFilters
	onFiltersChange: (filters: TokenFilters | ((prev: TokenFilters) => TokenFilters)) => void
	onReset: () => void
}

export function TokenFilter({ filters, onFiltersChange, onReset }: TokenFiltersProps) {
	const [searchValue, setSearchValue] = useState(filters.search || "")

	const handleFilterChange = useCallback(
		(key: keyof TokenFilters, value: string | boolean | number | undefined) => {
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

	// Sync search value with filters
	useEffect(() => {
		setSearchValue(filters.search || "")
	}, [filters.search])

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

			<Select
				value={filters.chainId ? String(filters.chainId) : "all"}
				onValueChange={(value) => handleFilterChange("chainId", value === "all" ? undefined : parseInt(value, 10))}
			>
				<SelectTrigger className="w-40">
					<SelectValue placeholder="Chain" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Chains</SelectItem>
					{mainnets.map((chain) => (
						<SelectItem key={chain.id} value={String(chain.id)}>
							{chain.name}
						</SelectItem>
					))}
					{testnets.map((chain) => (
						<SelectItem key={chain.id} value={String(chain.id)}>
							{chain.name} (Testnet)
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Button variant="outline" onClick={onReset}>
				Reset
			</Button>
		</div>
	)
}
