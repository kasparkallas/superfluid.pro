import { createPrefixedLogger } from "../../logger";
import type { StorageProvider } from "../../storage";
import type { SuperTokenData } from "./types";

const logger = createPrefixedLogger("Fallback");

interface NetworkData {
	version: string;
	timestamp: string;
	network: {
		chainId: number;
		name: string;
		endpoint: string;
	};
	totalTokens: number;
	tokens: SuperTokenData[];
}

interface FallbackResult {
	data: SuperTokenData[];
	isStale: boolean;
	age: number;
}

/**
 * Fetches previous network data from storage as a fallback
 */
export async function fetchPreviousNetworkData(networkName: string, storage: StorageProvider): Promise<FallbackResult> {
	try {
		const dataString = await storage.get(`super-tokens/latest/${networkName}.json`);

		if (!dataString) {
			return {
				data: [],
				isStale: false,
				age: 0,
			};
		}

		const parsed: NetworkData = JSON.parse(dataString);
		const lastUpdated = new Date(parsed.timestamp);
		const now = new Date();
		const ageMs = now.getTime() - lastUpdated.getTime();
		const ageHours = ageMs / (1000 * 60 * 60);

		// Consider data stale if older than 24 hours
		const isStale = ageHours > 24;

		return {
			data: parsed.tokens || [],
			isStale,
			age: ageMs,
		};
	} catch (error) {
		logger.warn("Failed to load previous data", { networkName, error: (error as Error).message });
		return {
			data: [],
			isStale: false,
			age: 0,
		};
	}
}

/**
 * Creates a network result with fallback data and error information
 */
export function createFallbackNetworkResult(
	chainId: number,
	name: string,
	endpoint: string,
	fallbackData: SuperTokenData[],
	error: Error,
) {
	const isFallbackEmpty = fallbackData.length === 0;

	if (isFallbackEmpty) {
		logger.error("Network failed with no fallback data", { chain: name, error: error.message });
		return {
			chainId,
			name,
			endpoint,
			tokens: [],
			isStale: false,
			isFailed: true,
		};
	} else {
		logger.warn("Network failed, using fallback data", {
			chain: name,
			tokenCount: fallbackData.length,
			error: error.message,
		});
		return {
			chainId,
			name,
			endpoint,
			tokens: fallbackData,
			isStale: true,
			isFailed: false,
		};
	}
}
