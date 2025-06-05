# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Instructions

- Do not look at `generated.ts` files in the SDK package. The files are too big!
- NEVER create files unless they're absolutely necessary for achieving your goal.
- ALWAYS prefer editing an existing file to creating a new one.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

## Project Structure

This is a monorepo for Superfluid Pro suite of products using pnpm workspaces and Turbo. The repository contains:

- **sdk/** - The Superfluid SDK with TypeScript bindings
  - **sdk/package/** - Main SDK package with ABIs, hooks, and actions
  - **sdk/docs/** - SDK documentation (Fumadocs-based)
  - **sdk/examples/** - Example implementations (Hono, Next.js, Vite, Vue)
- **mcp/** - Model Context Protocol implementations
  - **mcp/server/** - MCP server implementation
  - **mcp/docs/** - MCP documentation (Fumadocs-based)
- **website/** - Main website (Next.js)

## Development Commands

### Root Level Commands
```bash
pnpm install          # Install dependencies
pnpm build           # Build all packages (uses Turbo)
pnpm format          # Format code with Biome
pnpm check           # Run Biome checks
```

### SDK Package Commands (in sdk/package/)
```bash
pnpm generate        # Generate all ABI/hook/action files from Wagmi
pnpm typecheck       # Type check without emitting
pnpm build          # Build the SDK package
pnpm test           # Run tests with Vitest
```

### Documentation Commands
```bash
# In sdk/docs/ or mcp/docs/
pnpm dev            # Start development server
pnpm build          # Build documentation
pnpm typecheck      # Type check
```

### MCP Server Commands (in mcp/server/)
```bash
pnpm dev            # Start development server
pnpm build          # Build server
pnpm start          # Start production server
pnpm lint           # Run Next.js linting
pnpm typecheck      # Type check
```

## Code Architecture

### SDK Package
The SDK uses Wagmi CLI to generate TypeScript bindings from Ethereum contracts:
- ABIs are stored in `abis/` directory
- Generated code is organized by type (abi, hook, action) and category (core, automation)
- Each export follows a modular structure for better tree-shaking
- Uses Vitest for testing

### Documentation Sites
Both documentation sites use Fumadocs with:
- Content in `content/docs/` directories
- MDX components and configurations
- Search functionality via API routes
- Tailwind CSS for styling

### Code Style
- Uses Biome for formatting and linting
- Tab indentation, 120 character line width
- Double quotes for JavaScript strings
- TypeScript strict mode enabled
- Organized imports enabled

### Important Files to Ignore
- All `generated.ts` files (too large)
- `node_modules/` directories
- `.next/` build directories
- `dist/` directories