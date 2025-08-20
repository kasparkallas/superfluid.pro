import Fuse from "fuse.js"
import { z } from "zod"
import type { McpServer } from "@/types"

type ResourceCategory = "documentation" | "sdk" | "app" | "community" | "code"

type Resource = {
	name: string
	url: string
	category: ResourceCategory
	description: string
	keywords: string[]
	useCases: string[]
}

const SUPERFLUID_RESOURCES: Resource[] = [
	// Documentation
	{
		name: "Superfluid Docs",
		url: "https://docs.superfluid.org",
		category: "documentation",
		description: "Official Superfluid protocol documentation with guides, tutorials, and technical references",
		keywords: ["docs", "documentation", "guide", "tutorial", "learn", "protocol"],
		useCases: [
			"Learn about Superfluid concepts",
			"Understand protocol mechanics",
			"Get started with smart contract development",
		],
	},

	// SDKs and Libraries
	{
		name: "Superfluid SDK",
		url: "https://superfluid-sdk-docs.vercel.app/docs",
		category: "sdk",
		description:
			"Modern TypeScript developer toolkit for Superfluid Protocol. Built on wagmi/viem with zero runtime dependencies, full type safety, and tree-shakeable exports",
		keywords: ["sdk", "typescript", "wagmi", "viem", "modern", "type-safe", "react-hooks", "esm"],
		useCases: [
			"Build modern TypeScript applications with wagmi/viem",
			"Create token streams with full type safety",
			"Import only needed components (ABIs, actions, hooks)",
			"Develop React apps with Superfluid hooks",
		],
	},
	{
		name: "Superfluid SDK Core (Legacy)",
		url: "https://www.npmjs.com/package/@superfluid-finance/sdk-core",
		category: "sdk",
		description: "Legacy JavaScript/TypeScript SDK for interacting with Superfluid protocol. Built for ethers v5.",
		keywords: ["sdk", "javascript", "typescript", "library", "npm", "legacy", "ethers-v5"],
		useCases: [
			"Build JavaScript/TypeScript applications with ethers v5",
			"Maintain legacy applications",
			"Interact with Superfluid contracts",
		],
	},
	{
		name: "Superfluid SDK Redux (Legacy)",
		url: "https://www.npmjs.com/package/@superfluid-finance/sdk-redux",
		category: "sdk",
		description:
			"Legacy Redux SDK built on top of SDK-core and RTK Query for state management in Superfluid applications",
		keywords: ["sdk", "redux", "rtk-query", "state-management", "typescript", "npm", "legacy"],
		useCases: [
			"Build React Redux applications",
			"Manage Superfluid state with Redux",
			"Maintain legacy Redux applications",
		],
	},

	// Tools and Applications
	{
		name: "Superfluid Dashboard",
		url: "https://app.superfluid.org",
		category: "app",
		description: "Official Superfluid dashboard for managing streams and viewing analytics",
		keywords: ["dashboard", "app", "super tokens", "streams", "manage", "ui", "vesting", "auto-wrap"],
		useCases: [
			"Create and manage money streams",
			"View stream analytics",
			"Manage Super Tokens",
			"Monitor protocol activity",
		],
	},

	{
		name: "Superfluid Explorer",
		url: "https://explorer.superfluid.org",
		category: "app",
		description:
			"Developer explorer for testing and debugging Superfluid operations. Previously called Superfluid Console.",
		keywords: ["explorer", "debug", "test", "developer", "tool"],
		useCases: ["View Superfluid Protocol activity from bird's eye view"],
	},

	// Code and Examples
	{
		name: "Superfluid Smart Contracts",
		url: "https://github.com/superfluid-finance/protocol-monorepo",
		category: "code",
		description:
			"Core code repository containing Superfluid protocol smart contracts, subgraph, automation contracts, and related infrastructure",
		keywords: ["contracts", "solidity", "github", "source", "protocol"],
		useCases: [
			"Review contract source code",
			"Understand protocol implementation",
			"Contribute to protocol development",
			"Audit contract logic",
		],
	},

	// Community and Support
	{
		name: "Superfluid Discord",
		url: "https://discord.superfluid.finance",
		category: "community",
		description: "Official Discord server for community support and discussions",
		keywords: ["discord", "community", "chat", "support", "help"],
		useCases: [
			"Get help from community",
			"Discuss integration ideas",
			"Stay updated on developments",
			"Connect with other builders",
		],
	},

	{
		name: "Superfluid Twitter",
		url: "https://twitter.com/superfluid_HQ",
		category: "community",
		description: "Official Twitter account for news and updates",
		keywords: ["twitter", "social", "news", "updates", "announcements"],
		useCases: ["Follow protocol updates", "Learn about new features", "Discover ecosystem projects"],
	},

	{
		name: "Superfluid Forum",
		url: "https://forum.superfluid.org",
		category: "community",
		description: "Community forum for SUP token governance discussions and protocol improvement proposals",
		keywords: ["forum", "governance", "discussion", "proposal", "community"],
		useCases: [
			"Participate in governance",
			"Discuss protocol improvements",
			"Submit proposals",
			"Engage with community",
		],
	},
	{
		name: "SUP Token Claim",
		url: "https://claim.superfluid.org",
		category: "app",
		description: "Official portal for claiming SUP governance tokens",
		keywords: ["sup", "token", "claim", "governance", "airdrop"],
		useCases: ["Claim SUP governance tokens", "Check eligibility for SUP tokens", "Participate in protocol governance"],
	},

	// Superfluid Labs Projects
	{
		name: "SuperBoring",
		url: "https://app.superboring.xyz",
		category: "app",
		description:
			"The most powerful onchain DCA (Dollar Cost Averaging) platform. Swap tokens every second using Superfluid streams for gas-efficient, automated trading",
		keywords: [
			"superboring",
			"dca",
			"dollar-cost-averaging",
			"token-cost-averaging",
			"streaming-dex",
			"swap",
			"trading",
			"automated",
		],
		useCases: [
			"Automate dollar cost averaging strategies",
			"Stream swaps between any two tokens",
			"Earn BORING tokens through referrals",
			"Trade without paying gas for each transaction",
		],
	},
	{
		name: "AlfaFrens",
		url: "https://www.alfafrens.com",
		category: "app",
		description:
			"SocialFi app on Farcaster for gated alpha chat subscriptions. Content creators receive streaming payments in real-time from their subscribers using Superfluid",
		keywords: ["alfafrens", "socialfi", "farcaster", "subscriptions", "creator-economy", "degen", "social"],
		useCases: [
			"Create private alpha channels for subscribers",
			"Monetize content with streaming subscriptions",
			"Receive payments every second as a creator",
			"Subscribe to exclusive content from influencers",
		],
	},

	// Ecosystem Projects
	{
		name: "Giveth",
		url: "https://giveth.io",
		category: "app",
		description:
			"Zero-fee crypto donation platform with Superfluid-powered recurring donations. Donors can stream continuous support to charitable projects on Optimism",
		keywords: [
			"giveth",
			"donations",
			"charity",
			"recurring",
			"philanthropy",
			"giving",
			"impact",
			"continuous",
			"charitable",
		],
		useCases: [
			"Set up recurring donations to projects",
			"Stream continuous funding to causes",
			"Manage multiple donation streams",
			"Support projects with sustainable funding",
		],
	},
	{
		name: "Streme.fun",
		url: "https://www.streme.fun",
		category: "app",
		description:
			"AI agent token launcher that deploys streamable tokens with built-in staking rewards. Tokens have native Superfluid streaming powers without wrapping",
		keywords: ["streme", "token-launcher", "ai-agent", "staking", "pure-super-tokens", "defi"],
		useCases: [
			"Launch tokens with streaming capabilities",
			"Stake tokens for streaming rewards",
			"Deploy tokens via AI agent conversation",
			"Earn rewards based on volume and market cap",
		],
	},
	{
		name: "FlowState",
		url: "https://flowstate.network/explore",
		category: "app",
		description:
			"Streaming funding platform and digital cooperative for impact work. Features streaming quadratic funding (SQF) and voting mechanisms powered by Superfluid",
		keywords: [
			"flowstate",
			"quadratic-funding",
			"sqf",
			"public-goods",
			"impact",
			"funding",
			"cooperative",
			"charity",
			"donation",
			"grants",
			"continuous-funding",
		],
		useCases: [
			"Participate in streaming quadratic funding rounds",
			"Fund public goods with continuous streams",
			"Support impact projects with ongoing funding",
			"Engage in streaming quadratic voting",
		],
	},
	{
		name: "GoodDollar",
		url: "https://www.gooddollar.org",
		category: "app",
		description:
			"Universal Basic Income (UBI) protocol using Superfluid for streaming G$ tokens daily to members worldwide. Active in 222+ countries with focus on financial inclusion",
		keywords: [
			"gooddollar",
			"ubi",
			"universal-basic-income",
			"g$",
			"financial-inclusion",
			"global",
			"social-impact",
			"charity",
			"social",
			"daily-payments",
			"basic-income",
		],
		useCases: [
			"Claim daily UBI payments in G$ tokens",
			"Stream basic income to global recipients",
			"Support UBI initiatives through staking",
			"Build dApps integrated with GoodDollar",
		],
	},

	// Additional Resources
	{
		name: "Superfluid Website",
		url: "https://www.superfluid.org",
		category: "documentation",
		description: "Official Superfluid Foundation website with overview and resources",
		keywords: ["website", "home", "overview", "main", "official"],
		useCases: ["Learn about Superfluid", "Find all resources", "Explore use cases", "Get started"],
	},
	{
		name: "Superfluid Token List",
		url: "https://www.npmjs.com/package/@superfluid-finance/tokenlist",
		category: "sdk",
		description:
			"Curated list of Super Tokens across all networks (NPM: @superfluid-finance/tokenlist, GitHub: superfluid-finance/tokenlist)",
		keywords: ["tokens", "tokenlist", "addresses", "registry", "npm", "github"],
		useCases: ["Find Super Token addresses", "Integrate token metadata", "Build token selectors"],
	},
	{
		name: "Superfluid Metadata Package",
		url: "https://www.npmjs.com/package/@superfluid-finance/metadata",
		category: "sdk",
		description:
			"NPM package with Superfluid contract addresses and network metadata (NPM: @superfluid-finance/metadata, GitHub: superfluid-finance/metadata)",
		keywords: ["metadata", "addresses", "networks", "npm", "package", "github"],
		useCases: [
			"Get contract addresses",
			"Find network configurations",
			"Access RPC endpoints",
			"Configure applications",
		],
	},
]

