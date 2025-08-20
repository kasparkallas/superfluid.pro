import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi"
import { isAddress } from "viem"
import { z } from "zod"

// Extend Zod with OpenAPI functionality
extendZodWithOpenApi(z)

// Ethereum address pattern
const ethereumAddressSchema = z.string().refine(isAddress, "Must be a valid Ethereum address").openapi({
	example: "0xb3edb2f90fec1bf1f872a9ef143cfd614773ad04",
	description: "Ethereum contract address",
})

// Network name validation
const networkNameSchema = z.string().min(1).openapi({
	example: "arbitrum-one",
	description: "Network identifier (e.g., optimism, arbitrum-one, base-mainnet)",
})

// Super Token schema based on existing types
export const SuperTokenSchema = z
	.object({
		id: z.string().openapi({
			example: "42161-0xb3edb2f90fec1bf1f872a9ef143cfd614773ad04",
			description: "Chain-prefixed token address",
		}),
		address: ethereumAddressSchema,
		chainId: z.number().int().positive().openapi({
			example: 42161,
			description: "Blockchain network ID",
		}),
		symbol: z.string().openapi({
			example: "ARBx",
			description: "Token symbol",
		}),
		name: z.string().openapi({
			example: "Super ARB",
			description: "Token name",
		}),
		decimals: z.number().int().min(0).max(18).openapi({
			example: 18,
			description: "Number of token decimals",
		}),
		isListed: z.boolean().openapi({
			description: "Whether token is listed on official Superfluid token list",
		}),
		isNativeAssetSuperToken: z.boolean().openapi({
			description: "Whether this is a native asset Super Token",
		}),
		isPureSuperToken: z.boolean().openapi({
			description: "Whether this is a Pure Super Token (no underlying asset, zero address)",
		}),
		isWrapperSuperToken: z.boolean().openapi({
			description: "Whether this is a Wrapper Super Token (wraps another ERC20 token)",
		}),
		underlyingAddress: ethereumAddressSchema.nullable().openapi({
			description: "Address of underlying token, null for native asset Super Tokens",
		}),
		totalNumberOfHolders: z.number().int().min(0).openapi({
			description: "Total number of token holders",
		}),
		totalNumberOfActiveStreams: z.number().int().min(0).openapi({
			description: "Number of currently active streams",
		}),
		totalNumberOfClosedStreams: z.number().int().min(0).openapi({
			description: "Number of closed streams",
		}),
		lastUpdated: z.string().datetime().openapi({
			description: "ISO 8601 timestamp of last data update",
		}),
	})
	.openapi({
		title: "SuperToken",
		description: "A Superfluid Super Token with statistics and metadata",
	})

// Price data point
export const PriceDataPointSchema = z
	.object({
		date: z
			.string()
			.regex(/^\d{4}-\d{2}-\d{2}$/)
			.openapi({
				example: "2025-06-22",
				description: "Date in YYYY-MM-DD format",
			}),
		price: z.string().openapi({
			example: "0.00000022248603752704",
			description: "Price in USD as string to preserve precision",
		}),
	})
	.openapi({
		title: "PriceDataPoint",
		description: "Daily price data for a token",
	})

// Lenient schema for reading stored price data (backward compatibility)
export const StoredPriceDataSchema = z.object({
	version: z.string(),
	timestamp: z.string().datetime(),
	testRun: z.boolean().optional(),
	// Token data - always from fresh fetch-super-tokens storage
	token: z.object({
		id: z.string(),
		address: ethereumAddressSchema,
		chainId: z.number().int().positive(),
		symbol: z.string(),
		name: z.string(),
		decimals: z.number().int().min(0).max(18).optional(),
		isListed: z.boolean(),
		isNativeAssetSuperToken: z.boolean(),
		isPureSuperToken: z.boolean().optional(),
		isWrapperSuperToken: z.boolean().optional(),
		underlyingAddress: ethereumAddressSchema.nullable(),
		totalNumberOfHolders: z.number().int().min(0),
		totalNumberOfActiveStreams: z.number().int().min(0),
		totalNumberOfClosedStreams: z.number().int().min(0),
		lastUpdated: z.string().datetime().optional(),
	}),
	coingeckoId: z.union([z.string(), z.null(), z.undefined()]).optional(),
	fetchedAt: z.string().datetime(),
	pricesUsd: z.array(PriceDataPointSchema),
})

