import { syncTokensFromTokenList } from "@/features/sync-tokens"
import { requireAdmin } from "@/utils/api-auth"

export const GET = async (_request: Request) => {
	// Require admin authentication
	const auth = await requireAdmin()
	if ("error" in auth) return auth.error

	try {
		await syncTokensFromTokenList()

		return Response.json({
			message: "Tokens synced successfully.",
			syncedBy: auth.user.email,
		})
	} catch (error) {
		console.error("Token sync failed:", error)

		return Response.json(
			{
				error: "Failed to sync tokens",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
