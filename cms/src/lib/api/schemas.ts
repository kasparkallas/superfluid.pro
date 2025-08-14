import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { isAddress } from "viem";
import { z } from "zod";

// Extend Zod with OpenAPI functionality
extendZodWithOpenApi(z);

// Ethereum address pattern
const ethereumAddressSchema = z.string().refine(isAddress, "Must be a valid Ethereum address").openapi({
	example: "0xb3edb2f90fec1bf1f872a9ef143cfd614773ad04",
	description: "Ethereum contract address",
});

// Token type enum
const tokenTypeSchema = z
	.enum(["underlyingToken", "pureSuperToken", "nativeAssetSuperToken", "wrapperSuperToken"])
	.openapi({
		example: "wrapperSuperToken",
		description: "Type of token in the Superfluid ecosystem",
	});

// Token tags
const tokenTagSchema = z.enum(["streme", "testnet", "underlying", "supertoken"]).openapi({
	example: "supertoken",
	description: "Token categorization tags",
});

// Token pricing schema
export const TokenPriceSchema = z
	.object({
		usd: z.number().nullable().openapi({
			example: 0.999,
			description: "Current price in USD",
		}),
		usd_24h_change: z.number().nullable().openapi({
			example: -0.12,
			description: "24-hour price change percentage",
		}),
		last_updated_at: z.number().nullable().openapi({
			example: 1736180472,
			description: "Unix timestamp of last price update",
		}),
	})
	.openapi({
		title: "TokenPrice",
		description: "Current token price information from CoinGecko",
	});

// CMS Token schema
export const TokenSchema = z
	.object({
		id: z.string().openapi({
			example: "1:0x912ce59144191c1204e64559fe8253a0e49e6548",
			description: "Composite ID (chainId:address)",
		}),
		chainId: z.number().int().positive().openapi({
			example: 42161,
			description: "Blockchain network ID",
		}),
		address: ethereumAddressSchema,
		name: z.string().openapi({
			example: "Super ARB",
			description: "Token name",
		}),
		symbol: z.string().openapi({
			example: "ARBx",
			description: "Token symbol",
		}),
		decimals: z.number().int().min(0).max(18).openapi({
			example: 18,
			description: "Number of token decimals",
		}),
		logoUri: z.string().nullable().optional().openapi({
			example: "https://example.com/token-logo.png",
			description: "URL of the token logo image",
		}),
		isListed: z.boolean().nullable().optional().openapi({
			description: "Whether token is listed on the Resolver",
		}),
		coingeckoId: z.string().nullable().optional().openapi({
			example: "arbitrum",
			description: "CoinGecko ID for price tracking",
		}),
		tags: z.array(tokenTagSchema).nullable().optional().openapi({
			description: "Token categorization tags",
		}),
		tokenType: tokenTypeSchema,
		underlyingAddress: ethereumAddressSchema.nullable().optional().openapi({
			description: "Address of underlying token for wrapper super tokens",
		}),
		note: z.string().nullable().optional().openapi({
			description: "Additional notes about the token",
		}),
		pricing: TokenPriceSchema.optional().openapi({
			description: "Current pricing data (when includePricing=true)",
		}),
	})
	.openapi({
		title: "Token",
		description: "A token in the Superfluid ecosystem with metadata and optional pricing",
	});

// Token list response
export const TokenListResponseSchema = z
	.object({
		tokens: z.array(TokenSchema),
		pagination: z.object({
			page: z.number().int().positive().openapi({
				example: 1,
				description: "Current page number",
			}),
			limit: z.number().int().positive().openapi({
				example: 100,
				description: "Items per page",
			}),
			totalPages: z.number().int().openapi({
				example: 5,
				description: "Total number of pages",
			}),
			totalItems: z.number().int().openapi({
				example: 450,
				description: "Total number of items",
			}),
		}),
	})
	.openapi({
		title: "TokenListResponse",
		description: "Paginated list of tokens",
	});

