import { encodePacked, getAddress, isAddress, keccak256 } from "viem"
import { signMessageHash } from "@/domains/points/utils/signing"
import { getPayloadInstance } from "@/payload"

/**
 * GET /points/signed-balance?campaignId=42&account=0x...
 *
 * Returns a signed point balance for on-chain verification.
 * The signature follows the same format as Stack's getSignedPoints API.
 *
 * Signature message: keccak256(encodePacked([address, points, campaignId, timestamp]))
 */
export const GET = async (request: Request): Promise<Response> => {
	try {
		const url = new URL(request.url)

		// Get campaignId parameter (required, must be numeric)
		const campaignIdParam = url.searchParams.get("campaignId")
		if (!campaignIdParam) {
			return Response.json({ error: "Missing required query parameter: campaignId" }, { status: 400 })
		}

		const campaignId = parseInt(campaignIdParam, 10)
		if (isNaN(campaignId) || campaignId <= 0) {
			return Response.json({ error: "campaignId must be a positive integer" }, { status: 400 })
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

		// Verify campaign exists
		const payload = await getPayloadInstance()
		const campaignResult = await payload.find({
			collection: "campaigns",
			where: { id: { equals: campaignId } },
			limit: 1,
		})

		if (campaignResult.docs.length === 0) {
			return Response.json({ error: "Campaign not found" }, { status: 404 })
		}

		const campaign = campaignResult.docs[0]

		// Fetch balance
		const balanceId = `${campaign.id}:${accountLower}`
		let points = 0

		try {
			const balance = await payload.findByID({
				collection: "point-balances",
				id: balanceId,
			})
			points = balance.totalPoints
		} catch {
			// Balance doesn't exist, default to 0
		}

		// Create message hash: keccak256(encodePacked([address, points, campaignId, timestamp]))
		const signatureTimestamp = Math.floor(Date.now() / 1000)
		const checksumAddress = getAddress(accountLower)
		const messageHash = keccak256(
			encodePacked(
				["address", "uint256", "uint256", "uint256"],
				[checksumAddress, BigInt(points), BigInt(campaign.id), BigInt(signatureTimestamp)],
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
			points,
			signatureTimestamp,
			signature: signingResult.signature,
			signer: signingResult.signer,
		})
	} catch (error) {
		console.error("Failed to get signed balance:", error)

		return Response.json(
			{
				error: "Failed to get signed balance",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
