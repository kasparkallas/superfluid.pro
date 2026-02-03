import { fetchLatestExtendedSuperTokenList } from "@superfluid-finance/tokenlist"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"
import {
	getExistingToken,
	hasChanges,
	mergeTags,
	shouldUpdateLogoUri,
	type TokenTag,
	type TokenType,
	type TokenTypeInfo,
} from "."

// # Types
export interface SuperTokenInfo {
	type: string
	underlyingTokenAddress?: string
}

interface SyncStats {
	created: number
	updated: number
	skipped: number
	failed: number
}

// # Main Function
export async function syncTokensFromTokenList() {
	const tokenList = await fetchLatestExtendedSuperTokenList()
	const payload = await getPayloadInstance()

	// Track statistics
	const stats: SyncStats = {
		created: 0,
		updated: 0,
		skipped: 0,
		failed: 0,
	}

	console.log(`Processing ${tokenList.tokens.length} tokens from TokenList...`)

	for (const token of tokenList.tokens) {
		const superTokenInfo = token.extensions?.superTokenInfo
		const { tokenType, underlyingAddress } = getTokenTypeInfo(superTokenInfo)

		// On-demand lookup for each token
		const existingToken = await getExistingToken(token.address, token.chainId, payload)

		if (existingToken) {
			// Token exists, update logoUri (if not specified) and add missing tags
			const updateData: Partial<Token> = {}
			updateData.isListed = true

			// Update logoUri only if current one is empty/null and new one is available
			if (shouldUpdateLogoUri(existingToken.logoUri, token.logoURI)) {
				updateData.logoUri = token.logoURI
			}

			// Update tags by adding missing ones
			const newTags = (token.tags || []) as TokenTag[]
			const mergedTags = mergeTags(existingToken.tags, newTags)
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
					console.error(`Failed to update token ${token.address} on chain ${token.chainId}:`, error)
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
						address: token.address,
						chainId: token.chainId,
						decimals: token.decimals,
						name: token.name,
						symbol: token.symbol,
						logoUri: token.logoURI,
						tags: (token.tags || []) as TokenTag[],
						tokenType,
						// TODO: Some native asset super tokens want to have underlying address defined.
						underlyingAddress,
						isListed: true,
						order: 0,
					},
				})

				stats.created++
			} catch (error) {
				console.error(`Failed to create token ${token.address} on chain ${token.chainId}:`, error)
				stats.failed++
			}
		}
	}

	console.log(
		`TokenList sync completed: ${tokenList.tokens.length} tokens processed, ${stats.created} created, ${stats.updated} updated, ${stats.skipped} skipped, ${stats.failed} failed`,
	)
}

// # Helper Functions

export function getTokenTypeInfo(superTokenInfo: SuperTokenInfo | undefined): TokenTypeInfo {
	if (!superTokenInfo) {
		return {
			tokenType: "underlyingToken",
			underlyingAddress: undefined,
		}
	}

	let tokenType: TokenType
	let underlyingAddress: string | undefined

	switch (superTokenInfo.type) {
		case "Pure":
			tokenType = "pureSuperToken"
			underlyingAddress = undefined
			break
		case "Native Asset":
			tokenType = "nativeAssetSuperToken"
			underlyingAddress = undefined
			break
		case "Wrapper":
			tokenType = "wrapperSuperToken"
			underlyingAddress = superTokenInfo.underlyingTokenAddress
			break
		default:
			tokenType = "underlyingToken"
			underlyingAddress = undefined
	}

	return {
		tokenType,
		underlyingAddress,
	}
}
