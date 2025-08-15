import type { Token } from "@/payload-types";
import { createStorageProvider, getStorageConfig } from "./storage";

export interface TokenPrice {
	priceUsd: string | null;
	timestamp: string;
	method: "classic" | "onchain" | "none";
	coingeckoId?: string;
}

interface CoinGeckoMappings {
	mappings: Record<string, Record<string, string>>;
	metadata?: {
		chainIdToPlatformIds?: Record<string, string>;
	};
}

interface CoinGeckoSimplePriceResponse {
	[coinId: string]: {
		usd?: number;
	};
}

export async function fetchTokenPrice(token: Token): Promise<TokenPrice | null> {
	try {
		const storage = createStorageProvider(getStorageConfig());

		// Get CoinGecko mappings
		const mappingsData = await storage.get("coingecko-mappings/super-token-ids.json");
		if (!mappingsData) {
			return null;
		}

		const coingeckoMappings: CoinGeckoMappings = JSON.parse(mappingsData);
		const chainIdStr = token.chainId.toString();
		const tokenAddress = token.address.toLowerCase();

		// Look up CoinGecko ID for this token
		const coingeckoId = coingeckoMappings.mappings[chainIdStr]?.[tokenAddress];

		if (!coingeckoId) {
			return {
				priceUsd: null,
				timestamp: new Date().toISOString(),
				method: "none",
			};
		}

		// Fetch current price from CoinGecko
		const apiKey = process.env.COINGECKO_API_KEY;
		const baseUrl = apiKey ? "https://pro-api.coingecko.com/api/v3" : "https://api.coingecko.com/api/v3";

		const headers: HeadersInit = {
			accept: "application/json",
		};

		if (apiKey) {
			headers["x-cg-pro-api-key"] = apiKey;
		}

		const response = await fetch(`${baseUrl}/simple/price?ids=${coingeckoId}&vs_currencies=usd`, { headers });

		if (!response.ok) {
			throw new Error(`CoinGecko API error: ${response.status}`);
		}

		const priceData: CoinGeckoSimplePriceResponse = await response.json();
		const price = priceData[coingeckoId]?.usd;

		return {
			priceUsd: price ? price.toString() : null,
			timestamp: new Date().toISOString(),
			method: "classic",
			coingeckoId,
		};
	} catch (error) {
		console.error("Error fetching token price:", error);
		return {
			priceUsd: null,
			timestamp: new Date().toISOString(),
			method: "none",
		};
	}
}
