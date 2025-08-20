import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_SDK_DOCS_URL: process.env.NEXT_PUBLIC_SDK_DOCS_URL || "http://localhost:3001",
		NEXT_PUBLIC_MCP_DOCS_URL: process.env.NEXT_PUBLIC_MCP_DOCS_URL || "http://localhost:3002",
	},
}

export default nextConfig
