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

export const GET = async (request: Request) => {
	try {
		const url = new URL(request.url);
		const searchParams = url.searchParams;

		// Parse query parameters for filtering
		const isListed = searchParams.get("isListed");
		const tokenType = searchParams.get("tokenType");
		const tags = searchParams.get("tags");
		const excludeTags = searchParams.get("excludeTags");
		const chainId = searchParams.get("chainId");

		// Build where clause - when no filters are specified, include all tokens
		const where: any = {};

		if (isListed !== null) {
			where.isListed = { equals: isListed === "true" };
		}

		if (tokenType) {
			where.tokenType = { equals: tokenType };
		}

		if (tags) {
			// Support comma-separated tags
			const tagList = tags.split(",").filter(Boolean);
			if (tagList.length > 0) {
				where.tags = { contains: tagList[0] }; // Payload doesn't support multiple contains in one query
			}
		}

		if (excludeTags) {
			// Support comma-separated tags to exclude
			const excludeTagList = excludeTags.split(",").filter(Boolean);
			if (excludeTagList.length > 0) {
				// Use not_contains to exclude tokens with specific tags
				where.tags = { ...where.tags, not_contains: excludeTagList[0] };
			}
		}

		if (chainId) {
			// Support comma-separated chain IDs
			const chainIds = chainId.split(",").map(Number).filter(Number.isInteger);
			if (chainIds.length === 1) {
				where.chainId = { equals: chainIds[0] };
			} else if (chainIds.length > 1) {
				where.chainId = { in: chainIds };
			}
		}

		// Note: Empty where object returns all tokens, which is the desired behavior

		// Get tokens from the database with filtering (public endpoint)
		const { docs: tokens } = await payload.find({
			collection: "tokens",
			limit: 10000, // Get all matching tokens
			where,
			sort: "chainId,symbol", // Sort by chainId then symbol for consistent ordering
		});

		// Collect underlying token addresses from wrapper super tokens
		const underlyingAddresses = new Set<string>();
		for (const token of tokens) {
			if (token.tokenType === "wrapperSuperToken" && token.underlyingAddress) {
				// Create composite ID for underlying token (chainId:address)
				underlyingAddresses.add(`${token.chainId}:${token.underlyingAddress.toLowerCase()}`);
			}
		}

		// Query for underlying tokens if any wrapper super tokens exist
		let underlyingTokens: Token[] = [];
		if (underlyingAddresses.size > 0) {
			const { docs: foundUnderlyingTokens } = await payload.find({
				collection: "tokens",
				limit: 1000,
				where: {
					id: { in: Array.from(underlyingAddresses) },
				},
			});
			underlyingTokens = foundUnderlyingTokens;
		}

		// Combine all tokens
		const allTokens = [...tokens, ...underlyingTokens];

		// Find the most recent update timestamp from all tokens
		let latestUpdate = new Date().toISOString();
		if (allTokens.length > 0) {
			const timestamps = allTokens
				.map((token) => token.updatedAt)
				.filter(Boolean)
				.map((ts) => new Date(ts).getTime());

			if (timestamps.length > 0) {
				const maxTimestamp = Math.max(...timestamps);
				latestUpdate = new Date(maxTimestamp).toISOString();
			}
		}

		// Format as tokenlist with proper types
		const tokenList: SuperTokenList = {
			name: "Superfluid Token List",
			timestamp: latestUpdate,
			version: {
				major: 1,
				minor: 0,
				patch: 0,
			},
			tokens: allTokens.map(mapTokenToTokenListFormat),
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
