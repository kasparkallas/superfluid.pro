import type { createMcpHandler } from "@vercel/mcp-adapter";

export type McpServer = Parameters<Parameters<typeof createMcpHandler>[0]>[0];
