import { extendedSuperTokenList as tokenList } from "@superfluid-finance/tokenlist";
import { createPrefixedLogger } from "../logger";
import { createStorageProvider, getStorageConfig, type StorageProvider, type StorageType } from "../storage";
import { discoverChains } from "./core/chainDiscovery";
import { generateCSV } from "./core/csvExporter";
import { createFallbackNetworkResult, fetchPreviousNetworkData } from "./core/fallback";
import { enrichTokens } from "./core/tokenEnricher";
import { fetchAllTokensWithProgress } from "./core/tokenFetcher";
import type { AggregatedData } from "./core/types";

const logger = createPrefixedLogger("Super Tokens");

export const fetchAndStoreSuperTokens = async (storageType: StorageType) => {
	const startTime = new Date();
	const startTimestamp = startTime.getTime();

	// Initialize storage
	const storageConfig = getStorageConfig(storageType);
	const storage: StorageProvider = createStorageProvider(storageConfig);
	logger.info("Using storage", {
		type: storageConfig.type,
		localPath: storageConfig.localPath,
	});

	// Step 1: Discover all chains
	const chains = await discoverChains();
	logger.info("Found chains to process", { chainCount: chains.length });

	// Step 2: Fetch tokens from all chains in parallel with fallback
	const fetchPromises = chains.map(async (chain) => {
		try {
			const tokens = await fetchAllTokensWithProgress({
				chainId: chain.chainId,
				endpoint: chain.endpoint,
				chainName: chain.name,
				onProgress: (count, name) => logger.info("Token fetch progress", { chain: name, tokenCount: count }),
			});
			return { ...chain, tokens, isStale: false, isFailed: false };
		} catch (error) {
			// Try to fetch previous data as fallback
			const fallbackResult = await fetchPreviousNetworkData(chain.name, storage);
			return createFallbackNetworkResult(
				chain.chainId,
				chain.name,
				chain.endpoint,
				fallbackResult.data,
				error as Error,
			);
		}
	});

	const results = await Promise.all(fetchPromises);

	const allTokens = results.flatMap((result) => result.tokens);
	const chainStats: AggregatedData["chains"] = {};
	let staleChainsCount = 0;
	let failedChainsCount = 0;

	results.forEach((result) => {
		chainStats[result.chainId] = {
			name: result.name,
			tokenCount: result.tokens.length,
			endpoint: result.endpoint,
		};

		if (result.isStale) {
			staleChainsCount++;
			logger.warn("Using stale data", { chain: result.name, tokenCount: result.tokens.length });
		} else if (result.isFailed) {
			failedChainsCount++;
			logger.error("Failed to fetch chain, no fallback available", { chain: result.name });
		} else {
			logger.info("Completed chain fetch", { chain: result.name, tokenCount: result.tokens.length });
		}
	});

	// Step 3: Enrich tokens with token list data
	logger.info(`Token list loaded with ${tokenList.tokens.length} tokens`);
	const enrichedTokens = enrichTokens(tokenList)(allTokens);

	// Step 4: Create aggregated data
	const aggregatedData: AggregatedData = {
		version: "1.0.0",
		timestamp: startTime.toISOString(),
		totalTokens: enrichedTokens.length,
		chains: chainStats,
		tokens: enrichedTokens,
	};

	// Step 5: Generate CSV
	const csvContent = generateCSV(enrichedTokens);

	// Step 6: Save to Vercel Blob with new folder structure
	const dateStr = startTime.toISOString().split("T")[0];

	// Save per-network files (only for successfully fetched networks)
	for (const result of results) {
		// Skip saving if this network used stale data or failed
		if (result.isStale || result.isFailed) {
			continue;
		}

		const networkName = result.name;
		const networkTokens = result.tokens;

		// Create network-specific data structure
		const networkData = {
			version: "1.0.0",
			timestamp: startTime.toISOString(),
			network: {
				chainId: result.chainId,
				name: result.name,
				endpoint: result.endpoint,
			},
			totalTokens: networkTokens.length,
			tokens: enrichTokens(tokenList)(networkTokens),
		};

		// Generate network-specific CSV
		const networkCsv = generateCSV(networkData.tokens);

		// Save to date folder (CSV only)
		await storage.put(`super-tokens/${dateStr}/${networkName}.csv`, networkCsv, {
			contentType: "text/csv",
		});

		// Save to latest folder
		await storage.put(`super-tokens/latest/${networkName}.json`, JSON.stringify(networkData, null, 2), {
			contentType: "application/json",
		});

		await storage.put(`super-tokens/latest/${networkName}.csv`, networkCsv, {
			contentType: "text/csv",
		});
	}

	// Save aggregated files (only to latest folder)
	await storage.put("super-tokens/latest/all-networks.json", JSON.stringify(aggregatedData, null, 2), {
		contentType: "application/json",
	});

	await storage.put("super-tokens/latest/all-networks.csv", csvContent, {
		contentType: "text/csv",
	});

	const duration = Date.now() - startTimestamp;
	logger.info("Fetch completed", {
		duration,
		totalTokens: enrichedTokens.length,
		chains: Object.keys(chainStats).length,
	});

	if (staleChainsCount > 0) {
		logger.warn("Used stale data for some chains", { staleChainsCount });
	}

	if (failedChainsCount > 0) {
		logger.error("Failed to fetch some chains with no fallback", { failedChainsCount });
	}

	return {
		success: true,
		duration,
		totalTokens: enrichedTokens.length,
		chains: Object.keys(chainStats).length,
		staleChainsCount,
		failedChainsCount,
	};
};
