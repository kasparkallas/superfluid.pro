import { isAddress } from "viem"
import type { PointBalanceResponse, PointBalancesResponse } from "@/domains/points/types"
import { getPayloadInstance } from "@/payload"

/**
 * GET /points/balance?campaignId=42&account=0x...
 * Query points for a single account.
 */
export const GET = async (request: Request): Promise<Response> => {
	try {
		const url = new URL(request.url)

		// Get campaignId parameter (required, must be numeric)
		const campaignIdParam = url.searchParams.get("campaignId")
		if (!campaignIdParam) {
			return Response.json({ message: "Missing required query parameter: campaignId" }, { status: 400 })
		}

		const campaignId = parseInt(campaignIdParam, 10)
		if (isNaN(campaignId) || campaignId <= 0) {
			return Response.json({ message: "campaignId must be a positive integer" }, { status: 400 })
		}

		// Get account parameter (required, single address)
		const accountParam = url.searchParams.get("account")
		if (!accountParam) {
			return Response.json({ message: "Missing required query parameter: account" }, { status: 400 })
		}

		const account = accountParam.toLowerCase()
		if (!isAddress(account)) {
			return Response.json({ message: "Invalid Ethereum address" }, { status: 400 })
		}

		// Verify campaign exists
		const payload = await getPayloadInstance()
		const campaignResult = await payload.find({
			collection: "campaigns",
			where: { id: { equals: campaignId } },
			limit: 1,
		})

		if (campaignResult.docs.length === 0) {
			return Response.json({ message: "Campaign not found" }, { status: 404 })
		}

		// Query balance
		const result = await payload.find({
			collection: "point-balances",
			where: {
				and: [{ campaign: { equals: campaignId } }, { account: { equals: account } }],
			},
			limit: 1,
		})

		const points = result.docs[0]?.totalPoints ?? 0
		const response: PointBalanceResponse = { account, points }

		return Response.json(response)
	} catch (error) {
		console.error("Failed to query balance:", error)

		return Response.json(
			{
				message: error instanceof Error ? error.message : "Failed to query balance",
			},
			{ status: 500 },
		)
	}
}

/**
 * POST /points/balance
 * Query points for multiple accounts.
 *
 * Body: { campaignId: number, accounts: string[] }
 */
export const POST = async (request: Request): Promise<Response> => {
	try {
		const body = await request.json()

		// Validate campaignId
		const { campaignId, accounts } = body

		if (typeof campaignId !== "number" || !Number.isInteger(campaignId) || campaignId <= 0) {
			return Response.json({ message: "campaignId must be a positive integer" }, { status: 400 })
		}

		// Validate accounts array
		if (!Array.isArray(accounts) || accounts.length === 0) {
			return Response.json({ message: "accounts must be a non-empty array" }, { status: 400 })
		}

		if (accounts.length > 100) {
			return Response.json({ message: "Maximum 100 accounts per request" }, { status: 400 })
		}

		// Normalize and validate addresses
		const normalizedAccounts: string[] = []
		const invalidAddresses: string[] = []

		for (const account of accounts) {
			if (typeof account !== "string") {
				invalidAddresses.push(String(account))
				continue
			}
			const normalized = account.toLowerCase()
			if (!isAddress(normalized)) {
				invalidAddresses.push(account)
			} else {
				normalizedAccounts.push(normalized)
			}
		}

		if (invalidAddresses.length > 0) {
			return Response.json(
				{
					message: "Invalid Ethereum addresses",
					invalid: invalidAddresses,
				},
				{ status: 400 },
			)
		}

		// Verify campaign exists
		const payload = await getPayloadInstance()
		const campaignResult = await payload.find({
			collection: "campaigns",
			where: { id: { equals: campaignId } },
			limit: 1,
		})

		if (campaignResult.docs.length === 0) {
			return Response.json({ message: "Campaign not found" }, { status: 404 })
		}

		// Query balances for all accounts
		const result = await payload.find({
			collection: "point-balances",
			where: {
				and: [{ campaign: { equals: campaignId } }, { account: { in: normalizedAccounts } }],
			},
			limit: normalizedAccounts.length,
		})

		// Build response mapping
		const balanceMap = new Map<string, number>()
		for (const doc of result.docs) {
			balanceMap.set(doc.account, doc.totalPoints)
		}

		const response: PointBalancesResponse = {
			balances: normalizedAccounts.map((account) => ({
				account,
				points: balanceMap.get(account) ?? 0,
			})),
		}

		return Response.json(response)
	} catch (error) {
		console.error("Failed to query balances:", error)

		return Response.json(
			{
				message: error instanceof Error ? error.message : "Failed to query balances",
			},
			{ status: 500 },
		)
	}
}
