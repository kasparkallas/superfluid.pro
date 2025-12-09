import crypto from "node:crypto"
import { API_KEY_PREFIX } from "../../types"

/**
 * Generates a new API key with the format: sfp_<64 hex chars>
 * Returns the raw key (to be shown once to user) and its hash (for storage)
 */
export function generateApiKey(): { rawKey: string; keyHash: string; keyPrefix: string } {
	// Generate 32 random bytes = 64 hex characters
	const randomBytes = crypto.randomBytes(32)
	const hexString = randomBytes.toString("hex")

	const rawKey = `${API_KEY_PREFIX}${hexString}`
	const keyHash = hashApiKey(rawKey)
	const keyPrefix = rawKey.substring(0, 12) // "sfp_" + first 8 hex chars

	return { rawKey, keyHash, keyPrefix }
}

/**
 * Hashes an API key using SHA-256
 */
export function hashApiKey(key: string): string {
	return crypto.createHash("sha256").update(key).digest("hex")
}

/**
 * Validates the format of an API key
 */
export function isValidApiKeyFormat(key: string): boolean {
	// Must start with prefix and have exactly 64 hex chars after
	if (!key.startsWith(API_KEY_PREFIX)) {
		return false
	}

	const hexPart = key.slice(API_KEY_PREFIX.length)
	return /^[a-f0-9]{64}$/.test(hexPart)
}
