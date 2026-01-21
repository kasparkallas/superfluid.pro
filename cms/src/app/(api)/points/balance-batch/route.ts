import { isAddress } from "viem"
import { getPayloadInstance } from "@/payload"

const MAX_CAMPAIGNS = 50

/**
 * POST /points/balance-batch
 *
 * Body: { campaignIds: number[], account: string }
 *
 * Returns point balances for multiple campaigns for a single account.
 * Missing campaigns return 0 points with a warning entry.
 */
export const POST = async (request: Request): Promise<Response> => {
	try {
		const body = await request.json()
		const { campaignIds, account } = body

		// Validate campaignIds array
		if (!Array.isArray(campaignIds) || campaignIds.length === 0) {
			return Response.json({ error: "campaignIds must be a non-empty array" }, { status: 400 })
		}

		if (campaignIds.length > MAX_CAMPAIGNS) {
			return Response.json({ error: `Maximum ${MAX_CAMPAIGNS} campaigns allowed per request` }, { status: 400 })
		}

		// Validate all are positive integers
		const invalidIds: unknown[] = []
		const validIds: number[] = []

		for (const id of campaignIds) {
			if (typeof id !== "number" || !Number.isInteger(id) || id <= 0) {
				invalidIds.push(id)
			} else {
				validIds.push(id)
			}
		}

		if (invalidIds.length > 0) {
			return Response.json(
				{
					error: "Invalid campaign IDs (must be positive integers)",
					invalid: invalidIds,
				},
				{ status: 400 },
			)
		}

		// Validate account
		if (typeof account !== "string") {
			return Response.json({ error: "account must be a string" }, { status: 400 })
		}

		const accountLower = account.toLowerCase()
		if (!isAddress(accountLower)) {
			return Response.json({ error: "Invalid Ethereum address" }, { status: 400 })
		}

		// Fetch all campaigns
		const payload = await getPayloadInstance()

		const campaignResult = await payload.find({
			collection: "campaigns",
			where: { id: { in: validIds } },
			limit: MAX_CAMPAIGNS,
		})

		// Collect warnings for missing campaigns (instead of returning 404)
		const foundIds = new Set(campaignResult.docs.map((c) => c.id))
		const warnings: Array<{ campaignId: number; message: string }> = []
		for (const id of validIds) {
			if (!foundIds.has(id)) {
				warnings.push({ campaignId: id, message: "Campaign not found" })
			}
		}

		// Fetch balances for all campaigns
		// Construct balance IDs: campaignId:account
		const balanceIds = validIds.map((id) => `${id}:${accountLower}`)

		const balanceResult = await payload.find({
			collection: "point-balances",
			where: { id: { in: balanceIds } },
			limit: MAX_CAMPAIGNS,
		})

		// Create a map of campaignId -> points
		const balanceMap = new Map<number, number>()
		for (const balance of balanceResult.docs) {
			// Extract campaign ID from the balance ID (format: campaignId:account)
			const campaignId = typeof balance.campaign === "number" ? balance.campaign : balance.campaign?.id
			if (campaignId != null) {
				balanceMap.set(campaignId, balance.totalPoints)
			}
		}

		// Build points array in same order as requested campaigns
		// Missing campaigns get 0 points
		const pointsArray = validIds.map((id) => balanceMap.get(id) ?? 0)

		return Response.json({
			address: accountLower,
			campaignIds: validIds,
			points: pointsArray,
			...(warnings.length > 0 && { warnings }),
		})
	} catch (error) {
		console.error("Failed to get batch balance:", error)

		return Response.json(
			{
				error: "Failed to get batch balance",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
