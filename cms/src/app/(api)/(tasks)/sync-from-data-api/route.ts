import { syncTokensFromDataApi } from "@/domains/tokens/features/sync-tokens"
import { requireAdmin } from "@/utils/api-auth"

export const GET = async (_request: Request): Promise<Response> => {
	// Require admin authentication
	const auth = await requireAdmin()
	if ("error" in auth) {
		return auth.error
	}

	try {
		await syncTokensFromDataApi()

		return Response.json({
			message: "Tokens synced successfully from data API.",
			syncedBy: auth.user.email,
		})
	} catch (error) {
		console.error("Data API token sync failed:", error)

		return Response.json(
			{
				error: "Failed to sync tokens from data API",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
