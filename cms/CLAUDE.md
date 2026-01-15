# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Superfluid CMS built with Payload CMS v3, using SQLite for data storage. The CMS manages Superfluid protocol data including blockchain networks (chains) and tokens, with synchronization features to import data from multiple external sources.

## Essential Commands

- `pnpm dev` - Start development server (uses NODE_OPTIONS=--no-deprecation)
- `pnpm build` - Build production version (with 8GB memory allocation)
- `pnpm devsafe` - Clean build and start dev server (removes .next folder first)
- `pnpm generate:types` - Generate Payload TypeScript types (run after collection changes)
- `pnpm generate:importmap` - Generate Payload import map
- `pnpm generate:openapi` - Generate OpenAPI specification for API documentation
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run all tests (integration + e2e)
- `pnpm test:int` - Run integration tests with Vitest
- `pnpm test:e2e` - Run Playwright e2e tests
- `pnpm payload` - Access Payload CLI commands
- `pnpm trigger:dev` - Run Trigger.dev development server
- `pnpm trigger:login` - Authenticate with Trigger.dev
- `pnpm trigger:deploy` - Deploy Trigger.dev tasks to production

## Core Architecture

### Payload CMS Configuration (`src/payload.config.ts`)
- **Database**: SQLite adapter with local file storage
- **Collections**: Users, Media, Tokens, Chains
- **Rich Text**: Lexical editor
- **TypeScript**: Auto-generated types in `src/payload-types.ts`
- **Authentication**: Uses Users collection for admin authentication

### Domain-Based Architecture

The CMS uses a domain-based folder structure for organizing features. Each domain is self-contained with its own types, collections, components, hooks, features, and scheduled tasks.

```
src/domains/tokens/
├── types.ts          # Shared types (TokenResponse, PayloadTokensApiResponse)
├── collections/      # Payload collections (Tokens, Chains)
├── components/       # React components (TokenCard, TokenTable, TokenFilters)
├── hooks/            # React hooks (useTokens, useTokenQueryParams)
├── features/         # Business logic (sync-tokens, sync-chains, calc-order)
└── trigger/          # Trigger.dev scheduled tasks
```

API routes remain in `src/app/(api)/` per Next.js App Router convention, but import types from the domain.

### Key Collections

**Chains Collection** (`src/domains/tokens/collections/Chains.ts`):
- Stores Superfluid network metadata (contract addresses, RPCs, subgraph endpoints)
- Uses comprehensive Zod validation for Ethereum addresses and URLs
- Organized with grouped fields for contracts (V1), subgraphs, and optional services
- Auto-transforms addresses to lowercase using hooks
- Fields include: contractsV1 (resolver, host, cfaV1, gdaV1, etc.), autowrap, subgraph endpoints
- Synced from `@superfluid-finance/metadata` package

**Tokens Collection** (`src/domains/tokens/collections/Tokens.ts`):
- Stores token data with auto-generated composite IDs (`chainId:address`)
- Token types: underlyingToken, pureSuperToken, nativeAssetSuperToken, wrapperSuperToken
- Validates chain IDs against known Superfluid networks
- Dynamic validation rules based on tokenType (e.g., wrapperSuperToken requires underlyingAddress)
- Tags system: streme, testnet, underlying, supertoken
- Synced from multiple sources: tokenlist, data API, Streme.fun

**Points Domain Collections** (`src/domains/points/collections/`):
- **Campaigns**: Multi-tenant point campaigns with name, description, and status
- **ApiKeys**: API authentication keys with `sfp_` prefix, scoped to campaigns
- **PointEvents**: Individual point award/deduct events with deduplication via uniqueId
- **PointBalances**: Aggregated per-account balances with composite ID `campaignId:account`
- **PushRequests**: Audit trail for API push requests with processing status

### Data Synchronization Architecture

**Chain Sync** (`src/domains/tokens/features/sync-chains/index.ts`):
- Imports all Superfluid networks from `@superfluid-finance/metadata`
- Transforms metadata structure to match collection schema
- Handles array transformations (publicRPCs → array of objects, trustedForwarders → array of objects)
- Implements upsert logic using chainId as unique identifier

**Token Sync** (`src/domains/tokens/features/sync-tokens/`):
- Three sync sources with dedicated modules:
  1. **Tokenlist** (`syncTokensFromTokenList.ts`): Official Superfluid tokenlist with extension info for token types
  2. **Data API** (`syncTokensFromDataApi.ts`): Superfluid data API with holder/stream statistics
  3. **Streme.fun** (`syncFromStreme.ts`): Community tokens with pagination support (all pure super tokens with 18 decimals)
- Maintains existing data while updating with new information
- Smart tag merging without duplicates
- `hasChanges()` function to avoid unnecessary database updates
- `getAllExistingTokens()` helper for efficient token retrieval

