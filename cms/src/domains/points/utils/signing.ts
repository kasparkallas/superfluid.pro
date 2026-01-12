import { privateKeyToAccount } from "viem/accounts"

export type SigningResult = {
	signature: string
	signer: string
}

/**
 * Signs a message hash using the configured signer private key.
 * Returns null if signer key is not configured.
 *
 * The caller is responsible for generating the timestamp and including it
 * in the message hash before calling this function.
 */
export async function signMessageHash(messageHash: `0x${string}`): Promise<SigningResult | null> {
	const signerPrivateKey = process.env.SIGNER_PRIVATE_KEY as `0x${string}` | undefined
	if (!signerPrivateKey) {
		return null
	}

	const signer = privateKeyToAccount(signerPrivateKey)

	const signature = await signer.signMessage({
		message: { raw: messageHash },
	})

	return {
		signature,
		signer: signer.address,
	}
}
