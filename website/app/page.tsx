export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
			{/* Hero Pattern Background - Polka Dots */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230A6643' fill-opacity='0.06' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>

			{/* Gradient overlay for pattern visibility control */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/70 to-background" />

			<main className="max-w-5xl w-full mx-auto relative z-10">
				<div className="text-center mb-24">
					<h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#BDFFA3] via-[#86EE1E] to-[#0A6643] bg-clip-text text-transparent font-[family-name:var(--font-gt-walsheim)] animate-gradient">
						Superfluid Pro
					</h1>
					<p className="text-xl md:text-2xl text-foreground/60 font-light">
						Next generation tooling for Superfluid Protocol
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<a
						href={process.env.NEXT_PUBLIC_SDK_DOCS_URL}
						className="sdk-card group relative p-10 rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent backdrop-blur-sm hover:border-foreground/20 transition-all duration-500 flex flex-col h-full"
					>
						<div className="flex-1">
							<h2 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-gt-walsheim)]">SDK</h2>
							<p className="text-foreground/60 leading-relaxed">
								Build Superfluid apps with wagmi, viem, and TypeScript.
							</p>
						</div>
						<div className="mt-8 text-foreground/60 group-hover:text-foreground transition-colors font-medium flex items-center gap-2">
							Learn more
							<svg
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</a>

					<a
						href={process.env.NEXT_PUBLIC_MCP_DOCS_URL}
						className="mcp-card group relative p-10 rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent backdrop-blur-sm hover:border-foreground/20 transition-all duration-500 flex flex-col h-full"
					>
						<div className="flex-1">
							<h2 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-gt-walsheim)]">MCP</h2>
							<p className="text-foreground/60 leading-relaxed">
								Superfluid integration for Claude, Cursor, and other MCP-compatible AI assistants.
							</p>
						</div>
						<div className="mt-8 text-foreground/60 group-hover:text-foreground transition-colors font-medium flex items-center gap-2">
							Learn more
							<svg
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</a>
				</div>
			</main>
		</div>
	);
}
