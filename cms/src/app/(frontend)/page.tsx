import { Suspense } from "react"
import { TokenListContent } from "./TokenListContent"

function TokenListFallback() {
	return (
		<div className="container mx-auto py-6">
			<div className="flex items-center justify-center py-12">
				<div className="text-muted-foreground">Loading tokens...</div>
			</div>
		</div>
	)
}

export default function HomePage() {
	return (
		<Suspense fallback={<TokenListFallback />}>
			<TokenListContent />
		</Suspense>
	)
}
