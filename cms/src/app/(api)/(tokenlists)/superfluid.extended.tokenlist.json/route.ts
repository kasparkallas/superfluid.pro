import { NextResponse } from "next/server"

/**
 * GET /superfluid.extended.tokenlist.json
 * Returns an extended tokenlist containing both mainnet and testnet listed tokens
 * This is a wrapper around the /tokenlist endpoint with specific filters
 */
export const GET = async (request: Request) => {
	try {
		// Get the base URL from the request
		const url = new URL(request.url)
		const baseUrl = `${url.protocol}//${url.host}`

		// Fetch from the internal tokenlist endpoint with filters:
		// - isListed=true: Only include listed tokens (both mainnet and testnet)
		const tokenlistUrl = new URL("/tokenlist", baseUrl)
		tokenlistUrl.searchParams.set("isListed", "true")

		const response = await fetch(tokenlistUrl.toString())

		if (!response.ok) {
			throw new Error(`Failed to fetch tokenlist: ${response.status} ${response.statusText}`)
		}

		const tokenlist = await response.json()

		// Return with caching headers (cache for 1 hour)
		return NextResponse.json(tokenlist, {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		})
	} catch (error) {
		console.error("Failed to fetch extended tokenlist:", error)

		return NextResponse.json(
			{
				error: "Failed to fetch tokenlist",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
