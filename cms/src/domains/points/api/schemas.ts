import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi"
import { z } from "zod"

// Extend Zod with OpenAPI functionality
extendZodWithOpenApi(z)

// ============================================
// Common Schemas
// ============================================

export const EthereumAddressSchema = z
	.string()
	.regex(/^0x[a-fA-F0-9]{40}$/)
	.openapi({
		example: "0x1234567890abcdef1234567890abcdef12345678",
		description: "Ethereum wallet address",
	})

export const ApiErrorSchema = z
	.object({
		message: z.string().openapi({
			example: "Validation failed",
			description: "Error message",
		}),
		details: z
			.array(
				z.object({
					path: z.string(),
					message: z.string(),
				}),
			)
			.optional()
			.openapi({
				description: "Validation error details",
			}),
		invalid: z.array(z.string()).optional().openapi({
			description: "List of invalid addresses",
		}),
	})
	.openapi({
		title: "ApiError",
		description: "API error response",
	})

// ============================================
// Balance Endpoint Schemas
// ============================================

export const BalanceQuerySchema = z
	.object({
		campaignId: z.coerce.number().int().positive().openapi({
			example: 42,
			description: "Campaign ID",
		}),
		account: EthereumAddressSchema.openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address",
		}),
	})
	.openapi({
		title: "BalanceQuery",
		description: "Query parameters for single account balance endpoint",
	})

export const BalancePostBodySchema = z
	.object({
		campaignId: z.number().int().positive().openapi({
			example: 42,
			description: "Campaign ID",
		}),
		accounts: z
			.array(EthereumAddressSchema)
			.min(1)
			.max(100)
			.openapi({
				example: ["0x1234567890abcdef1234567890abcdef12345678", "0xabcdef1234567890abcdef1234567890abcdef12"],
				description: "Array of Ethereum addresses (1-100)",
			}),
	})
	.openapi({
		title: "BalancePostBody",
		description: "Request body for bulk balance endpoint",
	})

export const PointBalanceSchema = z
	.object({
		account: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum wallet address",
		}),
		points: z.number().openapi({
			example: 1500,
			description: "Total accumulated points",
		}),
	})
	.openapi({
		title: "PointBalance",
		description: "Point balance for a single account",
	})

export const PointBalancesResponseSchema = z
	.object({
		balances: z.array(PointBalanceSchema).openapi({
			description: "List of balances for requested accounts",
		}),
	})
	.openapi({
		title: "PointBalancesResponse",
		description: "Response containing multiple account balances",
	})

// ============================================
// Events Endpoint Schemas
// ============================================

export const EventsQuerySchema = z
	.object({
		campaignId: z.coerce.number().int().positive().openapi({
			example: 42,
			description: "Campaign ID",
		}),
		account: z.string().optional().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Filter by Ethereum address",
		}),
		eventName: z.string().optional().openapi({
			example: "swap",
			description: "Filter by event name",
		}),
		startTime: z.string().optional().openapi({
			example: "2024-03-23T00:00:00.000Z",
			description:
				"Filter events that occurred at or after this time. Accepts ISO 8601 (e.g., 2024-03-23T00:00:00.000Z) or Unix timestamp in seconds (e.g., 1711152000)",
		}),
		endTime: z.string().optional().openapi({
			example: "2024-12-31T23:59:59.999Z",
			description:
				"Filter events that occurred at or before this time. Accepts ISO 8601 (e.g., 2024-12-31T23:59:59.999Z) or Unix timestamp in seconds (e.g., 1735689599)",
		}),
		limit: z.coerce.number().int().min(1).max(100).optional().openapi({
			example: 50,
			description: "Number of results per page (1-100, default: 50)",
		}),
		page: z.coerce.number().int().positive().optional().openapi({
			example: 1,
			description: "Page number (default: 1)",
		}),
	})
	.openapi({
		title: "EventsQuery",
		description: "Query parameters for events endpoint",
	})

export const PointEventSchema = z
	.object({
		id: z.number().openapi({
			example: 42,
			description: "Event ID",
		}),
		eventName: z.string().openapi({
			example: "swap",
			description: "Name of the event that awarded points",
		}),
		account: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address that received points",
		}),
		points: z.number().openapi({
			example: 100,
			description: "Points awarded (can be positive or negative)",
		}),
		uniqueId: z.string().nullable().openapi({
			example: "tx-0xabc123",
			description: "Unique identifier for deduplication",
		}),
		createdAt: z.string().openapi({
			example: "2025-01-07T12:00:00.000Z",
			description: "ISO 8601 timestamp of when the event occurred",
		}),
	})
	.openapi({
		title: "PointEvent",
		description: "A single point event",
	})

