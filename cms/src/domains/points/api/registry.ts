import { OpenAPIRegistry, OpenApiGeneratorV31 } from "@asteasolutions/zod-to-openapi"
import {
	ApiErrorSchema,
	BalanceQuerySchema,
	EventsQuerySchema,
	PaginationSchema,
	PointBalanceSchema,
	PointBalancesResponseSchema,
	PointEventSchema,
	PointEventsResponseSchema,
	PushResponseSchema,
	SignedBalanceBatchQuerySchema,
	SignedBalanceBatchResponseSchema,
	SignedBalanceQuerySchema,
	SignedBalanceResponseSchema,
	SingleEventRequestSchema,
} from "./schemas"

export const pointsRegistry = new OpenAPIRegistry()

// Register reusable components
pointsRegistry.register("PointBalance", PointBalanceSchema)
pointsRegistry.register("PointBalancesResponse", PointBalancesResponseSchema)
pointsRegistry.register("PointEvent", PointEventSchema)
pointsRegistry.register("PointEventsResponse", PointEventsResponseSchema)
pointsRegistry.register("Pagination", PaginationSchema)
pointsRegistry.register("PushResponse", PushResponseSchema)
pointsRegistry.register("SignedBalanceResponse", SignedBalanceResponseSchema)
pointsRegistry.register("SignedBalanceBatchResponse", SignedBalanceBatchResponseSchema)
pointsRegistry.register("ApiError", ApiErrorSchema)

// Register security scheme
pointsRegistry.registerComponent("securitySchemes", "ApiKeyAuth", {
	type: "apiKey",
	in: "header",
	name: "X-API-Key",
	description: "API key for authentication. Format: sfp_ followed by 64 hexadecimal characters.",
})