**Automated Sync via Trigger.dev** (`src/domains/tokens/trigger/`):
- **Chains**: Daily at 02:00 UTC - sync blockchain networks from Superfluid metadata
- **Tokenlist**: Daily at 02:30 UTC - sync official Superfluid tokenlist
- **Data API**: Daily at 03:00 UTC - sync from Superfluid data API with CoinGecko mappings
- **Streme**: Daily at 03:30 UTC - sync community tokens from Streme.fun
- All tasks configured with retry logic and error handling
- Manual triggers available via API endpoints or Trigger.dev dashboard

**Points Processing via Trigger.dev** (`src/domains/points/trigger/`):
- **Process Push Request**: Background task to process incoming point events with retries
- **Retry Stale Requests**: Every 15 min - retries push requests stuck for 15min-2hrs

### API Endpoints (`src/app/(api)/`)

**Data Sync Endpoints:**
- `/sync-chains` - Admin-only chain data synchronization
- `/sync-from-tokenlist` - Admin-only token sync from official tokenlist
- `/sync-from-data-api` - Admin-only token sync from Superfluid data API
- `/sync-from-streme` - Admin-only token sync from Streme.fun

**Token API Endpoints:**
- `GET /tokens` - List tokens with filtering and optional pricing
  - Query params: `isListed`, `tokenType`, `tags`, `includePricing`, `sortBy`, `sortOrder`, `limit`, `page`
  - Returns: Paginated token list with CMS data + optional pricing from Redis
- `GET /tokens/{chainId}/{address}` - Get single token with optional pricing
  - Query params: `includePricing=true` to include current price data
  - Returns: Single token with CMS data + optional pricing from Redis

**Token List Export:**
- `GET /get-as-tokenlist` - Public endpoint to export tokens in Uniswap Token List format
  - Returns: Standard token list with Superfluid extensions
  - Extension types: Pure, Native Asset, Wrapper (with underlyingTokenAddress)
  - Includes all token metadata: name, symbol, decimals, logoURI, tags
  - Compatible with @uniswap/token-lists standard v5.28.0

**API Documentation:**
- `GET /api-docs` - Interactive Swagger UI documentation
  - Browse and test all API endpoints
  - View request/response schemas
  - Try-it-out functionality
- `GET /openapi.json` - OpenAPI 3.1 specification
  - Machine-readable API documentation
  - Used by Swagger UI and API clients

**Points API Endpoints:**
- `POST /points/push` - Push point events (API key auth, 202 Accepted for async processing)
  - Supports single event or batch (up to 1000 events)
  - Automatic deduplication via uniqueId
- `GET /points/balance` - Query point balances
  - Query params: `account` (single) or `accounts` (up to 100, comma-separated)
- `GET /points/events` - Query point events with pagination
  - Query params: `account`, `eventName`, `page`, `limit`, `sort`, `order`
- `GET /points/api-docs` - Interactive Swagger UI for Points API
- `GET /points/openapi.json` - OpenAPI 3.1 specification

All sync endpoints use `requireAdmin()` authentication from `src/utils/api-auth.ts`

### Validation & Utilities

**Validation** (`src/utils/validation.ts`):
- Centralized Zod schemas: addressSchema, optionalAddressSchema, urlSchema, optionalUrlSchema
- `validateWithZod()` helper for Payload field validation
- `transformAddress()` for address normalization to lowercase

**Access Control** (`src/utils/AccessControl.ts`):
- Role-based access: publicRead, editorOrAdmin, tokenAccess
- Supports authentication for API endpoints

## Important Patterns

1. **Always run `pnpm generate:types` after modifying collections** - Updates TypeScript types for proper collection access
2. **Use existing validation schemas** - Import from `src/utils/validation.ts` instead of creating new ones
3. **Address normalization** - All Ethereum addresses stored as lowercase via hooks
4. **Sync error handling** - Individual record failures logged but don't stop entire sync process
5. **Incremental updates** - Sync functions check for changes before updating to minimize database writes
6. **Composite IDs** - Tokens use `chainId:address` pattern for unique identification
7. **Tag management** - Sync functions merge tags without creating duplicates
8. **API Key Authentication** - Points API uses `sfp_` prefixed API keys, validated via `validateApiKey()`
9. **Async Processing** - Push requests return 202 immediately, processing via Trigger.dev
10. **Deduplication** - PointEvents use `dedupKey` (`campaignId:account:uniqueId`) for idempotency

## Dependencies

- **Payload CMS**: v3.50.0 with SQLite adapter
- **Superfluid packages**: `@superfluid-finance/metadata` v1.6.0, `@superfluid-finance/tokenlist` v5.28.0
- **Validation**: Zod v4.0.15 + viem v2.33.3 for Ethereum address validation
- **Testing**: Vitest for integration, Playwright for e2e
- **Node.js**: Requires v18.20.2+ or v20.9.0+, uses pnpm v9+