export const PaginationSchema = z
	.object({
		page: z.number().openapi({
			example: 1,
			description: "Current page number",
		}),
		limit: z.number().openapi({
			example: 50,
			description: "Items per page",
		}),
		totalDocs: z.number().openapi({
			example: 150,
			description: "Total number of documents",
		}),
		totalPages: z.number().openapi({
			example: 3,
			description: "Total number of pages",
		}),
		hasNextPage: z.boolean().openapi({
			example: true,
			description: "Whether there is a next page",
		}),
		hasPrevPage: z.boolean().openapi({
			example: false,
			description: "Whether there is a previous page",
		}),
	})
	.openapi({
		title: "Pagination",
		description: "Pagination metadata",
	})

export const PointEventsResponseSchema = z
	.object({
		events: z.array(PointEventSchema).openapi({
			description: "List of point events",
		}),
		pagination: PaginationSchema,
	})
	.openapi({
		title: "PointEventsResponse",
		description: "Paginated list of point events",
	})

// ============================================
// Push Endpoint Schemas
// ============================================

// Single event in a batch (minimal - inherits eventName from root)
export const BatchEventMinimalSchema = z
	.object({
		account: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address to award points to",
		}),
		points: z.number().int().openapi({
			example: 100,
			description: "Points to award (must be an integer)",
		}),
	})
	.openapi({
		title: "BatchEventMinimal",
		description: "Event in a batch that inherits eventName from root",
	})

// Single event with all fields
export const PushEventSchema = z
	.object({
		campaignId: z.number().int().positive().optional().openapi({
			example: 42,
			description: "Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		campaign: z.number().int().positive().optional().openapi({
			example: 42,
			description:
				"**Deprecated**: Use 'campaignId' instead. Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		eventName: z.string().min(1).max(100).openapi({
			example: "swap",
			description: "Name of the event (1-100 characters)",
		}),
		account: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address to award points to",
		}),
		points: z.number().int().openapi({
			example: 100,
			description: "Points to award (must be an integer)",
		}),
		uniqueId: z.string().max(255).optional().openapi({
			example: "tx-0xabc123",
			description: "Unique identifier for deduplication (max 255 chars)",
		}),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})
	.openapi({
		title: "PushEvent",
		description: "A single point event to push",
	})

// Format 1: Single event (no events array)
export const SingleEventRequestSchema = PushEventSchema.openapi({
	title: "SingleEventRequest",
	description: "Push a single point event",
})

// Format 2: Batch with root-level defaults
export const BatchWithDefaultsRequestSchema = z
	.object({
		campaignId: z.number().int().positive().optional().openapi({
			example: 42,
			description: "Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		campaign: z.number().int().positive().optional().openapi({
			example: 42,
			description:
				"**Deprecated**: Use 'campaignId' instead. Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		eventName: z.string().min(1).max(100).openapi({
			example: "swap",
			description: "Event name applied to all events in the batch",
		}),
		uniqueId: z.string().max(255).optional().openapi({
			example: "batch-123",
			description: "Unique ID applied to all events (optional)",
		}),
		events: z.array(BatchEventMinimalSchema).min(1).max(1000).openapi({
			description: "Array of events (1-1000 items)",
		}),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})
	.openapi({
		title: "BatchWithDefaultsRequest",
		description: "Push multiple events with shared eventName from root",
	})

// Format 3: Batch with per-event values
export const BatchWithPerEventRequestSchema = z
	.object({
		campaignId: z.number().int().positive().optional().openapi({
			example: 42,
			description: "Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		campaign: z.number().int().positive().optional().openapi({
			example: 42,
			description:
				"**Deprecated**: Use 'campaignId' instead. Campaign ID (optional). If provided, must match the API key's associated campaign.",
		}),
		events: z.array(PushEventSchema).min(1).max(1000).openapi({
			description: "Array of events with individual eventNames (1-1000 items)",
		}),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})
	.openapi({
		title: "BatchWithPerEventRequest",
		description: "Push multiple events each with their own eventName",
	})

// Combined push request schema (for documentation purposes)
export const PushRequestBodySchema = z
	.union([SingleEventRequestSchema, BatchWithDefaultsRequestSchema, BatchWithPerEventRequestSchema])
	.openapi({
		title: "PushRequestBody",
		description:
			"Push request body. Accepts three formats: single event object, batch with root-level eventName, or batch with per-event eventNames.",
	})

export const PushResponseSchema = z
	.object({
		message: z.string().openapi({
			example: "Push request accepted for processing",
			description: "Status message",
		}),
		pushRequestId: z.number().openapi({
			example: 42,
			description: "ID of the created push request for tracking",
		}),
		eventCount: z.number().openapi({
			example: 5,
			description: "Number of events in the push request",
		}),
	})
	.openapi({
		title: "PushResponse",
		description: "Response from push endpoint (202 Accepted)",
	})

// ============================================
// Signed Balance Endpoint Schemas
// ============================================

export const SignedBalanceQuerySchema = z
	.object({
		campaignId: z.coerce.number().int().positive().openapi({
			example: 42,
			description: "Campaign ID",
		}),
		account: EthereumAddressSchema.openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address to get signed balance for",
		}),
	})
	.openapi({
		title: "SignedBalanceQuery",
		description: "Query parameters for signed balance endpoint",
	})

