import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/message",
				permanent: false,
			},
		]
	},
}

export default nextConfig
