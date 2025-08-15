import { isAddress, zeroAddress } from "viem";
import type { FetchTokensWithStatisticsQuery } from "@/subgraph-protocol";
import { getBuiltGraphSDKWithUrl } from "@/subgraph-protocol";
import { createPrefixedLogger } from "../../logger";
import type { SuperTokenData } from "./types";

const logger = createPrefixedLogger("Token Fetcher");

type TokenStatistic = FetchTokensWithStatisticsQuery["tokenStatistics"][0];

const mapToSuperTokenData =
	(chainId: number, timestamp: string) =>
	(stat: TokenStatistic): SuperTokenData => {
		const isNativeAssetSuperToken = stat.token.isNativeAssetSuperToken;
		const underlyingAddress = stat.token.underlyingToken?.id || null;
		const isZeroAddress = !underlyingAddress || underlyingAddress === zeroAddress;

		// Classification logic:
		// - Native Asset Super Token: already provided from subgraph
		// - Pure Super Token: underlying address is zero AND not a Native Asset Super Token
		// - Wrapper Super Token: underlying address is not zero AND not a Native Asset Super Token
		const isPureSuperToken = !isNativeAssetSuperToken && isZeroAddress;
		const isWrapperSuperToken = !isNativeAssetSuperToken && !isZeroAddress;

		return {
			id: `${chainId}-${stat.token.id.toLowerCase()}`,
			address: stat.token.id,
			chainId,
			symbol: stat.token.symbol || "",
			name: stat.token.name || "",
			decimals: stat.token.decimals,
			isListed: stat.token.isListed,
			isNativeAssetSuperToken,
			isPureSuperToken,
			isWrapperSuperToken,
			underlyingAddress,
			totalNumberOfHolders: stat.totalNumberOfHolders,
			totalNumberOfActiveStreams: stat.totalNumberOfActiveStreams,
			totalNumberOfClosedStreams: stat.totalNumberOfClosedStreams,
			lastUpdated: timestamp,
		};
	};

const validateTokenAddress = (stat: TokenStatistic): boolean => {
	if (!isAddress(stat.token.id)) {
		logger.warn("Invalid address for token", { tokenId: stat.token.id });
		return false;
	}
	return true;
};

const fetchTokenPage = async (
	sdk: ReturnType<typeof getBuiltGraphSDKWithUrl>,
	lastId: string,
): Promise<TokenStatistic[]> => {
	const result = await sdk.FetchTokensWithStatistics({ id_gt: lastId });
	return result.tokenStatistics || [];
};

interface FetchAllTokensParams {
	chainId: number;
	endpoint: string;
}

type ProgressCallback = (fetched: number, chainName: string) => void;

// Main function with progress callback support
export const fetchAllTokensWithProgress = async ({
	chainId,
	endpoint,
	chainName,
	onProgress,
}: FetchAllTokensParams & {
	chainName: string;
	onProgress?: ProgressCallback;
}): Promise<SuperTokenData[]> => {
	const sdk = getBuiltGraphSDKWithUrl(endpoint); // Create SDK once per chain
	const runTimestamp = new Date().toISOString(); // Single timestamp for all tokens
	const tokens: SuperTokenData[] = [];
	let lastId = "";
	let hasMore = true;

	while (hasMore) {
		const tokenStats = await fetchTokenPage(sdk, lastId);

		if (tokenStats.length === 0) {
			hasMore = false;
			break;
		}

		// Filter valid addresses and map to SuperTokenData
		const validTokens = tokenStats.filter(validateTokenAddress).map(mapToSuperTokenData(chainId, runTimestamp));

		tokens.push(...validTokens);

		// Report progress if callback is provided
		onProgress?.(tokens.length, chainName);

		lastId = tokenStats[tokenStats.length - 1]?.id || "";

		// If we got less than 1000, we've reached the end
		if (tokenStats.length < 1000) {
			hasMore = false;
		}
	}

	return tokens;
};

// Simplified wrapper without progress reporting
export const fetchAllTokens = async (params: FetchAllTokensParams): Promise<SuperTokenData[]> => {
	return fetchAllTokensWithProgress({
		...params,
		chainName: `Chain ${params.chainId}`, // Provide a default name
		onProgress: undefined, // No progress reporting
	});
};