export const SignedBalanceResponseSchema = z
	.object({
		address: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Lowercase Ethereum address",
		}),
		points: z.number().openapi({
			example: 1500,
			description: "Total accumulated points",
		}),
		signatureTimestamp: z.number().openapi({
			example: 1704672000,
			description: "Unix timestamp when the signature was generated",
		}),
		signature: z.string().openapi({
			example: "0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f...",
			description: "EIP-191 signature of the message hash",
		}),
		signer: z.string().openapi({
			example: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
			description: "Address of the signer that produced the signature",
		}),
	})
	.openapi({
		title: "SignedBalanceResponse",
		description: "Signed point balance for on-chain verification",
	})

// ============================================
// Batch Signed Balance Endpoint Schemas
// ============================================

export const SignedBalanceBatchBodySchema = z
	.object({
		campaignIds: z
			.array(z.number().int().positive())
			.min(1)
			.max(50)
			.openapi({
				example: [1, 2, 3],
				description: "Array of campaign IDs (1-50)",
			}),
		account: EthereumAddressSchema.openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address to get signed balances for",
		}),
	})
	.openapi({
		title: "SignedBalanceBatchBody",
		description: "Request body for batch signed balance endpoint",
	})

export const SignedBalanceBatchResponseSchema = z
	.object({
		address: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Lowercase Ethereum address",
		}),
		campaignIds: z.array(z.number()).openapi({
			example: [1, 2, 3],
			description: "Array of campaign IDs in request order",
		}),
		points: z.array(z.number()).openapi({
			example: [100, 200, 300],
			description: "Array of point balances matching campaign order",
		}),
		signatureTimestamp: z.number().openapi({
			example: 1704672000,
			description: "Unix timestamp when the signature was generated",
		}),
		signature: z.string().openapi({
			example: "0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f...",
			description: "Single EIP-191 signature covering all campaigns",
		}),
		signer: z.string().openapi({
			example: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
			description: "Address of the signer that produced the signature",
		}),
	})
	.openapi({
		title: "SignedBalanceBatchResponse",
		description: "Batch signed point balance for on-chain batch claims",
	})

// ============================================
// Event Balance Endpoint Schemas
// ============================================

export const EventBalanceQuerySchema = z
	.object({
		campaignId: z.coerce.number().int().positive().openapi({
			example: 42,
			description: "Campaign ID",
		}),
		eventName: z.string().min(1).max(100).openapi({
			example: "swap",
			description: "Event name to aggregate points for",
		}),
		account: EthereumAddressSchema.optional().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Optional: Filter by Ethereum address. If omitted, returns total for all accounts.",
		}),
	})
	.openapi({
		title: "EventBalanceQuery",
		description: "Query parameters for event balance endpoint",
	})

export const EventBalanceResponseSchema = z
	.object({
		eventName: z.string().openapi({
			example: "swap",
			description: "Event name that was queried",
		}),
		points: z.number().openapi({
			example: 1500,
			description: "Total aggregated points for this event type",
		}),
		account: z.string().optional().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address (included when account filter was provided)",
		}),
	})
	.openapi({
		title: "EventBalanceResponse",
		description: "Aggregated point balance for a specific event type",
	})

// ============================================
// Batch Balance Endpoint Schemas (unsigned)
// ============================================

export const BalanceBatchBodySchema = z
	.object({
		campaignIds: z
			.array(z.number().int().positive())
			.min(1)
			.max(50)
			.openapi({
				example: [1, 2, 3],
				description: "Array of campaign IDs (1-50)",
			}),
		account: EthereumAddressSchema.openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Ethereum address to get balances for",
		}),
	})
	.openapi({
		title: "BalanceBatchBody",
		description: "Request body for batch balance endpoint",
	})

export const BalanceBatchWarningSchema = z
	.object({
		campaignId: z.number().openapi({
			example: 2,
			description: "Campaign ID that triggered the warning",
		}),
		message: z.string().openapi({
			example: "Campaign not found",
			description: "Warning message",
		}),
	})
	.openapi({
		title: "BalanceBatchWarning",
		description: "Warning for a specific campaign in batch balance request",
	})

export const BalanceBatchResponseSchema = z
	.object({
		address: z.string().openapi({
			example: "0x1234567890abcdef1234567890abcdef12345678",
			description: "Lowercase Ethereum address",
		}),
		campaignIds: z.array(z.number()).openapi({
			example: [1, 2, 3],
			description: "Array of campaign IDs in request order",
		}),
		points: z.array(z.number()).openapi({
			example: [100, 0, 300],
			description: "Array of point balances matching campaign order (0 for missing campaigns)",
		}),
		warnings: z
			.array(BalanceBatchWarningSchema)
			.optional()
			.openapi({
				example: [{ campaignId: 2, message: "Campaign not found" }],
				description: "Warnings for campaigns that could not be found (still returns 0 points for those)",
			}),
	})
	.openapi({
		title: "BalanceBatchResponse",
		description: "Batch point balances for multiple campaigns",
	})
