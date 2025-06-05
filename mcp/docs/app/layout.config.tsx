import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Superfluid MCP Logo">
					<rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
					<path
						d="M8 12h8m-6-3l3 3-3 3"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				Superfluid MCP
			</>
		),
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	links: [],
};
