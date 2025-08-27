import { OpenAPIRegistry, OpenApiGeneratorV31 } from "@asteasolutions/zod-to-openapi"
import {
	ApiErrorSchema,
	CurrentPriceResponseSchema,
	PriceHistoryQuerySchema,
	PricingQuerySchema,
	TokenFilterQuerySchema,
	TokenListFilterQuerySchema,
	TokenListResponseSchema,
	TokenListSchema,
	TokenPathParamsSchema,
	TokenPriceHistoryResponseSchema,
	TokenPriceSchema,
	TokenSchema,
} from "./schemas"

export const registry = new OpenAPIRegistry()

// Register reusable components
registry.register("Token", TokenSchema)
registry.register("TokenListResponse", TokenListResponseSchema)
registry.register("TokenList", TokenListSchema)
registry.register("TokenPrice", TokenPriceSchema)
registry.register("TokenPriceHistoryResponse", TokenPriceHistoryResponseSchema)
registry.register("CurrentPriceResponse", CurrentPriceResponseSchema)
registry.register("ApiError", ApiErrorSchema)

// Register API paths

// GET /tokens - List all tokens with filtering
registry.registerPath({
	method: "get",
	path: "/tokens",
	summary: "Get tokens with filtering",
	description: "Retrieves tokens from the CMS database with optional filtering, sorting, and pricing data",
	tags: ["Tokens"],
	request: {
		query: TokenFilterQuerySchema,
	},
	responses: {
		200: {
			description: "Paginated list of tokens",
			content: {
				"application/json": {
					schema: TokenListResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid query parameters",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// GET /tokens/{chainId}/{address} - Get single token
registry.registerPath({
	method: "get",
	path: "/tokens/{chainId}/{address}",
	summary: "Get a specific token",
	description: "Retrieves detailed information for a single token by chain ID and address",
	tags: ["Tokens"],
	request: {
		params: TokenPathParamsSchema,
		query: PricingQuerySchema,
	},
	responses: {
		200: {
			description: "Token details with optional pricing",
			content: {
				"application/json": {
					schema: TokenSchema,
				},
			},
		},
		400: {
			description: "Invalid parameters",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Token not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// GET /tokenlist - Export as token list
registry.registerPath({
	method: "get",
	path: "/tokenlist",
	summary: "Export tokens as Uniswap Token List",
	description:
		"Exports tokens in Uniswap Token List format with Superfluid extensions. Supports filtering by token properties. The timestamp field reflects the most recent update time of any token in the list.",
	tags: ["Token List"],
	request: {
		query: TokenListFilterQuerySchema,
	},
	responses: {
		200: {
			description: "Token list with Superfluid extensions",
			content: {
				"application/json": {
					schema: TokenListSchema,
				},
			},
		},
		400: {
			description: "Invalid query parameters",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// GET /prices/{chainId}/{address} - Get token price history
registry.registerPath({
	method: "get",
	path: "/prices/{chainId}/{address}",
	summary: "Get token price history",
	description: "Retrieves token metadata and optional historical price data from storage",
	tags: ["Prices"],
	request: {
		params: TokenPathParamsSchema,
		query: PriceHistoryQuerySchema,
	},
	responses: {
		200: {
			description: "Token with optional price history",
			content: {
				"application/json": {
					schema: TokenPriceHistoryResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid parameters",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Token or price data not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// GET /prices/{chainId}/{address}/current - Get current token price
registry.registerPath({
	method: "get",
	path: "/prices/{chainId}/{address}/current",
	summary: "Get current token price",
	description: "Retrieves real-time token price from CoinGecko using classic or onchain API",
	tags: ["Prices"],
	request: {
		params: TokenPathParamsSchema,
	},
	responses: {
		200: {
			description: "Current token price information",
			content: {
				"application/json": {
					schema: CurrentPriceResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid parameters",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Token not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		503: {
			description: "CoinGecko mappings not available",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// Generate OpenAPI document
export function generateOpenApiDocument() {
	const generator = new OpenApiGeneratorV31(registry.definitions)

	return generator.generateDocument({
		openapi: "3.1.0",
		info: {
			title: "Superfluid CMS API",
			version: "1.0.0",
			description:
				"API for accessing Superfluid token data from the CMS database, including token metadata, filtering capabilities, and optional pricing data from Redis/CoinGecko. The API also provides export functionality in Uniswap Token List format with Superfluid-specific extensions.",
			contact: {
				name: "Superfluid",
				url: "https://superfluid.finance",
			},
		},
		servers: [
			{
				url: "",
				description: "Current server",
			},
		],
		tags: [
			{
				name: "Tokens",
				description: "Token data and metadata operations",
			},
			{
				name: "Token List",
				description: "Export tokens in standard formats",
			},
			{
				name: "Prices",
				description: "Token pricing operations",
			},
		],
	})
}
