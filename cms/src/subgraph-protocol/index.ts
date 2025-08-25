import { getBuiltGraphSDK } from "./.graphclient"

// Export a pre-configured SDK instance
export function getBuiltGraphSDKWithUrl(url: string) {
	return getBuiltGraphSDK({ url })
}

export * from "./.graphclient"

// Export the base SDK for flexibility
export { getBuiltGraphSDK } from "./.graphclient"
