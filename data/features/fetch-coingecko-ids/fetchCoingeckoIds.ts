import { zeroAddress } from "viem";
import { getCoinGeckoClient } from "../coingecko";
import type { AggregatedData } from "../fetch-super-tokens/core/types";
import { createPrefixedLogger } from "../logger";
import { createStorageProvider, getStorageConfig, type StorageProvider, type StorageType } from "../storage";

const logger = createPrefixedLogger("CoinGecko IDs");

type Address = `0x${string}`;
type ChainId = number;
type CoinId = string;
type PlatformId = string;

export const fetchCoingeckoIds = async (storageType: StorageType) => {
	const startTime = new Date();
	logger.info("Starting to fetch CoinGecko IDs for Super Tokens");

	const coingecko = getCoinGeckoClient();

	// Initialize storage
	const storageConfig = getStorageConfig(storageType);
	const storage: StorageProvider = createStorageProvider(storageConfig);
	logger.info("Using storage", {
		type: storageConfig.type,
		localPath: storageConfig.localPath,
	});

	// Fetch all super tokens from storage (created by fetchAndStoreSuperTokens)
	const allNetworksData = await storage.get("super-tokens/latest/all-networks.json");

	if (!allNetworksData) {
		throw new Error("No super token data found. Please run fetch-super-tokens first.");
	}

	const aggregatedData: AggregatedData = JSON.parse(allNetworksData);
	logger.info("Found tokens", {
		totalTokens: aggregatedData.totalTokens,
		chainCount: Object.keys(aggregatedData.chains).length,
	});

	const chainIds = [...new Set(aggregatedData.tokens.map((token) => token.chainId))];
	logger.info("Found chains", {
		chainCount: chainIds.length,
		chains: chainIds,
	});

	// Fetch asset platforms using the TypeScript client
	logger.info("Fetching asset platforms...");
	const assetPlatforms = await coingecko.assetPlatforms.get();
	logger.info("Asset platforms fetched", {
		assetPlatformCount: assetPlatforms.length,
	});

	const nativeAssetCoinIds: Record<ChainId, CoinId> = {};
	const chainIdToPlatformIds: Record<ChainId, PlatformId> = {};
	const platformIdToChainId: Record<PlatformId, ChainId> = {};

	// Map chain IDs to platform IDs and native coin IDs
	for (const chainId of chainIds) {
		const assetPlatform = assetPlatforms.find((platform) => platform.chain_identifier === chainId);

		if (!assetPlatform) {
			logger.warn("No asset platform found", { chainId });
			continue;
		}

		if (assetPlatform.native_coin_id) {
			nativeAssetCoinIds[chainId] = assetPlatform.native_coin_id;
		}
		if (assetPlatform.id) {
			chainIdToPlatformIds[chainId] = assetPlatform.id;
			platformIdToChainId[assetPlatform.id] = chainId;
		}
	}

	logger.info("Mapped platform data", {
		nativeAssetCoinIds: Object.keys(nativeAssetCoinIds).length,
		chainToPlatformMappings: Object.keys(chainIdToPlatformIds).length,
	});

	// Fetch coin list with platform information
	logger.info("Fetching coin list with platform data...");
	const coinList = await coingecko.coins.list.get({
		include_platform: true,
	});

	logger.info("Coin list fetched", {
		coinCount: coinList.length,
	});

	// Build token to coin ID mappings
	const tokenCoinIds: Record<ChainId, Record<Address, CoinId>> = {};
	for (const chainId of chainIds) {
		tokenCoinIds[chainId] = {};
	}

	let totalMappings = 0;
	for (const coin of coinList) {
		const coinPlatforms = coin.platforms ?? {};
		for (const [assetPlatformId, tokenAddress] of Object.entries(coinPlatforms)) {
			const chainId = platformIdToChainId[assetPlatformId];
			if (chainId && tokenAddress && coin.id) {
				if (!tokenCoinIds[chainId]) {
					tokenCoinIds[chainId] = {};
				}
				tokenCoinIds[chainId][tokenAddress.toLowerCase() as Address] = coin.id as CoinId;
				totalMappings++;
			}
		}
	}

	logger.info("Created token mappings", {
		totalMappings,
		coinsProcessed: coinList.length,
	});

	// Map super tokens to coin IDs
	const superTokenToCoinIds: Record<ChainId, Record<Address, CoinId>> = {};
	for (const chainId of chainIds) {
		superTokenToCoinIds[chainId] = {};
	}

	let mappedSuperTokens = 0;

	for (const token of aggregatedData.tokens) {
		const chainId = token.chainId;
		let coinIdFound = false;

		// Native asset super tokens
		if (token.isNativeAssetSuperToken) {
			const coinId = nativeAssetCoinIds[chainId];
			if (coinId && superTokenToCoinIds[chainId]) {
				superTokenToCoinIds[chainId][token.address.toLowerCase() as Address] = coinId;
				coinIdFound = true;
			}
		}
		// Wrapper super tokens (check if token has underlying address)
		else if (token.underlyingAddress && token.underlyingAddress !== zeroAddress) {
			const coinId = tokenCoinIds[chainId]?.[token.underlyingAddress.toLowerCase() as Address];
			if (coinId && superTokenToCoinIds[chainId]) {
				superTokenToCoinIds[chainId][token.address.toLowerCase() as Address] = coinId;
				coinIdFound = true;
			}
		}
		// Pure super tokens (underlying address is zero) - look for Super Token address in CoinGecko
		else {
			const directCoinId = tokenCoinIds[chainId]?.[token.address.toLowerCase() as Address];
			if (directCoinId && superTokenToCoinIds[chainId]) {
				superTokenToCoinIds[chainId][token.address.toLowerCase() as Address] = directCoinId;
				coinIdFound = true;
			}
		}

		if (coinIdFound) {
			mappedSuperTokens++;
		}
	}

	logger.info("Mapped super tokens", { mappedSuperTokens });

	// Prepare data for storage
	const resultData = {
		version: "1.0.0",
		timestamp: startTime.toISOString(),
		totalSuperTokens: aggregatedData.totalTokens,
		mappedSuperTokens,
		chainCount: chainIds.length,
		mappings: superTokenToCoinIds,
		metadata: {
			nativeAssetCoinIds,
			chainIdToPlatformIds,
		},
	};

	// Save to storage
	await storage.put("coingecko-mappings/super-token-ids.json", JSON.stringify(resultData, null, 2), {
		contentType: "application/json",
	});

	const duration = Date.now() - startTime.getTime();
	logger.info("Completed", {
		duration,
		mappedSuperTokens,
		totalSuperTokens: aggregatedData.totalTokens,
		successRate: `${((mappedSuperTokens / aggregatedData.totalTokens) * 100).toFixed(1)}%`,
	});

	return {
		success: true,
		duration,
		totalSuperTokens: aggregatedData.totalTokens,
		mappedSuperTokens,
		chainCount: chainIds.length,
	};
};
