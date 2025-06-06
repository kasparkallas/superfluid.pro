# Superfluid MCP Server

A Model Context Protocol (MCP) server that provides AI assistants with access to Superfluid Protocol tools and data. This server enables Claude, Cursor, and other MCP-compatible AI clients to interact with Superfluid contracts, networks, tokens, and ecosystem resources.

## Features

- **7 MCP Tools** across 4 categories:
  - Contract ABIs (list contracts, get ABIs)
  - Network Metadata (list networks, get network data)
  - Token Information (get token details, search tokens)
  - Ecosystem Resources (find community resources)
- **Multiple Transports** - SSE and HTTP endpoints
- **Type-Safe** - Full TypeScript implementation
- **Production Ready** - Built with Next.js for easy deployment

## Quick Start

Install dependencies and start the server:

```bash
pnpm install
pnpm dev
```

The server will be available at:
- Main server: `https://mcp.superfluid.pro`
- SSE endpoint: `https://mcp.superfluid.pro/sse`
- HTTP stream endpoint: `https://mcp.superfluid.pro/message`

## MCP Client Setup

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "superfluid": {
      "command": "node",
      "args": ["path/to/scripts/test-client.mjs", "https://mcp.superfluid.pro/sse"]
    }
  }
}
```

### Continue.dev / Cursor

Configure in your MCP settings to use: `https://mcp.superfluid.pro/sse`

## Available Tools

1. `list-superfluid-contracts` - List all available contract names
2. `get-superfluid-contract-abi` - Get specific contract ABI
3. `list-superfluid-metadata-networks` - List all Superfluid networks
4. `get-superfluid-network-metadata` - Get network details by chain ID
5. `get-superfluid-token` - Get token details by address
6. `find-superfluid-tokens` - Search tokens by symbol/name
7. `find-ecosystem-resources` - Find community resources

## Project Structure

- `src/app/[transport]/route.ts` - MCP transport handlers
- `src/app/[transport]/(tools)/` - Individual tool implementations
- `src/types.ts` - TypeScript type definitions
- `scripts/test-client.mjs` - Test client for local development

## Deployment

Deploy to Vercel or any Next.js-compatible platform. The server is designed to work with Vercel's MCP adapter for production use.
