import type { FetchTokensStatisticsQuery } from "@/subgraph-protocol"
import { getBuiltGraphSDKWithUrl } from "@/subgraph-protocol"

type TokenStatistic = FetchTokensStatisticsQuery["tokenStatistics"][0]

interface FetchTokenStatisticsParams {
	chainId: number
	endpoint: string
}

type ProgressCallback = (fetched: number, chainName: string) => void

const fetchTokenStatisticsPage = async (
	sdk: ReturnType<typeof getBuiltGraphSDKWithUrl>,
	lastId: string,
): Promise<TokenStatistic[]> => {
	const result = await sdk.FetchTokensStatistics({ id_gt: lastId })
	return result.tokenStatistics || []
}

// Main function with progress callback support
export const fetchAllTokenStatisticsWithProgress = async ({
	chainId,
	endpoint,
	chainName,
	onProgress,
}: FetchTokenStatisticsParams & {
	chainName: string
	onProgress?: ProgressCallback
}): Promise<TokenStatistic[]> => {
	const sdk = getBuiltGraphSDKWithUrl(endpoint)
	const statistics: TokenStatistic[] = []
	let lastId = ""
	let hasMore = true

	while (hasMore) {
		const tokenStats = await fetchTokenStatisticsPage(sdk, lastId)

		if (tokenStats.length === 0) {
			hasMore = false
			break
		}

		statistics.push(...tokenStats)

		// Report progress if callback is provided
		onProgress?.(statistics.length, chainName)

		lastId = tokenStats[tokenStats.length - 1]?.id || ""

		// If we got less than 1000, we've reached the end
		if (tokenStats.length < 1000) {
			hasMore = false
		}
	}

	return statistics
}

// Simplified wrapper without progress reporting
export const fetchAllTokenStatistics = async (params: FetchTokenStatisticsParams): Promise<TokenStatistic[]> => {
	return fetchAllTokenStatisticsWithProgress({
		...params,
		chainName: `Chain ${params.chainId}`,
		onProgress: undefined,
	})
}