// Token price history (strict schema for API responses)
export const TokenPriceHistorySchema = z
	.object({
		version: z.string().openapi({ example: "1.0.0" }),
		timestamp: z.string().datetime(),
		testRun: z.boolean().optional(),
		token: SuperTokenSchema,
		coingeckoId: z.string().nullable().openapi({
			example: "arbitrum",
			description: "CoinGecko coin ID for price data",
		}),
		fetchedAt: z.string().datetime(),
		pricesUsd: z.array(PriceDataPointSchema),
	})
	.openapi({
		title: "TokenPriceHistory",
		description: "Complete price history for a Super Token",
	})

// Query parameter schemas
export const TokenFilterQuerySchema = z.object({
	isListed: z.coerce.boolean().optional().openapi({
		description: "Filter by whether token is officially listed",
	}),
	isNativeAssetSuperToken: z.coerce.boolean().optional().openapi({
		description: "Filter by native asset Super Tokens",
	}),
	isPureSuperToken: z.coerce.boolean().optional().openapi({
		description: "Filter by Pure Super Tokens (no underlying asset)",
	}),
	isWrapperSuperToken: z.coerce.boolean().optional().openapi({
		description: "Filter by Wrapper Super Tokens (wraps another ERC20 token)",
	}),
	sortBy: z
		.enum(["totalNumberOfHolders", "totalNumberOfActiveStreams", "totalNumberOfClosedStreams", "name", "symbol"])
		.default("totalNumberOfHolders")
		.openapi({
			description: "Field to sort results by",
		}),
	sortOrder: z.enum(["asc", "desc"]).default("desc").openapi({
		description: "Sort order",
	}),
})

// Response schemas
export const TokensResponseSchema = z.array(SuperTokenSchema).openapi({
	title: "TokensResponse",
	description: "List of Super Tokens",
})

// Path parameter schemas
export const NetworkParamSchema = z.object({
	networkName: networkNameSchema,
})

export const TokenParamSchema = z.object({
	networkName: networkNameSchema,
	tokenAddress: ethereumAddressSchema,
})

// Error response
export const ApiErrorSchema = z
	.object({
		message: z.string(),
		code: z.string().optional(),
	})
	.openapi({
		title: "ApiError",
		description: "Standard API error response",
	})

// CoinGecko mappings (based on existing data structure)
export const CoinGeckoMappingsSchema = z
	.object({
		version: z.string(),
		timestamp: z.string().datetime(),
		totalSuperTokens: z.number().int().min(0),
		mappedSuperTokens: z.number().int().min(0),
		chainCount: z.number().int().min(0),
		mappings: z.record(z.record(z.string())).openapi({
			description: "Nested mapping: chainId -> tokenAddress -> coingeckoId",
		}),
		metadata: z.object({
			nativeAssetCoinIds: z.record(z.string()),
			chainIdToPlatformIds: z.record(z.string()),
		}),
	})
	.openapi({
		title: "CoinGeckoMappings",
		description: "Mapping of Super Tokens to CoinGecko coin IDs",
	})

// Current price response
export const CurrentPriceSchema = z
	.object({
		token: SuperTokenSchema,
		priceUsd: z.string().nullable().openapi({
			example: "2.34567890123456789",
			description: "Current price in USD as string to preserve precision",
		}),
		timestamp: z.string().datetime().openapi({
			description: "ISO 8601 timestamp of price fetch",
		}),
		method: z.enum(["classic", "onchain", "none"]).openapi({
			description:
				"Method used to fetch price: classic (CoinGecko), onchain (GeckoTerminal), none (no price available)",
		}),
		coingeckoId: z.string().optional().openapi({
			example: "arbitrum",
			description: "CoinGecko coin ID if available",
		}),
	})
	.openapi({
		title: "CurrentPrice",
		description: "Current price data for a Super Token",
	})

// Export types for use in route handlers
export type SuperToken = z.infer<typeof SuperTokenSchema>
export type TokenFilterQuery = z.infer<typeof TokenFilterQuerySchema>
export type TokensResponse = z.infer<typeof TokensResponseSchema>
export type NetworkParam = z.infer<typeof NetworkParamSchema>
export type TokenParam = z.infer<typeof TokenParamSchema>
export type ApiError = z.infer<typeof ApiErrorSchema>
export type TokenPriceHistory = z.infer<typeof TokenPriceHistorySchema>
export type StoredPriceData = z.infer<typeof StoredPriceDataSchema>
export type CoinGeckoMappings = z.infer<typeof CoinGeckoMappingsSchema>
export type CurrentPrice = z.infer<typeof CurrentPriceSchema>