// Generate description with resource names programmatically
const getToolDescription = () => {
	const resourcesByCategory = SUPERFLUID_RESOURCES.reduce(
		(acc, resource) => {
			if (!acc[resource.category]) acc[resource.category] = []
			acc[resource.category].push(resource.name)
			return acc
		},
		{} as Record<ResourceCategory, string[]>,
	)

	const categoryDescriptions = {
		documentation: "Documentation",
		sdk: "SDKs",
		app: "Apps",
		community: "Community",
		code: "Code/Libraries",
	}

	const descriptions = Object.entries(resourcesByCategory)
		.map(([category, names]) => `${categoryDescriptions[category as ResourceCategory]}: ${names.join(", ")}`)
		.join("; ")

	return `Find Superfluid ecosystem resources. Available resources - ${descriptions}. Filter by category or search by keywords.`
}

export const createGetSuperfluidResourcesTool = (server: McpServer) => {
	server.tool(
		"find-ecosystem-resources",
		getToolDescription(),
		{
			category: z
				.enum(["documentation", "sdk", "app", "community", "code"])
				.optional()
				.describe("Filter resources by category"),
			searchTerm: z.string().optional().describe("Search for resources by name, keywords, or use cases"),
		},
		async (args: { category?: ResourceCategory; searchTerm?: string }) => {
			let resources = [...SUPERFLUID_RESOURCES]

			// Filter by category if provided
			if (args.category) {
				resources = resources.filter((r) => r.category === args.category)
			}

			// Search if term provided
			if (args.searchTerm) {
				const searchLower = args.searchTerm.toLowerCase()

				// First try exact keyword match with full search term
				const exactKeywordMatches = resources.filter((r) => r.keywords.some((k) => k.toLowerCase() === searchLower))

				if (exactKeywordMatches.length > 0) {
					resources = exactKeywordMatches
				} else {
					// Try fuzzy search with full term
					const fuse = new Fuse(resources, {
						keys: [
							{ name: "name", weight: 2 },
							{ name: "description", weight: 1 },
							{ name: "keywords", weight: 1.5 },
							{ name: "useCases", weight: 0.5 },
						],
						threshold: 0.4,
						includeScore: true,
					})

					const results = fuse.search(args.searchTerm)

					if (results.length > 0) {
						resources = results.map((r) => r.item)
					} else {
						// No results with full term, try splitting words
						const searchWords = searchLower.split(/\s+/).filter((word) => word.length > 0)

						// Find resources where any keyword contains any search word
						const keywordMatches = resources.filter((r) =>
							searchWords.some((word) => r.keywords.some((k) => k.toLowerCase().includes(word))),
						)

						if (keywordMatches.length > 0) {
							// Use fuzzy search on keyword matches to rank them
							const fuseSplit = new Fuse(keywordMatches, {
								keys: [
									{ name: "name", weight: 2 },
									{ name: "description", weight: 1 },
									{ name: "keywords", weight: 1.5 },
									{ name: "useCases", weight: 0.5 },
								],
								threshold: 0.5,
								includeScore: true,
							})

							const splitResults = fuseSplit.search(args.searchTerm)
							resources = splitResults.map((r) => r.item)
						}
					}
				}
			}

			// Group by category for better organization
			const grouped = resources.reduce(
				(acc, resource) => {
					if (!acc[resource.category]) {
						acc[resource.category] = []
					}
					acc[resource.category].push(resource)
					return acc
				},
				{} as Record<ResourceCategory, Resource[]>,
			)

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(
							{
								totalResources: resources.length,
								categories: Object.keys(grouped),
								resources: grouped,
							},
							null,
							2,
						),
					},
				],
			}
		},
	)
}
