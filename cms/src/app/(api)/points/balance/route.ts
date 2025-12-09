import { isAddress } from "viem"
import { validateApiKey } from "@/domains/points/features/api-key/validateApiKey"
import type { PointBalanceResponse, PointBalancesResponse } from "@/domains/points/types"
import { getPayloadInstance } from "@/payload"

/**
 * GET /points/balance?account=0x...
 * Query points for one or more accounts (comma-separated).
 *
 * Examples:
 * - /points/balance?account=0x1234...
 * - /points/balance?account=0x1234...,0x5678...
 */
export const GET = async (request: Request): Promise<Response> => {
	// Validate API key
	const auth = await validateApiKey()
	if ("error" in auth) {
		return auth.error
	}

	const { campaign } = auth.data

	try {
		const url = new URL(request.url)
		const accountParam = url.searchParams.get("account")

		if (!accountParam) {
			return Response.json({ error: "Missing required query parameter: account" }, { status: 400 })
		}

		// Split by comma and normalize
		const accounts = accountParam
			.split(",")
			.map((a) => a.trim().toLowerCase())
			.filter(Boolean)

		if (accounts.length === 0) {
			return Response.json({ error: "No valid accounts provided" }, { status: 400 })
		}

		// Validate all addresses
		const invalidAddresses = accounts.filter((a) => !isAddress(a))
		if (invalidAddresses.length > 0) {
			return Response.json(
				{
					error: "Invalid Ethereum addresses",
					invalid: invalidAddresses,
				},
				{ status: 400 },
			)
		}

		const payload = await getPayloadInstance()

		// Query balances for all accounts
		const result = await payload.find({
			collection: "point-balances",
			where: {
				and: [{ campaign: { equals: campaign.id } }, { account: { in: accounts } }],
			},
			limit: accounts.length,
		})

		// Build response mapping
		const balanceMap = new Map<string, number>()
		for (const doc of result.docs) {
			balanceMap.set(doc.account, doc.totalPoints)
		}

		// Single account response
		if (accounts.length === 1) {
			const account = accounts[0]
			const points = balanceMap.get(account) ?? 0
			const response: PointBalanceResponse = { account, points }
			return Response.json(response)
		}

		// Multiple accounts response
		const response: PointBalancesResponse = {
			balances: accounts.map((account) => ({
				account,
				points: balanceMap.get(account) ?? 0,
			})),
		}

		return Response.json(response)
	} catch (error) {
		console.error("Failed to query balances:", error)

		return Response.json(
			{
				error: "Failed to query balances",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
