import { CoinGeckoMappingsSchema, SuperTokenSchema, TokenFilterQuerySchema } from "../lib/api/schemas"

// Test schema validation with sample data
function validateSchemas() {
	console.log("🔍 Validating API schemas...")

	try {
		// Test Super Token schema
		const sampleToken = {
			id: "1-0x1234567890123456789012345678901234567890",
			address: "0x1234567890123456789012345678901234567890",
			chainId: 1,
			symbol: "ETHx",
			name: "Super ETH",
			decimals: 18,
			isListed: true,
			isNativeAssetSuperToken: true,
			underlyingAddress: null,
			totalNumberOfHolders: 1000,
			totalNumberOfActiveStreams: 50,
			totalNumberOfClosedStreams: 200,
			lastUpdated: new Date().toISOString(),
		}

		SuperTokenSchema.parse(sampleToken)
		console.log("✅ SuperToken schema validation passed")

		// Test query schema
		const sampleQuery = {
			isListed: "true",
			sortBy: "totalNumberOfHolders",
			sortOrder: "desc",
		}

		TokenFilterQuerySchema.parse(sampleQuery)
		console.log("✅ Query parameter schema validation passed")

		// Test CoinGecko mappings schema
		const sampleMappings = {
			version: "1.0.0",
			timestamp: new Date().toISOString(),
			totalSuperTokens: 100,
			mappedSuperTokens: 80,
			chainCount: 5,
			mappings: {
				"1": {
					"0x1234567890123456789012345678901234567890": "ethereum",
				},
			},
			metadata: {
				nativeAssetCoinIds: {
					"1": "ethereum",
				},
				chainIdToPlatformIds: {
					"1": "ethereum",
				},
			},
		}

		CoinGeckoMappingsSchema.parse(sampleMappings)
		console.log("✅ CoinGecko mappings schema validation passed")

		console.log("🎉 All schema validations passed!")
	} catch (error) {
		console.error("❌ Schema validation failed:", error)
		process.exit(1)
	}
}

validateSchemas()
