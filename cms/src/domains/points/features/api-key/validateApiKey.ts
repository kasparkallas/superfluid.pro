import { headers as getHeaders } from "next/headers"
import { getPayloadInstance } from "@/payload"
import type { ApiKey, Campaign } from "@/payload-types"
import { API_KEY_STATUS } from "../../types"
import { hashApiKey, isValidApiKeyFormat } from "./index"

export type ValidatedApiKey = {
	apiKey: ApiKey
	campaign: Campaign
}

export type ApiKeyValidationResult = { error: Response } | { data: ValidatedApiKey }

/**
 * Validates an API key from the X-API-Key header.
 * Returns either an error response or the validated API key and campaign.
 *
 * Flow:
 * 1. Check X-API-Key header exists
 * 2. Validate format starts with sfp_
 * 3. Hash key and lookup in database
 * 4. Check key status is "active"
 * 5. Update lastUsedAt (fire and forget)
 *
 * @example
 * ```ts
 * const auth = await validateApiKey()
 * if ('error' in auth) return auth.error
 *
 * const { apiKey, campaign } = auth.data
 * ```
 */
export async function validateApiKey(): Promise<ApiKeyValidationResult> {
	const headers = await getHeaders()
	const apiKeyHeader = headers.get("X-API-Key")

	// 1. Check header exists
	if (!apiKeyHeader) {
		return {
			error: Response.json({ error: "Missing X-API-Key header" }, { status: 401 }),
		}
	}

	// 2. Validate format
	if (!isValidApiKeyFormat(apiKeyHeader)) {
		return {
			error: Response.json({ error: "Invalid API key format" }, { status: 401 }),
		}
	}

	// 3. Hash and lookup
	const keyHash = hashApiKey(apiKeyHeader)
	const payload = await getPayloadInstance()

	const result = await payload.find({
		collection: "api-keys",
		where: {
			keyHash: { equals: keyHash },
		},
		depth: 1, // Include campaign
		limit: 1,
	})

	if (result.docs.length === 0) {
		return {
			error: Response.json({ error: "Invalid API key" }, { status: 401 }),
		}
	}

	const apiKey = result.docs[0]

	// 4. Check key status
	if (apiKey.status !== API_KEY_STATUS.ACTIVE) {
		return {
			error: Response.json({ error: "API key has been revoked" }, { status: 401 }),
		}
	}

	// Get campaign (should be populated due to depth: 1)
	const campaign = apiKey.campaign as Campaign

	if (!campaign) {
		return {
			error: Response.json({ error: "Campaign not found" }, { status: 500 }),
		}
	}

	// 5. Update lastUsedAt (fire and forget)
	payload
		.update({
			collection: "api-keys",
			id: apiKey.id,
			data: {
				lastUsedAt: new Date().toISOString(),
			},
		})
		.catch(() => {
			// Silently fail - this is not critical
		})

	return {
		data: {
			apiKey,
			campaign,
		},
	}
}
