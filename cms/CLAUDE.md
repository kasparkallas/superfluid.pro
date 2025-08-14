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
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run all tests (integration + e2e)
- `pnpm test:int` - Run integration tests with Vitest
- `pnpm test:e2e` - Run Playwright e2e tests
- `pnpm payload` - Access Payload CLI commands

## Core Architecture

### Payload CMS Configuration (`src/payload.config.ts`)
- **Database**: SQLite adapter with local file storage
- **Collections**: Users, Media, Tokens, Chains
- **Rich Text**: Lexical editor
- **TypeScript**: Auto-generated types in `src/payload-types.ts`
- **Authentication**: Uses Users collection for admin authentication

### Key Collections

**Chains Collection** (`src/collections/Chain.ts`):
- Stores Superfluid network metadata (contract addresses, RPCs, subgraph endpoints)
- Uses comprehensive Zod validation for Ethereum addresses and URLs
- Organized with grouped fields for contracts (V1), subgraphs, and optional services
- Auto-transforms addresses to lowercase using hooks
- Fields include: contractsV1 (resolver, host, cfaV1, gdaV1, etc.), autowrap, subgraph endpoints
- Synced from `@superfluid-finance/metadata` package

**Tokens Collection** (`src/collections/Tokens.ts`):
- Stores token data with auto-generated composite IDs (`chainId:address`)
- Token types: underlyingToken, pureSuperToken, nativeAssetSuperToken, wrapperSuperToken
- Validates chain IDs against known Superfluid networks
- Dynamic validation rules based on tokenType (e.g., wrapperSuperToken requires underlyingAddress)
- Tags system: streme, testnet, underlying, supertoken
- Synced from multiple sources: tokenlist, data API, Streme.fun

### Data Synchronization Architecture

**Chain Sync** (`src/features/sync-chains/index.ts`):
- Imports all Superfluid networks from `@superfluid-finance/metadata`
- Transforms metadata structure to match collection schema
- Handles array transformations (publicRPCs → array of objects, trustedForwarders → array of objects)
- Implements upsert logic using chainId as unique identifier

**Token Sync** (`src/features/sync-tokens/`):
- Three sync sources with dedicated modules:
  1. **Tokenlist** (`syncTokensFromTokenList.ts`): Official Superfluid tokenlist with extension info for token types
  2. **Data API** (`syncTokensFromDataApi.ts`): Superfluid data API with holder/stream statistics
  3. **Streme.fun** (`syncFromStreme.ts`): Community tokens with pagination support (all pure super tokens with 18 decimals)
- Maintains existing data while updating with new information
- Smart tag merging without duplicates
- `hasChanges()` function to avoid unnecessary database updates
- `getAllExistingTokens()` helper for efficient token retrieval

### API Endpoints (`src/app/(api)/`)
- `/sync-chains` - Admin-only chain data synchronization
- `/sync-from-tokenlist` - Admin-only token sync from official tokenlist
- `/sync-from-data-api` - Admin-only token sync from Superfluid data API
- `/sync-from-streme` - Admin-only token sync from Streme.fun
- `/get-as-tokenlist` - Public endpoint to export tokens in standard tokenlist format
- All sync endpoints use `requireAdmin()` authentication from `src/utils/api-auth.ts`

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

## Dependencies

- **Payload CMS**: v3.50.0 with SQLite adapter
- **Superfluid packages**: `@superfluid-finance/metadata` v1.6.0, `@superfluid-finance/tokenlist` v5.28.0
- **Validation**: Zod v4.0.15 + viem v2.33.3 for Ethereum address validation
- **Testing**: Vitest for integration, Playwright for e2e
- **Node.js**: Requires v18.20.2+ or v20.9.0+, uses pnpm v9+