// Token list extension for super tokens
export const SuperTokenExtensionSchema = z
	.object({
		extensions: z.object({
			superTokenInfo: z
				.union([
					z.object({
						type: z.literal("Pure"),
					}),
					z.object({
						type: z.literal("Native Asset"),
					}),
					z.object({
						type: z.literal("Wrapper"),
						underlyingTokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
					}),
				])
				.openapi({
					description: "Superfluid-specific token extension information",
				}),
		}),
	})
	.openapi({
		title: "SuperTokenExtension",
		description: "Superfluid extensions for token list",
	});

// Token info for token list
export const TokenInfoSchema = z
	.object({
		chainId: z.number().int().positive(),
		address: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
		name: z.string(),
		symbol: z.string(),
		decimals: z.number().int().min(0).max(18),
		logoURI: z.string().optional(),
		tags: z.array(z.string()).optional(),
	})
	.openapi({
		title: "TokenInfo",
		description: "Standard token information for token list",
	});

// Super token info (token info + extensions)
export const SuperTokenInfoSchema = TokenInfoSchema.merge(SuperTokenExtensionSchema).openapi({
	title: "SuperTokenInfo",
	description: "Token information with Superfluid extensions",
});

// Token list schema
export const TokenListSchema = z
	.object({
		name: z.string().openapi({
			example: "Superfluid Token List",
			description: "Name of the token list",
		}),
		timestamp: z.string().datetime().openapi({
			example: "2025-01-07T12:00:00.000Z",
			description: "ISO 8601 timestamp of list generation",
		}),
		version: z.object({
			major: z.number().int(),
			minor: z.number().int(),
			patch: z.number().int(),
		}),
		tokens: z.array(z.union([TokenInfoSchema, SuperTokenInfoSchema])),
	})
	.openapi({
		title: "TokenList",
		description: "Uniswap Token List format with Superfluid extensions",
	});

// Query parameters
export const TokenFilterQuerySchema = z
	.object({
		isListed: z
			.enum(["true", "false"])
			.optional()
			.transform((val) => (val === "true" ? true : val === "false" ? false : undefined))
			.openapi({
				description: "Filter by listed status",
			}),
		tokenType: tokenTypeSchema.optional().openapi({
			description: "Filter by token type",
		}),
		tags: z
			.string()
			.optional()
			.transform((val) => (val ? val.split(",") : undefined))
			.openapi({
				example: "supertoken,testnet",
				description: "Comma-separated list of tags to filter by",
			}),
		includePricing: z
			.enum(["true", "false"])
			.optional()
			.transform((val) => val === "true")
			.openapi({
				description: "Include current pricing data",
			}),
		sortBy: z.enum(["name", "symbol", "chainId"]).optional().openapi({
			description: "Field to sort by",
		}),
		sortOrder: z.enum(["asc", "desc"]).optional().openapi({
			description: "Sort order",
		}),
		limit: z
			.string()
			.optional()
			.transform((val) => (val ? parseInt(val) : 100))
			.openapi({
				example: "100",
				description: "Number of items per page",
			}),
		page: z
			.string()
			.optional()
			.transform((val) => (val ? parseInt(val) : 1))
			.openapi({
				example: "1",
				description: "Page number",
			}),
	})
	.openapi({
		title: "TokenFilterQuery",
		description: "Query parameters for filtering tokens",
	});

// Path parameters
export const TokenPathParamsSchema = z
	.object({
		chainId: z.string().openapi({
			example: "42161",
			description: "Blockchain network ID",
		}),
		address: z.string().openapi({
			example: "0x912ce59144191c1204e64559fe8253a0e49e6548",
			description: "Token contract address",
		}),
	})
	.openapi({
		title: "TokenPathParams",
		description: "Path parameters for single token endpoint",
	});

// Pricing query parameter
export const PricingQuerySchema = z
	.object({
		includePricing: z
			.enum(["true", "false"])
			.optional()
			.transform((val) => val === "true")
			.openapi({
				description: "Include current pricing data",
			}),
	})
	.openapi({
		title: "PricingQuery",
		description: "Query parameter for including pricing data",
	});

// API Error schema
export const ApiErrorSchema = z
	.object({
		error: z.string().openapi({
			example: "Not Found",
			description: "Error type",
		}),
		message: z.string().openapi({
			example: "Token not found",
			description: "Detailed error message",
		}),
	})
	.openapi({
		title: "ApiError",
		description: "API error response",
	});
