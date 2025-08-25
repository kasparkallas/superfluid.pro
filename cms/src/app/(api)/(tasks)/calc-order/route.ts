import { calculateAndUpdateTokenOrders } from "@/features/calc-order"
import { requireAdmin } from "@/utils/api-auth"

export const GET = async (_request: Request): Promise<Response> => {
	// Require admin authentication
	const auth = await requireAdmin()
	if ("error" in auth) {
		return auth.error
	}

	try {
		const results = await calculateAndUpdateTokenOrders()

		const hasFailures = results.failed > 0
		const status = hasFailures ? 207 : 200 // 207 Multi-Status for partial success

		return Response.json(
			{
				message: hasFailures
					? `Order calculation completed with ${results.failed} failures out of ${results.processed} processed tokens.`
					: "All token orders calculated successfully.",
				syncedBy: auth.user.email,
				results: {
					total: results.total,
					processed: results.processed,
					updated: results.updated,
					failed: results.failed,
					skipped: results.skipped,
					updatedTokens: results.updatedTokens,
					failedTokens: results.failedTokens,
				},
			},
			{ status },
		)
	} catch (error) {
		console.error("Order calculation failed:", error)

		return Response.json(
			{
				error: "Failed to calculate token orders",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
