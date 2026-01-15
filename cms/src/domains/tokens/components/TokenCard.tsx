"use client"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { copyToClipboard, formatAddress } from "@/utils/formatAddress"
import type { TokenResponse } from "../types"

interface TokenCardProps {
	token: TokenResponse
}

export function TokenCard({ token }: TokenCardProps) {
	const [copied, setCopied] = useState(false)

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

	const getTypeColor = (type: string) => {
		switch (type) {
			case "pureSuperToken":
				return "text-blue-600"
			case "nativeAssetSuperToken":
				return "text-green-600"
			case "wrapperSuperToken":
				return "text-purple-600"
			case "underlyingToken":
				return "text-orange-600"
			default:
				return "text-muted-foreground"
		}
	}

	const getTypeLabel = (type: string) => {
		switch (type) {
			case "pureSuperToken":
				return "Pure"
			case "nativeAssetSuperToken":
				return "Native"
			case "wrapperSuperToken":
				return "Wrapper"
			case "underlyingToken":
				return "Underlying"
			default:
				return type
		}
	}

	const handleCopyAddress = async () => {
		const success = await copyToClipboard(token.address)
		if (success) {
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		}
	}

	return (
		<Card className="h-full transition-all hover:shadow-md">
			<CardContent className="p-4 h-full flex flex-col">
				{/* Main content section */}
				<div className="flex-1">
					{/* Header Section: Icon + Symbol */}
					<div className="flex items-center gap-3 mb-3">
						{token.logoUri && (
							<img
								src={token.logoUri}
								alt={`${token.symbol} logo`}
								width={28}
								height={28}
								className="rounded-full flex-shrink-0"
							/>
						)}
						<h3 className="font-bold text-lg truncate leading-none">{token.symbol}</h3>
					</div>

					{/* Token Name and Address - Close together */}
					<div className="mb-3">
						<div className="flex flex-col">
							<span className="text-sm text-muted-foreground truncate">{token.name}</span>
							<HoverCard>
								<HoverCardTrigger asChild>
									<button
										type="button"
										className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors text-left"
									>
										{formatAddress(token.address, 6, 4)}
									</button>
								</HoverCardTrigger>
								<HoverCardContent className="w-auto max-w-sm p-3">
									<div className="flex items-center gap-2">
										<code className="flex-1 text-xs bg-muted px-2 py-1 rounded font-mono break-all">
											{token.address}
										</code>
										<Button size="sm" variant="outline" onClick={handleCopyAddress} className="h-7 w-7 p-0">
											{copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
										</Button>
									</div>
								</HoverCardContent>
							</HoverCard>
						</div>
					</div>

					{/* Chain and Type */}
					<div className="flex items-center justify-between text-xs">
						<span className="text-muted-foreground">{getChainName(token.chainId)}</span>
						<span className={`font-medium ${getTypeColor(token.tokenType)}`}>{getTypeLabel(token.tokenType)}</span>
					</div>
				</div>

				{/* Tags - Always at bottom */}
				{token.tags && token.tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-auto pt-3">
						{token.tags.slice(0, 3).map((tag) => (
							<span key={tag} className="px-1.5 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
								{tag}
							</span>
						))}
						{token.tags.length > 3 && <span className="text-xs text-muted-foreground">+{token.tags.length - 3}</span>}
					</div>
				)}
			</CardContent>
		</Card>
	)
}
