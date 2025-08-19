import { syncChains } from "@/features/sync-chains";
import { requireAdmin } from "@/utils/api-auth";

export const GET = async (_request: Request) => {
	// Require admin authentication
	const auth = await requireAdmin();
	if ("error" in auth) return auth.error;

	try {
		const results = await syncChains();

		const hasFailures = results.failed.length > 0;
		const status = hasFailures ? 207 : 200; // 207 Multi-Status for partial success

		return Response.json(
			{
				message: hasFailures
					? `Sync completed with ${results.failed.length} failures out of ${results.total} chains.`
					: "All chains synced successfully.",
				syncedBy: auth.user.email,
				results: {
					total: results.total,
					successful: results.successful.length,
					failed: results.failed.length,
					successfulChains: results.successful,
					failedChains: results.failed,
				},
			},
			{ status },
		);
	} catch (error) {
		console.error("Chain sync failed:", error);

		return Response.json(
			{
				error: "Failed to sync chains",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
};
