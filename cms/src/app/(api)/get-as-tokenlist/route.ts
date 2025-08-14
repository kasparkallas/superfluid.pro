import { payload } from "@/payload";
import { requireAdmin } from "@/utils/api-auth";

export const GET = async (_request: Request) => {
	// TODO: Decide if this should be public or admin-only
	// For now, requiring admin since the original implementation was incorrect
	// and was calling sync instead of exporting
	const auth = await requireAdmin();
	if ("error" in auth) return auth.error;

	try {
		// Get all tokens from the database
		const { docs: tokens } = await payload.find({
			collection: "tokens",
			limit: 10000, // Get all tokens
		});

		// Format as tokenlist
		const tokenList = {
			name: "Superfluid Token List",
			timestamp: new Date().toISOString(),
			version: {
				major: 1,
				minor: 0,
				patch: 0,
			},
			tokens: tokens.map((token) => ({
				chainId: token.chainId,
				address: token.address,
				name: token.name,
				symbol: token.symbol,
				decimals: token.decimals,
			})),
		};

		return Response.json(tokenList);
	} catch (error) {
		console.error("Failed to export tokenlist:", error);

		return Response.json(
			{
				error: "Failed to export tokenlist",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
};
