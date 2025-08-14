import CoinGecko from "@coingecko/coingecko-typescript";

export const getCoinGeckoClient = () => {
	if (!process.env.COINGECKO_API_KEY) {
		throw new Error("COINGECKO_API_KEY environment variable is not set");
	}

	return new CoinGecko({
		proAPIKey: process.env.COINGECKO_API_KEY,
		timeout: 10000, // 10 second timeout
		maxRetries: 2,
	});
};
