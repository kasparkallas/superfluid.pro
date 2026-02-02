import { OpenAPIRegistry, OpenApiGeneratorV31 } from "@asteasolutions/zod-to-openapi"
import {
	ApiErrorSchema,
	BalanceBatchBodySchema,
	BalanceBatchResponseSchema,
	BalancePostBodySchema,
	BalanceQuerySchema,
	EventBalanceQuerySchema,
	EventBalanceResponseSchema,
	EventsQuerySchema,
	PaginationSchema,
	PointBalanceSchema,
	PointBalancesResponseSchema,
	PointEventSchema,
	PointEventsResponseSchema,
	PushResponseSchema,
	SignedBalanceBatchBodySchema,
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
pointsRegistry.register("BalanceBatchResponse", BalanceBatchResponseSchema)
pointsRegistry.register("EventBalanceResponse", EventBalanceResponseSchema)
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
	summary: "Get point balance",
	description: "Retrieves point balance for a single Ethereum account.",
	tags: ["Balance"],
	request: {
		query: BalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Point balance retrieved successfully",
			content: {
				"application/json": {
					schema: PointBalanceSchema,
					example: {
						account: "0x1234567890abcdef1234567890abcdef12345678",
						points: 1500,
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaignId/account parameter or invalid address)",
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
// POST /points/balance
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/balance",
	summary: "Get point balances (bulk)",
	description: "Retrieves point balances for multiple Ethereum accounts (up to 100).",
	tags: ["Balance"],
	request: {
		body: {
			description: "Campaign ID and accounts to query",
			content: {
				"application/json": {
					schema: BalancePostBodySchema,
					example: {
						campaignId: 42,
						accounts: ["0x1234567890abcdef1234567890abcdef12345678", "0xabcdef1234567890abcdef1234567890abcdef12"],
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Point balances retrieved successfully",
			content: {
				"application/json": {
					schema: PointBalancesResponseSchema,
					example: {
						balances: [
							{ account: "0x1234567890abcdef1234567890abcdef12345678", points: 1500 },
							{ account: "0xabcdef1234567890abcdef1234567890abcdef12", points: 750 },
						],
					},
				},
			},
		},
		400: {
			description: "Invalid request (invalid campaignId, missing/empty accounts array, or invalid addresses)",
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
// POST /points/balance-batch
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/balance-batch",
	summary: "Get point balances for multiple campaigns",
	description: `Retrieves point balances for a single account across multiple campaigns (up to 50).

**Missing Campaign Handling:**
Missing campaigns return 0 points with a warning entry. The call never fails due to missing campaigns - only for validation errors.`,
	tags: ["Balance"],
	request: {
		body: {
			description: "Campaign IDs and account to query",
			content: {
				"application/json": {
					schema: BalanceBatchBodySchema,
					example: {
						campaignIds: [1, 2, 3],
						account: "0x1234567890abcdef1234567890abcdef12345678",
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Point balances retrieved successfully",
			content: {
				"application/json": {
					schema: BalanceBatchResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890abcdef12345678",
						campaignIds: [1, 2, 3],
						points: [100, 0, 300],
						warnings: [{ campaignId: 2, message: "Campaign not found" }],
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
// GET /points/event-balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/event-balance",
	summary: "Get aggregated points for an event type",
	description: `Retrieves the total points for a specific event type within a campaign.

**With account filter:** Returns the sum of points for that account and event type.

**Without account filter:** Returns the sum of points across all accounts for that event type.

This endpoint queries the raw point events and aggregates on-demand, unlike \`/balance\` which uses pre-aggregated balances.`,
	tags: ["Balance"],
	request: {
		query: EventBalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Event balance retrieved successfully",
			content: {
				"application/json": {
					schema: EventBalanceResponseSchema,
					examples: {
						withAccount: {
							summary: "With account filter",
							value: {
								eventName: "swap",
								account: "0x1234567890abcdef1234567890abcdef12345678",
								points: 150,
							},
						},
						withoutAccount: {
							summary: "Without account filter (all accounts)",
							value: {
								eventName: "swap",
								points: 5000,
							},
						},
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaignId/eventName or invalid address)",
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
						address: "0x1234567890abcdef1234567890abcdef12345678",
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
			description: "Invalid request (missing campaignId/account parameter or invalid address)",
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
// POST /points/signed-balance-batch
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/signed-balance-batch",
	summary: "Get batch signed point balances",
	description: `Returns a single signature covering multiple campaigns for the same account. Enables batch on-chain claims.

**Signature Structure:**
The message hash is computed as:
\`\`\`
keccak256(encodePacked([address, uint256[] points, uint256[] campaignIds, uint256 timestamp]))
\`\`\`

This produces a single signature that covers all campaigns, allowing batch verification on-chain.`,
	tags: ["Signed Balance"],
	request: {
		body: {
			description: "Campaign IDs and account to get signed balances for",
			content: {
				"application/json": {
					schema: SignedBalanceBatchBodySchema,
					example: {
						campaignIds: [1, 2, 3],
						account: "0x1234567890abcdef1234567890abcdef12345678",
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Batch signed balances retrieved successfully",
			content: {
				"application/json": {
					schema: SignedBalanceBatchResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890abcdef12345678",
						campaignIds: [1, 2, 3],
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
		"Retrieves point events with optional filtering by account, event name, and time range. Results are paginated and sorted by creation time (newest first).",
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
			description: "Invalid request (missing/invalid campaignId, invalid pagination, address, or timestamp format)",
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
						message: "Validation failed",
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

The Superfluid Points API enables you to build point-based reward campaigns. Track user actions, query balances, and generate signed proofs for on-chain verification.

## TypeScript Clients

Generate a type-safe TypeScript client from this OpenAPI specification. Choose between two approaches:

| Approach | Best For | Semver | Output |
|----------|----------|--------|--------|
| **openapi-fetch** | Simple integrations, stability | Yes | Types + fetch wrapper |
| **hey-api** | Full SDK, React Query, plugins | No | Complete SDK |

### openapi-fetch

A lightweight fetch wrapper with full TypeScript inference. Recommended for most integrations.

**Why choose this?**
- Follows [semver](https://semver.org/) - safe for production
- Minimal bundle size (~5kb)
- Uses native fetch - works everywhere
- Maintained by [openapi-ts](https://openapi-ts.dev/)

**Installation**

\`\`\`bash
npm install openapi-fetch
\`\`\`

**Generate Types**

\`\`\`bash
npx openapi-typescript https://cms.superfluid.pro/points/openapi.json -o ./points-api.d.ts
\`\`\`

**Usage**

\`\`\`typescript
import createClient from 'openapi-fetch';
import type { paths } from './points-api';

const client = createClient<paths>({ baseUrl: 'https://cms.superfluid.pro' });

// Query balance (public endpoint)
const { data, error } = await client.GET('/points/balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});

if (error) {
  console.error('Failed to fetch balance:', error);
} else {
  console.log('Points:', data.points);
}

// Query balances for multiple accounts (POST)
const { data: bulkData } = await client.POST('/points/balance', {
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Push events (requires API key)
const { data: pushResult } = await client.POST('/points/push', {
  headers: { 'X-API-Key': 'sfp_...' },
  body: { campaign: 42, eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

**Links**

- [Documentation](https://openapi-ts.dev/openapi-fetch/)
- [openapi-fetch on npm](https://www.npmjs.com/package/openapi-fetch)
- [openapi-typescript on npm](https://www.npmjs.com/package/openapi-typescript)

### hey-api

A full SDK generator with optional plugins for React Query, Zod validation, and more.

**Why choose this?**
- Generates complete SDK with typed functions
- Plugin ecosystem (React Query, Zod, etc.)
- No runtime dependency for basic usage
- Highly configurable

> **Warning:** hey-api does not follow semver. Pin exact versions in production (e.g., \`@hey-api/openapi-ts@0.61.2\`).

**Generate SDK**

No installation required - run directly with npx:

\`\`\`bash
npx @hey-api/openapi-ts \\
  -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client \\
  -c @hey-api/client-fetch
\`\`\`

**Usage**

\`\`\`typescript
import { getPointsBalance, postPointsBalance, postPointsPush } from './points-client';

// Query single balance
const { data, error } = await getPointsBalance({
  query: { campaignId: 42, account: '0x1234...' }
});

// Query multiple balances (bulk)
const { data: bulk } = await postPointsBalance({
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Push events
await postPointsPush({
  headers: { 'X-API-Key': 'sfp_...' },
  body: { campaign: 42, eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

**Plugins**

Add [plugins](https://heyapi.dev/openapi-ts/plugins) for enhanced functionality:

\`\`\`bash
# With React Query
npx @hey-api/openapi-ts -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins @tanstack/react-query

# With Zod validation
npx @hey-api/openapi-ts -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins zod
\`\`\`

**Links**

- [Documentation](https://heyapi.dev/)
- [@hey-api/openapi-ts on npm](https://www.npmjs.com/package/@hey-api/openapi-ts)

## API Basics

### Authentication

**Query Endpoints** (\`/balance\`, \`/signed-balance\`, \`/events\`): Public access, no authentication required. Use numeric \`campaignId\` as query parameter.

**Push Endpoint** (\`/push\`): Requires API key in the \`X-API-Key\` header. API keys are scoped to a specific campaign.

\`\`\`
X-API-Key: sfp_<64 hex characters>
\`\`\`

### Rate Limits

- Push endpoint: Max 1000 events per request
- Query endpoints: Max 100 results per page

### Deduplication

Events can include a \`uniqueId\` field for deduplication. If an event with the same \`uniqueId\` already exists for the same account and campaign, it will be skipped.

## Migrating from Stack

If you're migrating from [Stack.so](https://stack.so), here's how Superfluid Points API maps to Stack's SDK.

### Initialization

**Stack.so:**
\`\`\`typescript
import { StackClient } from '@stackso/js-core';
const stack = new StackClient({ apiKey: 'your-key', pointSystemId: 123 });
\`\`\`

**Superfluid (using openapi-fetch):**
\`\`\`typescript
import createClient from 'openapi-fetch';
import type { paths } from './points-api';

const client = createClient<paths>({ baseUrl: 'https://cms.superfluid.pro' });
// API key passed per-request for push operations
\`\`\`

### Tracking Events

**Stack.so:**
\`\`\`typescript
await stack.track('swap', {
  points: 100,
  account: '0x1234...',
  uniqueId: 'tx-0xabc'
});
\`\`\`

**Superfluid:**
\`\`\`typescript
await client.POST('/points/push', {
  headers: { 'X-API-Key': 'sfp_...' },
  body: {
    campaign: 42,  // recommended
    eventName: 'swap',
    account: '0x1234...',
    points: 100,
    uniqueId: 'tx-0xabc'
  }
});
\`\`\`

### Getting Points

**Stack.so:**
\`\`\`typescript
const points = await stack.getPoints('0x1234...');
// Multiple: await stack.getPoints(['0x1234...', '0x5678...'])
\`\`\`

**Superfluid:**
\`\`\`typescript
// Single account (GET)
const { data } = await client.GET('/points/balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});

// Multiple accounts (POST)
const { data: bulk } = await client.POST('/points/balance', {
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Multiple campaigns for single account (POST)
const { data: campaigns } = await client.POST('/points/balance-batch', {
  body: { campaignIds: [1, 2, 3], account: '0x1234...' }
});
// { address, campaignIds, points, warnings? }
\`\`\`

> **Note:** Stack.so only offered \`getSignedPointsBatch()\` for querying multiple campaigns (signed).
> The unsigned \`/points/balance-batch\` endpoint is a new capability.

### Signed Points (On-Chain Verification)

**Stack.so:**
\`\`\`typescript
const signed = await stack.getSignedPoints('0x1234...');
// { amount, signatureTimestamp, signature }

const batch = await stack.getSignedPointsBatch('0x1234...', [1, 2, 3]);
// { systemIds, points, signatureTimestamp, signature }
\`\`\`

**Superfluid:**
\`\`\`typescript
// Single campaign (GET)
const { data: signed } = await client.GET('/points/signed-balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});
// { address, points, signatureTimestamp, signature, signer }

// Multiple campaigns (POST)
const { data: batch } = await client.POST('/points/signed-balance-batch', {
  body: { campaignIds: [1, 2, 3], account: '0x1234...' }
});
// { address, campaignIds, points, signatureTimestamp, signature, signer }
\`\`\`

### Signature Compatibility

Both APIs use the same signature format for on-chain verification:
- **Single:** \`keccak256(encodePacked(address, points, campaignId, timestamp))\`
- **Batch:** \`keccak256(encodePacked(address, points[], campaigns[], timestamp))\`

Existing on-chain contracts that verify Stack signatures will work with Superfluid signatures.

### Key Differences

| Aspect | Stack.so | Superfluid |
|--------|----------|------------|
| Campaign binding | At SDK init (\`pointSystemId\`) | Query param (\`campaignId\`) + API key |
| Bulk queries | Arrays in SDK | POST endpoints with typed arrays |
| Response field | \`amount\` | \`points\` |
| Terminology | \`programId\`, \`systemIds\` | \`campaignId\`, \`campaignIds\` |
| Signer info | Not returned | Returns \`signer\` address |
| Multi-campaign query | Signed only (\`getSignedPointsBatch\`) | Both signed and unsigned endpoints |

## Changelog

### 2026-01-26

- **Error response format**: Changed from \`{ error: "..." }\` to \`{ message: "..." }\` to align with Next.js conventions. The \`message\` field is now the primary error field.`,
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
		"x-tagGroups": [
			{
				name: "Points API",
				tags: ["Balance", "Signed Balance", "Events", "Push"],
			},
		],
	})
}
