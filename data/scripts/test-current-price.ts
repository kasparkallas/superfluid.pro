#!/usr/bin/env tsx

import { fetchCurrentPrice } from "../features/fetch-current-price"
import type { AggregatedData } from "../features/fetch-super-tokens/core/types"
import { createPrefixedLogger } from "../features/logger"
import { createStorageProvider, getStorageConfig } from "../features/storage"

const logger = createPrefixedLogger("Test Current Price")

async function testCurrentPrice() {
	logger.info("Starting current price test")

	// Initialize storage
	const storageConfig = getStorageConfig("local")
	const storage = createStorageProvider(storageConfig)

	try {
		// Fetch aggregated data
		const allNetworksData = await storage.get("super-tokens/latest/all-networks.json")
		if (!allNetworksData) {
			throw new Error("No super token data found. Please run fetch-super-tokens first.")
		}

		const aggregatedData: AggregatedData = JSON.parse(allNetworksData)
		logger.info("Loaded super token data", {
			totalTokens: aggregatedData.totalTokens,
		})

		// Fetch CoinGecko mappings
		const coingeckoMappingsData = await storage.get("coingecko-mappings/super-token-ids.json")
		if (!coingeckoMappingsData) {
			throw new Error("No CoinGecko mappings found. Please run fetch-coingecko-ids first.")
		}

		const coingeckoMappings = JSON.parse(coingeckoMappingsData)
		logger.info("Loaded CoinGecko mappings", {
			mappedTokens: coingeckoMappings.mappedSuperTokens,
		})

		// Test tokens with different scenarios
		const testCases = [
			// Find a token with CoinGecko ID (classic API)
			aggregatedData.tokens.find((token) => {
				const coingeckoId = coingeckoMappings.mappings[token.chainId]?.[token.address.toLowerCase()]
				return coingeckoId && token.isListed
			}),
			// Find a token without CoinGecko ID (onchain API)
			aggregatedData.tokens.find((token) => {
				const coingeckoId = coingeckoMappings.mappings[token.chainId]?.[token.address.toLowerCase()]
				return !coingeckoId && token.isListed
			}),
		].filter(Boolean)

		if (testCases.length === 0) {
			logger.warn("No suitable test tokens found")
			return
		}

		logger.info(`Testing ${testCases.length} tokens`)

		for (const token of testCases) {
			if (!token) continue

			logger.info("Testing token", {
				symbol: token.symbol,
				chainId: token.chainId,
				address: token.address,
			})

			try {
				const result = await fetchCurrentPrice(token, coingeckoMappings)

				logger.info("Price result", {
					symbol: result.token.symbol,
					priceUsd: result.priceUsd,
					method: result.method,
					coingeckoId: result.coingeckoId,
					timestamp: result.timestamp,
				})

				// Test API endpoint
				const networkName = aggregatedData.chains[token.chainId]?.name
				if (networkName) {
					const apiUrl = `http://localhost:3000/api/v1/prices/${networkName}/${token.address}/current`
					logger.info("Testing API endpoint", { url: apiUrl })

					try {
						const response = await fetch(apiUrl)
						const data = await response.json()

						if (response.ok) {
							logger.info("API response", {
								status: response.status,
								priceUsd: data.priceUsd,
								method: data.method,
							})
						} else {
							logger.error("API error", {
								status: response.status,
								error: data,
							})
						}
					} catch (apiError) {
						logger.warn("API test failed (is the server running?)", {
							error: (apiError as Error).message,
						})
					}
				}

				// Small delay between requests
				await new Promise((resolve) => setTimeout(resolve, 500))
			} catch (error) {
				logger.error("Failed to fetch price", {
					symbol: token.symbol,
					error: (error as Error).message,
				})
			}
		}

		logger.info("Test completed")
	} catch (error) {
		logger.error("Test failed", { error: (error as Error).message })
		process.exit(1)
	}
}

// Run the test
testCurrentPrice().catch(console.error)
