import { syncFromStreme } from "@/domains/tokens/features/sync-tokens"
import { requireAdmin } from "@/utils/api-auth"

export const GET = async (_request: Request): Promise<Response> => {
	// Require admin authentication
	const auth = await requireAdmin()
	if ("error" in auth) {
		return auth.error
	}

	try {
		await syncFromStreme()

		return Response.json({
			message: "Tokens synced successfully from Streme API.",
			syncedBy: auth.user.email,
		})
	} catch (error) {
		console.error("Streme token sync failed:", error)

		return Response.json(
			{
				error: "Failed to sync tokens from Streme API",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
