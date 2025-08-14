import type { TokenInfo as OriginalTokenInfo, Tags, TokenList, Version } from "@uniswap/token-lists";
import { payload } from "@/payload";
import type { Token } from "@/payload-types";

// SuperToken extension types
export type SuperTokenExtensions = {
	readonly extensions: {
		readonly superTokenInfo:
			| {
					readonly type: "Pure" | "Native Asset";
			  }
			| {
					readonly type: "Wrapper";
					readonly underlyingTokenAddress: `0x${string}`;
			  };
	};
};

export interface TokenInfo extends Omit<OriginalTokenInfo, "address"> {
	readonly address: `0x${string}`;
}

export type SuperTokenInfo = TokenInfo & SuperTokenExtensions;
type UnderlyingTokenInfo = TokenInfo;

export type SuperTokenList = Omit<TokenList, "tokens"> & {
	readonly tokens: (SuperTokenInfo | UnderlyingTokenInfo)[];
};

// Helper function to map CMS token to TokenList format
function mapTokenToTokenListFormat(token: Token): SuperTokenInfo | UnderlyingTokenInfo {
	const baseToken: TokenInfo = {
		chainId: token.chainId,
		address: token.address as `0x${string}`,
		name: token.name,
		symbol: token.symbol,
		decimals: token.decimals,
		...(token.logoUri && { logoURI: token.logoUri }),
		...(token.tags && token.tags.length > 0 && { tags: token.tags }),
	};

	// Map token types to extensions
	switch (token.tokenType) {
		case "pureSuperToken":
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Pure",
					},
				},
			} as SuperTokenInfo;

		case "nativeAssetSuperToken":
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Native Asset",
					},
				},
			} as SuperTokenInfo;

		case "wrapperSuperToken":
			if (!token.underlyingAddress) {
				// Fallback to Pure type if no underlying address (shouldn't happen based on validation)
				return {
					...baseToken,
					extensions: {
						superTokenInfo: {
							type: "Pure",
						},
					},
				} as SuperTokenInfo;
			}
			return {
				...baseToken,
				extensions: {
					superTokenInfo: {
						type: "Wrapper",
						underlyingTokenAddress: token.underlyingAddress as `0x${string}`,
					},
				},
			} as SuperTokenInfo;

		case "underlyingToken":
		default:
			// Regular token without extensions
			return baseToken;
	}
}

export const GET = async (_request: Request) => {
	try {
		// Get all tokens from the database (public endpoint)
		const { docs: tokens } = await payload.find({
			collection: "tokens",
			limit: 10000, // Get all tokens
			where: {
				// Optionally filter to only listed tokens
				// isListed: { equals: true }
			},
			sort: "chainId,symbol", // Sort by chainId then symbol for consistent ordering
		});

		// Format as tokenlist with proper types
		const tokenList: SuperTokenList = {
			name: "Superfluid Token List",
			timestamp: new Date().toISOString(),
			version: {
				major: 5, // Match the version from @superfluid-finance/tokenlist
				minor: 28,
				patch: 0,
			},
			tokens: tokens.map(mapTokenToTokenListFormat),
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
