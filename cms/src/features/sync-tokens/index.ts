import { payload } from "@/payload";
import type { Token } from "@/payload-types";

// # Types
export type TokenType = "underlyingToken" | "pureSuperToken" | "nativeAssetSuperToken" | "wrapperSuperToken";
export type TokenTag = NonNullable<Required<Token>["tags"]>[number];
export interface TokenTypeInfo {
	tokenType: TokenType;
	underlyingAddress?: string;
}

// # Helper Functions
export async function getAllExistingTokens(): Promise<Map<string, Token>> {
	// Load all existing tokens from payload using pagination
	const existingTokens: Token[] = [];
	let page = 1;
	const limit = 100;

	while (true) {
		const result = await payload.find({
			collection: "tokens",
			page,
			limit,
			where: {},
		});

		existingTokens.push(...result.docs);

		// If we got fewer docs than the limit, we've reached the end
		if (result.docs.length < limit) {
			break;
		}

		page++;
	}

	// Create a map for quick lookup by address and chainId
	const existingTokensMap = new Map();
	existingTokens.forEach((token) => {
		const key = `${token.address}-${token.chainId}`;
		existingTokensMap.set(key, token);
	});

	return existingTokensMap;
}

export function hasChanges(existingToken: Token, updateData: Partial<Token>): boolean {
	for (const [key, newValue] of Object.entries(updateData)) {
		const existingValue = existingToken[key as keyof Token];

		if (key === "tags") {
			// Special handling for tags array - now tags are strings, not objects
			const existingTags = (existingValue as Token["tags"]) || [];
			const newTags = (newValue as Token["tags"]) || [];

			// Check if there are any new tags that don't exist
			const hasNewTags = newTags.some((tag: string) => !existingTags.includes(tag as TokenTag));
			if (hasNewTags) return true;
		} else if (key === "underlyingAddress" || key === "coingeckoId") {
			// Handle undefined vs empty string for underlyingAddress and coingeckoId
			const existingVal = existingValue || "";
			const newVal = newValue || "";
			if (existingVal !== newVal) return true;
		} else {
			// Simple value comparison
			if (existingValue !== newValue) return true;
		}
	}

	return false;
}

export * from "./syncFromStreme";
// # Module Exports
export * from "./syncTokensFromDataApi";
export * from "./syncTokensFromTokenList";
