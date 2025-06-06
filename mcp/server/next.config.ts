import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/mcp",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
