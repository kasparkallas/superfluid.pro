import { OpenAPIRegistry, OpenApiGeneratorV31 } from "@asteasolutions/zod-to-openapi";
import {
	ApiErrorSchema,
	CoinGeckoMappingsSchema,
	CurrentPriceSchema,
	NetworkParamSchema,
	SuperTokenSchema,
	TokenFilterQuerySchema,
	TokenParamSchema,
	TokenPriceHistorySchema,
	TokensResponseSchema,
} from "./schemas";

export const registry = new OpenAPIRegistry();

// Register reusable components
registry.register("SuperToken", SuperTokenSchema);
registry.register("TokensResponse", TokensResponseSchema);
registry.register("TokenPriceHistory", TokenPriceHistorySchema);
registry.register("CoinGeckoMappings", CoinGeckoMappingsSchema);
registry.register("CurrentPrice", CurrentPriceSchema);
registry.register("ApiError", ApiErrorSchema);

// Register API paths
registry.registerPath({
	method: "get",
	path: "/api/v1/tokens",
	summary: "Get all Super Tokens",
	description: "Retrieves all Super Tokens across all networks",
	tags: ["Tokens"],
	request: {
		query: TokenFilterQuerySchema,
	},
	responses: {
		200: {
			description: "List of all Super Tokens",
			content: {
				"application/json": {
					schema: TokensResponseSchema,
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
});

registry.registerPath({
	method: "get",
	path: "/api/v1/tokens/{networkName}",
	summary: "Get Super Tokens by network",
	description: "Retrieves all Super Tokens for a specific network",
	tags: ["Tokens"],
	request: {
		params: NetworkParamSchema,
		query: TokenFilterQuerySchema,
	},
	responses: {
		200: {
			description: "List of Super Tokens for the network",
			content: {
				"application/json": {
					schema: TokensResponseSchema,
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
			description: "Network not found",
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
});

registry.registerPath({
	method: "get",
	path: "/api/v1/tokens/{networkName}/{tokenAddress}",
	summary: "Get a specific Super Token",
	description: "Retrieves detailed information for a single Super Token",
	tags: ["Tokens"],
	request: {
		params: TokenParamSchema,
	},
	responses: {
		200: {
			description: "Super Token details",
			content: {
				"application/json": {
					schema: SuperTokenSchema,
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
});

registry.registerPath({
	method: "get",
	path: "/api/v1/prices/{networkName}/{tokenAddress}",
	summary: "Get token price history",
	description: "Retrieves daily price history for a specific Super Token",
	tags: ["Prices"],
	request: {
		params: TokenParamSchema,
	},
	responses: {
		200: {
			description: "Token price history",
			content: {
				"application/json": {
					schema: TokenPriceHistorySchema,
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
			description: "Price data not found",
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
});

registry.registerPath({
	method: "get",
	path: "/api/v1/mappings",
	summary: "Get CoinGecko mappings",
	description: "Retrieves CoinGecko ID mappings for all Super Tokens",
	tags: ["Mappings"],
	responses: {
		200: {
			description: "CoinGecko mappings",
			content: {
				"application/json": {
					schema: CoinGeckoMappingsSchema,
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
});

registry.registerPath({
	method: "get",
	path: "/api/v1/prices/{networkName}/{tokenAddress}/current",
	summary: "Get current token price",
	description:
		"Retrieves the current price for a specific Super Token. Uses CoinGecko API for tokens with CoinGecko IDs, or GeckoTerminal on-chain API for others.",
	tags: ["Prices"],
	request: {
		params: TokenParamSchema,
	},
	responses: {
		200: {
			description: "Current token price",
			content: {
				"application/json": {
					schema: CurrentPriceSchema,
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
			description: "Service unavailable (CoinGecko mappings not available)",
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
});

// Generate OpenAPI document
export function generateOpenApiDocument() {
	const generator = new OpenApiGeneratorV31(registry.definitions);

	return generator.generateDocument({
		openapi: "3.1.0",
		info: {
			title: "Superfluid Data API",
			version: "1.0.0",
			description:
				"API for accessing aggregated data about Superfluid Super Tokens, including statistics, price history, and CoinGecko mappings. Data is updated periodically by background automation jobs.",
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
				description: "Super Token data and statistics",
			},
			{
				name: "Prices",
				description: "Historical price data",
			},
			{
				name: "Mappings",
				description: "Token to CoinGecko ID mappings",
			},
		],
	});
}
