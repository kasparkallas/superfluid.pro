import { getPayloadInstance } from "@/payload";
import type { Token } from "@/payload-types";
import { fetchTokenPrice, type TokenPrice } from "@/utils/pricing";

interface TokenResponse {
	id: string;
	chainId: number;
	address: string;
	name: string;
	symbol: string;
	decimals: number;
	logoUri?: string | null;
	isListed?: boolean | null;
	coingeckoId?: string | null;
	tags?: ("streme" | "testnet" | "underlying" | "supertoken")[] | null;
	tokenType: "underlyingToken" | "pureSuperToken" | "nativeAssetSuperToken" | "wrapperSuperToken";
	underlyingAddress?: string | null;
	note?: string | null;
	pricing?: TokenPrice;
}

export async function GET(request: Request) {
	try {
		const url = new URL(request.url);
		const searchParams = url.searchParams;

		// Parse query parameters
		const isListed = searchParams.get("isListed");
		const tokenType = searchParams.get("tokenType");
		const tags = searchParams.get("tags");
		const includePricing = searchParams.get("includePricing") === "true";
		const sortBy = searchParams.get("sortBy") || "symbol";
		const sortOrder = searchParams.get("sortOrder") || "asc";
		const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 1000);
		const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);

		// Build where clause
		const where: any = {};

		if (isListed !== null) {
			where.isListed = { equals: isListed === "true" };
		}

		if (tokenType) {
			where.tokenType = { equals: tokenType };
		}

		if (tags) {
			where.tags = { contains: tags };
		}

		const payload = await getPayloadInstance();

		// Fetch tokens from CMS
		const {
			docs: tokens,
			totalDocs,
			totalPages,
		} = await payload.find({
			collection: "tokens",
			where,
			sort: `${sortOrder === "desc" ? "-" : ""}${sortBy}`,
			limit,
			page,
		});

		// Transform tokens to API format
		const transformedTokens: TokenResponse[] = await Promise.all(
			tokens.map(async (token: Token): Promise<TokenResponse> => {
				const baseToken: TokenResponse = {
					id: token.id,
					chainId: token.chainId,
					address: token.address,
					name: token.name,
					symbol: token.symbol,
					decimals: token.decimals,
					logoUri: token.logoUri,
					isListed: token.isListed,
					coingeckoId: token.coingeckoId,
					tags: token.tags,
					tokenType: token.tokenType,
					underlyingAddress: token.underlyingAddress,
					note: token.note,
				};

				// Add pricing if requested
				if (includePricing) {
					const pricing = await fetchTokenPrice(token);
					if (pricing) {
						baseToken.pricing = pricing;
					}
				}

				return baseToken;
			}),
		);

		return Response.json({
			tokens: transformedTokens,
			pagination: {
				page,
				totalPages,
				totalDocs,
				limit,
			},
		});
	} catch (error) {
		console.error("Error fetching tokens:", error);
		return Response.json(
			{
				error: "Failed to fetch tokens",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
