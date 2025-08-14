import { payload } from "@/payload";
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

export async function GET(request: Request, context: { params: Promise<{ chainId: string; address: string }> }) {
	try {
		const params = await context.params;
		const { chainId, address } = params;
		const url = new URL(request.url);
		const includePricing = url.searchParams.get("includePricing") === "true";

		// Parse chainId
		const chainIdNum = parseInt(chainId);
		if (isNaN(chainIdNum)) {
			return Response.json({ error: "Invalid chainId", message: "chainId must be a number" }, { status: 400 });
		}

		// Validate address format (basic check)
		if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
			return Response.json(
				{ error: "Invalid address", message: "Address must be a valid Ethereum address" },
				{ status: 400 },
			);
		}

		// Create composite ID (chainId:address)
		const tokenId = `${chainIdNum}:${address.toLowerCase()}`;

		// Fetch token from CMS
		const token = await payload.findByID({
			collection: "tokens",
			id: tokenId,
		});

		if (!token) {
			return Response.json(
				{ error: "Token not found", message: `Token ${address} not found on chain ${chainIdNum}` },
				{ status: 404 },
			);
		}

		// Transform token to API format
		const transformedToken: TokenResponse = {
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
			const pricing = await fetchTokenPrice(token as Token);
			if (pricing) {
				transformedToken.pricing = pricing;
			}
		}

		return Response.json(transformedToken);
	} catch (error) {
		console.error("Error fetching token:", error);
		return Response.json(
			{
				error: "Failed to fetch token",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
