import Papa from "papaparse"
import type { SuperTokenData } from "./types"

export const generateCSV = (tokens: SuperTokenData[]): string => {
	const data = tokens.map((token) => ({
		id: token.id,
		address: token.address,
		chainId: token.chainId,
		symbol: token.symbol,
		name: token.name,
		decimals: token.decimals,
		isListed: token.isListed,
		isNativeAssetSuperToken: token.isNativeAssetSuperToken,
		isPureSuperToken: token.isPureSuperToken,
		isWrapperSuperToken: token.isWrapperSuperToken,
		underlyingAddress: token.underlyingAddress || "",
		totalNumberOfHolders: token.totalNumberOfHolders,
		totalNumberOfActiveStreams: token.totalNumberOfActiveStreams,
		totalNumberOfClosedStreams: token.totalNumberOfClosedStreams,
		lastUpdated: token.lastUpdated,
	}))

	return Papa.unparse(data, {
		header: true,
		quotes: true,
		quoteChar: '"',
		escapeChar: '"',
		delimiter: ",",
		newline: "\n",
	})
}
