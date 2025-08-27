import superfluidMetadata from "@superfluid-finance/metadata"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"
import { getAllExistingTokens, hasChanges, type TokenTag, type TokenType, type TokenTypeInfo } from "."

// # Types
interface DataApiToken {
	id: string
	address: string
	chainId: number
	symbol: string
	name: string
	decimals: number
	isListed: boolean
	isNativeAssetSuperToken: boolean
	isPureSuperToken: boolean
	isWrapperSuperToken: boolean
	underlyingAddress: string
	totalNumberOfHolders: number
	totalNumberOfActiveStreams: number
	totalNumberOfClosedStreams: number
	lastUpdated: string
}

// # Main Function
export async function syncTokensFromDataApi() {
	// Fetch both tokens and mappings data in parallel
	const [tokensResponse, mappingsResponse] = await Promise.all([
		fetch("https://superfluid-data.preview.superfluid.finance/api/v1/tokens"),
		fetch("https://superfluid-data.preview.superfluid.finance/api/v1/mappings"),
	])

	if (!tokensResponse.ok) {
		throw new Error(`Failed to fetch tokens from data API: ${tokensResponse.status} ${tokensResponse.statusText}`)
	}

	if (!mappingsResponse.ok) {
		console.warn(`Failed to fetch CoinGecko mappings: ${mappingsResponse.status} ${mappingsResponse.statusText}`)
	}

	const dataApiTokens: DataApiToken[] = await tokensResponse.json()

	// Process CoinGecko mappings if available
	const coingeckoMap = new Map<string, string>()
	if (mappingsResponse.ok) {
		try {
			const mappingsData = await mappingsResponse.json()
			// mappingsData.mappings is an object with chainId as keys
			if (mappingsData.mappings) {
				for (const [chainId, addresses] of Object.entries(mappingsData.mappings)) {
					// addresses is an object with token addresses as keys and coingeckoIds as values
					for (const [address, coingeckoId] of Object.entries(addresses as Record<string, string>)) {
						const key = `${address.toLowerCase()}-${chainId}`
						coingeckoMap.set(key, coingeckoId)
					}
				}
			}
		} catch (error) {
			console.warn("Failed to parse CoinGecko mappings:", error)
		}
	}

	const existingTokensMap = await getAllExistingTokens()

	const payload = await getPayloadInstance()

	for (const dataApiToken of dataApiTokens) {
		const { tokenType, underlyingAddress } = getTokenTypeFromDataApi(dataApiToken)
		const key = `${dataApiToken.address}-${dataApiToken.chainId}`
		const existingToken = existingTokensMap.get(key)

		// Determine appropriate tags for this token
		const dataApiTags = getTokenTags(tokenType, dataApiToken.chainId)

		// Look up CoinGecko ID from mappings
		const coingeckoId = coingeckoMap.get(`${dataApiToken.address.toLowerCase()}-${dataApiToken.chainId}`)

		if (existingToken) {
			// Token exists, update with data API information
			const updateData: Partial<Token> = {}

			// Update basic token information
			updateData.name = dataApiToken.name
			updateData.symbol = dataApiToken.symbol
			updateData.decimals = dataApiToken.decimals
			updateData.tokenType = tokenType
			updateData.underlyingAddress = underlyingAddress

			// Update CoinGecko ID if available
			if (coingeckoId) {
				updateData.coingeckoId = coingeckoId
			}

			// Update logoUri only if current one is empty/null (data API doesn't provide logoUri)
			if (!existingToken.logoUri || existingToken.logoUri === "") {
				// Keep existing logoUri if available, otherwise leave empty
			}

			// Merge tags - add data API tags that don't already exist
			const existingTags = existingToken.tags || []
			const missingTags = dataApiTags.filter((tag) => !existingTags.includes(tag))

			if (missingTags.length > 0) {
				updateData.tags = [...new Set([...existingTags, ...missingTags])]
			}

			// Only update if there are changes
			if (hasChanges(existingToken, updateData)) {
				try {
					const updatedToken = await payload.update({
						collection: "tokens",
						id: existingToken.id,
						data: updateData,
					})
					console.log(`Updated token with ID ${updatedToken.id}`)
				} catch (error) {
					console.error(`Failed to update token ${dataApiToken.address} on chain ${dataApiToken.chainId}:`, error)
				}
			}
		} else {
			// Token doesn't exist, create it
			try {
				const createdToken = await payload.create({
					collection: "tokens",
					data: {
						address: dataApiToken.address,
						chainId: dataApiToken.chainId,
						decimals: dataApiToken.decimals,
						name: dataApiToken.name,
						symbol: dataApiToken.symbol,
						logoUri: "", // Data API doesn't provide logoUri
						tags: dataApiTags, // Use the tags determined from token properties
						tokenType,
						underlyingAddress,
						coingeckoId: coingeckoId || undefined, // Include CoinGecko ID if available
						order: 0,
					},
				})

				console.log(`Created token with ID ${createdToken.id}`)
			} catch (error) {
				console.error(`Failed to create token ${dataApiToken.address} on chain ${dataApiToken.chainId}:`, error)
			}
		}
	}
}

// # Helper Functions

export function getTokenTypeFromDataApi(dataApiToken: DataApiToken): TokenTypeInfo {
	let tokenType: TokenType
	let underlyingAddress: string | undefined

	if (dataApiToken.isPureSuperToken) {
		tokenType = "pureSuperToken"
		underlyingAddress = undefined
	} else if (dataApiToken.isNativeAssetSuperToken) {
		tokenType = "nativeAssetSuperToken"
		underlyingAddress = dataApiToken.underlyingAddress || undefined
	} else if (dataApiToken.isWrapperSuperToken) {
		tokenType = "wrapperSuperToken"
		underlyingAddress = dataApiToken.underlyingAddress || undefined
	} else {
		tokenType = "underlyingToken"
		underlyingAddress = undefined
	}

	return {
		tokenType,
		underlyingAddress,
	}
}

export function getTokenTags(tokenType: TokenType, chainId: number): TokenTag[] {
	const tags: TokenTag[] = []

	// Add "supertoken" tag for all super token types
	if (tokenType === "pureSuperToken" || tokenType === "nativeAssetSuperToken" || tokenType === "wrapperSuperToken") {
		tags.push("supertoken")
	}

	// Add "underlying" tag for underlying tokens
	if (tokenType === "underlyingToken") {
		tags.push("underlying")
	}

	// Check if the chain is a testnet
	const network = superfluidMetadata.testnets.find((n) => n.chainId === chainId)
	if (network?.isTestnet) {
		tags.push("testnet")
	}

	return tags
}
