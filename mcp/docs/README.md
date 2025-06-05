# Superfluid MCP Documentation

Documentation site for the Superfluid Model Context Protocol (MCP) server. This site provides comprehensive guides for integrating Superfluid Protocol tools with AI assistants like Claude, Cursor, and other MCP-compatible clients.

## What's Included

- **Installation Guide** - Step-by-step setup instructions for local development and production
- **Tool Reference** - Complete documentation of all 7 available MCP tools
- **Client Configuration** - Examples for Claude Desktop, Continue.dev, Cursor, and other MCP clients
- **API Documentation** - Details on SSE and HTTP endpoints

## Available Tools

The MCP server provides 7 tools across 4 categories:

- **Contract ABIs** (2 tools) - Access to 18+ Superfluid contract ABIs
- **Network Metadata** (2 tools) - Network information and contract addresses
- **Token Information** (2 tools) - Super token details and search
- **Ecosystem Resources** (1 tool) - Community resources and documentation

## Development

Start the documentation development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

## Project Structure

- `content/docs/` - MDX documentation files
- `app/docs/` - Documentation layout and routing
- `app/(home)/` - Landing page
- `lib/source.ts` - Content source configuration
- `source.config.ts` - Fumadocs configuration

## Built With

- [Next.js](https://nextjs.org) - React framework
- [Fumadocs](https://fumadocs.dev) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com) - Styling

## Deployment

The documentation site can be deployed to Vercel or any Next.js-compatible hosting platform.
