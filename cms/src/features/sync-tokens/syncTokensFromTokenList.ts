import { fetchLatestExtendedSuperTokenList } from "@superfluid-finance/tokenlist"
import { getPayloadInstance } from "@/payload"
import type { Token } from "@/payload-types"
import { getAllExistingTokens, hasChanges, type TokenTag, type TokenType, type TokenTypeInfo } from "."

// # Types
export interface SuperTokenInfo {
	type: string
	underlyingTokenAddress?: string
}

// # Main Function
export async function syncTokensFromTokenList() {
	const tokenList = await fetchLatestExtendedSuperTokenList()
	const existingTokensMap = await getAllExistingTokens()

	const payload = await getPayloadInstance()

	for (const token of tokenList.tokens) {
		const superTokenInfo = token.extensions?.superTokenInfo
		const { tokenType, underlyingAddress } = getTokenTypeInfo(superTokenInfo)
		const key = `${token.address}-${token.chainId}`
		const existingToken = existingTokensMap.get(key)

		if (existingToken) {
			// Token exists, update logoUri (if not specified) and add missing tags
			const updateData: Partial<Token> = {}
			updateData.isListed = true

			// Update logoUri only if current one is empty/null and new one is available
			if ((!existingToken.logoUri || existingToken.logoUri === "") && token.logoURI) {
				updateData.logoUri = token.logoURI
			}

			// Update tags by adding missing ones
			const existingTags = existingToken.tags || []
			const newTags = token.tags || []
			const missingTags = newTags.filter((tag) => !existingTags.includes(tag as TokenTag))

			if (missingTags.length > 0) {
				updateData.tags = [...existingTags, ...missingTags] as TokenTag[]
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
					console.error(`Failed to update token ${token.address} on chain ${token.chainId}:`, error)
				}
			}
		} else {
			// Token doesn't exist, create it
			try {
				const createdToken = await payload.create({
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

				console.log(`Created token with ID ${createdToken.id}`)
			} catch (error) {
				console.error(`Failed to create token ${token.address} on chain ${token.chainId}:`, error)
			}
		}
	}
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
