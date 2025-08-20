import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { TokenResponse } from "@/types/tokens"

interface TokenCardProps {
	token: TokenResponse
}

export function TokenCard({ token }: TokenCardProps) {
	const getTokenTypeDisplay = (type: string) => {
		switch (type) {
			case "pureSuperToken":
				return "Pure Super Token"
			case "nativeAssetSuperToken":
				return "Native Asset Super Token"
			case "wrapperSuperToken":
				return "Wrapper Super Token"
			case "underlyingToken":
				return "Underlying Token"
			default:
				return type
		}
	}

	const getChainName = (chainId: number) => {
		const chainNames: Record<number, string> = {
			1: "Ethereum",
			10: "Optimism",
			137: "Polygon",
			42161: "Arbitrum",
			8453: "Base",
			100: "Gnosis",
			534352: "Scroll",
			43114: "Avalanche",
			42220: "Celo",
			56: "BSC",
			11155111: "Sepolia",
			80002: "Polygon Amoy",
		}
		return chainNames[chainId] || `Chain ${chainId}`
	}

	return (
		<Card className="h-full">
			<CardHeader className="pb-3">
				<div className="flex items-center gap-3">
					{token.logoUri && (
						<img src={token.logoUri} alt={`${token.symbol} logo`} width={32} height={32} className="rounded-full" />
					)}
					<div className="flex-1 min-w-0">
						<h3 className="font-semibold text-sm truncate">{token.name}</h3>
						<p className="text-xs text-muted-foreground">{token.symbol}</p>
					</div>
				</div>
			</CardHeader>
			<CardContent className="pt-0">
				<div className="space-y-2 text-xs">
					<div className="flex justify-between">
						<span className="text-muted-foreground">Chain:</span>
						<span>{getChainName(token.chainId)}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">Type:</span>
						<span className="text-right">{getTokenTypeDisplay(token.tokenType)}</span>
					</div>
					{token.isListed && (
						<div className="flex justify-between">
							<span className="text-muted-foreground">Status:</span>
							<span className="text-green-600">Listed</span>
						</div>
					)}
					{token.tags && token.tags.length > 0 && (
						<div className="flex flex-wrap gap-1 mt-2">
							{token.tags.map((tag) => (
								<span key={tag} className="px-1.5 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
									{tag}
								</span>
							))}
						</div>
					)}
					{token.pricing && (
						<div className="pt-2 border-t">
							<div className="flex justify-between">
								<span className="text-muted-foreground">Price:</span>
								<span>${token.pricing.usd?.toFixed(4) || "N/A"}</span>
							</div>
							{token.pricing.usd_24h_change !== undefined && (
								<div className="flex justify-between">
									<span className="text-muted-foreground">24h:</span>
									<span className={token.pricing.usd_24h_change >= 0 ? "text-green-600" : "text-red-600"}>
										{token.pricing.usd_24h_change > 0 ? "+" : ""}
										{token.pricing.usd_24h_change.toFixed(2)}%
									</span>
								</div>
							)}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
