import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"
import { getExistingToken, getTokenTags, hasChanges, mergeTags, type TokenType, type TokenTypeInfo } from "."

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

interface SyncStats {
	created: number
	updated: number
	skipped: number
	failed: number
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

	// Process CoinGecko mappings if available (this is a small lookup map, fine to keep in memory)
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

	const payload = await getPayloadInstance()

	// Track statistics
	const stats: SyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	console.log(`Processing ${dataApiTokens.length} tokens from Data API...`)

	for (const dataApiToken of dataApiTokens) {
		const { tokenType, underlyingAddress } = getTokenTypeFromDataApi(dataApiToken)

		// On-demand lookup for each token
		const existingToken = await getExistingToken(dataApiToken.address, dataApiToken.chainId, payload)

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

			// Update listed status - keep as listed if either source shows it as listed
			updateData.isListed = dataApiToken.isListed || existingToken.isListed

			// Update CoinGecko ID if available
			if (coingeckoId) {
				updateData.coingeckoId = coingeckoId
			}

			// Merge tags - add data API tags that don't already exist
			const mergedTags = mergeTags(existingToken.tags, dataApiTags)
			if (mergedTags) {
				updateData.tags = mergedTags
			}

			// Only update if there are changes
			if (hasChanges(existingToken, updateData)) {
				try {
					await payload.update({
						collection: "tokens",
						id: existingToken.id,
						data: updateData,
					})
					stats.updated++
				} catch (error) {
					console.error(`Failed to update token ${dataApiToken.address} on chain ${dataApiToken.chainId}:`, error)
					stats.failed++
				}
			} else {
				stats.skipped++
			}
		} else {
			// Token doesn't exist, create it
			try {
				await payload.create({
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
						isListed: dataApiToken.isListed,
						order: 0,
					},
				})

				stats.created++
			} catch (error) {
				console.error(`Failed to create token ${dataApiToken.address} on chain ${dataApiToken.chainId}:`, error)
				stats.failed++
			}
		}
	}

	console.log(
		`Data API sync completed: ${dataApiTokens.length} tokens processed, ${stats.created} created, ${stats.updated} updated, ${stats.skipped} skipped, ${stats.failed} failed`,
	)
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