// ============================================
// GET /points/balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/balance",
	summary: "Get point balance(s)",
	description:
		"Retrieves point balance(s) for one or more Ethereum accounts. For a single account, returns a simple balance object. For multiple accounts (comma-separated), returns an array of balances. Requires a campaign slug or ID.",
	tags: ["Balance"],
	request: {
		query: BalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Point balance(s) retrieved successfully",
			content: {
				"application/json": {
					schema: PointBalancesResponseSchema,
					examples: {
						single: {
							summary: "Single account response",
							value: {
								account: "0x1234567890abcdef1234567890abcdef12345678",
								points: 1500,
							},
						},
						multiple: {
							summary: "Multiple accounts response",
							value: {
								balances: [
									{ account: "0x1234567890abcdef1234567890abcdef12345678", points: 1500 },
									{ account: "0xabcdef1234567890abcdef1234567890abcdef12", points: 750 },
								],
							},
						},
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaign/account parameter or invalid addresses)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
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

// ============================================
// GET /points/signed-balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/signed-balance",
	summary: "Get signed point balance",
	description: `Returns a signed point balance for on-chain verification. The signature follows the same format as Stack's getSignedPoints API.

**Signature Structure:**
The message hash is computed as:
\`\`\`
keccak256(encodePacked([address, points, campaignId, timestamp]))
\`\`\`

This can be verified on-chain using ECDSA recovery.`,
	tags: ["Signed Balance"],
	request: {
		query: SignedBalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Signed balance retrieved successfully",
			content: {
				"application/json": {
					schema: SignedBalanceResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890ABCDEF12345678",
						points: 1500,
						signatureTimestamp: 1704672000,
						signature:
							"0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1c",
						signer: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaign/account parameter or invalid address)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error (signing not available or other error)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/signed-balance-batch
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/signed-balance-batch",
	summary: "Get batch signed point balances",
	description: `Returns a single signature covering multiple campaigns for the same account. Enables batch on-chain claims.

**Request:**
- \`campaigns\`: Comma-separated list of campaign IDs (max 50)
- \`account\`: Ethereum address

**Signature Structure:**
The message hash is computed as:
\`\`\`
keccak256(encodePacked([address, uint256[] points, uint256[] campaigns, uint256 timestamp]))
\`\`\`

This produces a single signature that covers all campaigns, allowing batch verification on-chain.`,
	tags: ["Signed Balance"],
	request: {
		query: SignedBalanceBatchQuerySchema,
	},
	responses: {
		200: {
			description: "Batch signed balances retrieved successfully",
			content: {
				"application/json": {
					schema: SignedBalanceBatchResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890ABCDEF12345678",
						campaigns: [7853, 7852, 7850],
						points: [100, 200, 300],
						signatureTimestamp: 1704672000,
						signature:
							"0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1c",
						signer: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
					},
				},
			},
		},
		400: {
			description: "Invalid request (invalid address, campaign ID format, or exceeds 50 campaigns limit)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "One or more campaigns not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error (signing not available or other error)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/events
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/events",
	summary: "Get point events",
	description:
		"Retrieves point events with optional filtering by account and event name. Results are paginated and sorted by creation time (newest first). Requires a campaign slug or ID.",
	tags: ["Events"],
	request: {
		query: EventsQuerySchema,
	},
	responses: {
		200: {
			description: "Point events retrieved successfully",
			content: {
				"application/json": {
					schema: PointEventsResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid request (missing campaign parameter, invalid pagination or address format)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
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

// ============================================
// POST /points/push
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/push",
	summary: "Push point events",
	description: `Push one or more point events for processing. Events are processed asynchronously in the background.

**Campaign Validation (Strongly Recommended):**

Include the \`campaign\` field with the campaign ID to verify you're pushing to the correct campaign. If provided, it must match the API key's associated campaign or the request will be rejected with a 403 error.

**Request Formats:**

1. **Single Event** - Push a single event directly:
\`\`\`json
{
  "campaign": 42, // optional but strongly recommended
  "eventName": "swap",
  "account": "0x...",
  "points": 100,
  "uniqueId": "tx-0xabc" // optional
}
\`\`\`

2. **Batch with Shared eventName** - All events share the root eventName:
\`\`\`json
{
  "campaign": 42, // optional but strongly recommended
  "eventName": "swap",
  "uniqueId": "batch-123", // optional, applied to all
  "events": [
    { "account": "0x...", "points": 100 },
    { "account": "0x...", "points": 50 }
  ]
}
\`\`\`

3. **Batch with Per-Event eventNames** - Each event has its own eventName:
\`\`\`json
{
  "campaign": 42, // optional but strongly recommended
  "events": [
    { "eventName": "swap", "account": "0x...", "points": 100 },
    { "eventName": "stake", "account": "0x...", "points": 200 }
  ]
}
\`\`\`

**Deduplication:** If \`uniqueId\` is provided, duplicate events (same campaign + account + uniqueId) will be skipped.`,
	tags: ["Push"],
	security: [{ ApiKeyAuth: [] }],
	request: {
		body: {
			description: "Point event(s) to push",
			content: {
				"application/json": {
					schema: SingleEventRequestSchema,
					examples: {
						single: {
							summary: "Single event",
							value: {
								campaign: 42,
								eventName: "swap",
								account: "0x1234567890abcdef1234567890abcdef12345678",
								points: 100,
								uniqueId: "tx-0xabc123",
							},
						},
						batchWithDefaults: {
							summary: "Batch with shared eventName",
							value: {
								campaign: 42,
								eventName: "daily_login",
								events: [
									{ account: "0x1234567890abcdef1234567890abcdef12345678", points: 10 },
									{ account: "0xabcdef1234567890abcdef1234567890abcdef12", points: 10 },
								],
							},
						},
						batchPerEvent: {
							summary: "Batch with per-event eventNames",
							value: {
								campaign: 42,
								events: [
									{
										eventName: "swap",
										account: "0x1234567890abcdef1234567890abcdef12345678",
										points: 100,
									},
									{
										eventName: "stake",
										account: "0xabcdef1234567890abcdef1234567890abcdef12",
										points: 200,
									},
								],
							},
						},
					},
				},
			},
		},
	},
	responses: {
		202: {
			description: "Push request accepted for processing",
			content: {
				"application/json": {
					schema: PushResponseSchema,
				},
			},
		},
		400: {
			description: "Validation failed",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
					example: {
						error: "Validation failed",
						details: [{ path: "eventName", message: "String must contain at least 1 character(s)" }],
					},
				},
			},
		},
		401: {
			description: "Unauthorized (missing or invalid API key)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		403: {
			description: "Campaign mismatch (provided campaign ID does not match API key's campaign)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
					example: {
						error: "Campaign mismatch",
						message: "Provided campaign ID (99) does not match API key's campaign (42)",
					},
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
export function generatePointsOpenApiDocument() {
	const generator = new OpenApiGeneratorV31(pointsRegistry.definitions)

	return generator.generateDocument({
		openapi: "3.1.0",
		info: {
			title: "Superfluid Points API",
			version: "1.0.0",
			description: `API for managing point-based reward campaigns in the Superfluid ecosystem.

## Overview

Generate a type-safe TypeScript client from this OpenAPI specification. Choose between two approaches:

| Approach | Best For | Semver | Output |
|----------|----------|--------|--------|
| **openapi-fetch** | Simple integrations, stability | Yes | Types + fetch wrapper |
| **hey-api** | Full SDK, React Query, plugins | No | Complete SDK |

## TypeScript Client: openapi-fetch

A lightweight fetch wrapper with full TypeScript inference. Recommended for most integrations.

**Why choose this?**
- Follows [semver](https://semver.org/) - safe for production
- Minimal bundle size (~5kb)
- Uses native fetch - works everywhere
- Maintained by [openapi-ts](https://openapi-ts.dev/)

### Installation

\`\`\`bash
npm install openapi-fetch
\`\`\`

### Generate Types

\`\`\`bash
npx openapi-typescript YOUR_SERVER/points/openapi.json -o ./points-api.d.ts
\`\`\`

### Usage

\`\`\`typescript
import createClient from 'openapi-fetch';
import type { paths } from './points-api';

const client = createClient<paths>({ baseUrl: 'YOUR_SERVER' });

// Query balance (public endpoint)
const { data, error } = await client.GET('/points/balance', {
  params: { query: { campaign: 'my-campaign', account: '0x1234...' } }
});

if (error) {
  console.error('Failed to fetch balance:', error);
} else {
  console.log('Points:', data.points);
}

// Push events (requires API key)
const { data: pushResult } = await client.POST('/points/push', {
  headers: { 'X-API-Key': 'sfp_...' },
  body: { eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

### Links

- [Documentation](https://openapi-ts.dev/openapi-fetch/)
- [openapi-fetch on npm](https://www.npmjs.com/package/openapi-fetch)
- [openapi-typescript on npm](https://www.npmjs.com/package/openapi-typescript)

## TypeScript Client: hey-api

A full SDK generator with optional plugins for React Query, Zod validation, and more.

**Why choose this?**
- Generates complete SDK with typed functions
- Plugin ecosystem (React Query, Zod, etc.)
- No runtime dependency for basic usage
- Highly configurable

> **Warning:** hey-api does not follow semver. Pin exact versions in production (e.g., \`@hey-api/openapi-ts@0.61.2\`).

### Generate SDK

No installation required - run directly with npx:

\`\`\`bash
npx @hey-api/openapi-ts \\
  -i YOUR_SERVER/points/openapi.json \\
  -o ./src/points-client \\
  -c @hey-api/client-fetch
\`\`\`

### Usage

\`\`\`typescript
import { getPointsBalance, postPointsPush } from './points-client';

// Query balance
const { data, error } = await getPointsBalance({
  query: { campaign: 'my-campaign', account: '0x1234...' }
});

// Push events
await postPointsPush({
  headers: { 'X-API-Key': 'sfp_...' },
  body: { eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

### Plugins

Add [plugins](https://heyapi.dev/openapi-ts/plugins) for enhanced functionality:

\`\`\`bash
# With React Query
npx @hey-api/openapi-ts -i YOUR_SERVER/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins @tanstack/react-query

# With Zod validation
npx @hey-api/openapi-ts -i YOUR_SERVER/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins zod
\`\`\`

### Links

- [Documentation](https://heyapi.dev/)
- [@hey-api/openapi-ts on npm](https://www.npmjs.com/package/@hey-api/openapi-ts)

## Authentication

**Query Endpoints** (\`/balance\`, \`/signed-balance\`, \`/events\`): Public access, no authentication required. Requires \`campaign\` query parameter (slug or numeric ID).

**Push Endpoint** (\`/push\`): Requires API key in the \`X-API-Key\` header. API keys are scoped to a specific campaign.

\`\`\`
X-API-Key: sfp_<64 hex characters>
\`\`\`

## Rate Limits

- Push endpoint: Max 1000 events per request
- Query endpoints: Max 100 results per page

## Deduplication

Events can include a \`uniqueId\` field for deduplication. If an event with the same \`uniqueId\` already exists for the same account and campaign, it will be skipped.`,
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
				name: "Balance",
				description: "Query point balances for accounts",
			},
			{
				name: "Signed Balance",
				description: "Get signed point balances for on-chain verification",
			},
			{
				name: "Events",
				description: "Query historical point events",
			},
			{
				name: "Push",
				description: "Push new point events",
			},
		],
	})
}
