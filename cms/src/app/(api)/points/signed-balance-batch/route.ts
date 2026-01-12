import { encodePacked, getAddress, isAddress, keccak256 } from "viem"
import { signMessageHash } from "@/domains/points/utils/signing"
import { getPayloadInstance } from "@/payload"

const MAX_CAMPAIGNS = 50

/**
 * GET /points/signed-balance-batch?campaigns=1,2,3&account=0x...
 *
 * Returns a single signature covering multiple campaigns for the same account.
 * Enables batch on-chain claims.
 *
 * Signature message: keccak256(encodePacked([address, points[], campaigns[], timestamp]))
 */
export const GET = async (request: Request): Promise<Response> => {
	try {
		const url = new URL(request.url)

		// Get campaigns parameter (required)
		const campaignsParam = url.searchParams.get("campaigns")
		if (!campaignsParam) {
			return Response.json({ error: "Missing required query parameter: campaigns" }, { status: 400 })
		}

		// Parse campaign IDs
		const campaignIds = campaignsParam.split(",").map((id) => {
			const trimmed = id.trim()
			const parsed = parseInt(trimmed, 10)
			return { raw: trimmed, parsed }
		})

		// Validate all are valid numbers
		const invalidIds = campaignIds.filter((c) => isNaN(c.parsed))
		if (invalidIds.length > 0) {
			return Response.json(
				{
					error: "Invalid campaign IDs",
					invalid: invalidIds.map((c) => c.raw),
				},
				{ status: 400 },
			)
		}

		// Validate count
		if (campaignIds.length === 0) {
			return Response.json({ error: "At least one campaign ID is required" }, { status: 400 })
		}

		if (campaignIds.length > MAX_CAMPAIGNS) {
			return Response.json({ error: `Maximum ${MAX_CAMPAIGNS} campaigns allowed per request` }, { status: 400 })
		}

		// Get account parameter (required)
		const accountParam = url.searchParams.get("account")
		if (!accountParam) {
			return Response.json({ error: "Missing required query parameter: account" }, { status: 400 })
		}

		// Validate account address
		const accountLower = accountParam.toLowerCase()
		if (!isAddress(accountLower)) {
			return Response.json({ error: "Invalid Ethereum address" }, { status: 400 })
		}

		// Fetch all campaigns
		const payload = await getPayloadInstance()
		const numericIds = campaignIds.map((c) => c.parsed)

		const campaignResult = await payload.find({
			collection: "campaigns",
			where: { id: { in: numericIds } },
			limit: MAX_CAMPAIGNS,
		})

		// Check all campaigns exist
		const foundIds = new Set(campaignResult.docs.map((c) => c.id))
		const missingIds = numericIds.filter((id) => !foundIds.has(id))

		if (missingIds.length > 0) {
			return Response.json(
				{
					error: "One or more campaigns not found",
					missing: missingIds,
				},
				{ status: 404 },
			)
		}

		// Fetch balances for all campaigns
		// Construct balance IDs: campaignId:account
		const balanceIds = numericIds.map((id) => `${id}:${accountLower}`)

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
		const pointsArray = numericIds.map((id) => balanceMap.get(id) ?? 0)

		// Create message hash: keccak256(encodePacked([address, points[], campaigns[], timestamp]))
		const signatureTimestamp = Math.floor(Date.now() / 1000)
		const checksumAddress = getAddress(accountLower)
		const messageHash = keccak256(
			encodePacked(
				["address", "uint256[]", "uint256[]", "uint256"],
				[
					checksumAddress,
					pointsArray.map((p) => BigInt(p)),
					numericIds.map((id) => BigInt(id)),
					BigInt(signatureTimestamp),
				],
			),
		)

		// Sign the message hash
		const signingResult = await signMessageHash(messageHash)
		if (!signingResult) {
			console.error("SIGNER_PRIVATE_KEY is not configured")
			return Response.json({ error: "Signing not available" }, { status: 500 })
		}

		return Response.json({
			address: checksumAddress,
			campaigns: numericIds,
			points: pointsArray,
			signatureTimestamp,
			signature: signingResult.signature,
			signer: signingResult.signer,
		})
	} catch (error) {
		console.error("Failed to get batch signed balance:", error)

		return Response.json(
			{
				error: "Failed to get batch signed balance",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
