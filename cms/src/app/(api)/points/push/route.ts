import { randomUUID } from "node:crypto"
import { tasks } from "@trigger.dev/sdk"
import { isAddress } from "viem"
import { z } from "zod"
import { validateApiKey } from "@/domains/points/features/api-key/validateApiKey"
import type { processPushRequest } from "@/domains/points/trigger/process-push-request"
import { PUSH_REQUEST_STATUS } from "@/domains/points/types"
import { getPayloadInstance } from "@/payload"

// Base event schema
const baseEventSchema = z.object({
	account: z
		.string()
		.refine(isAddress, "Invalid Ethereum address")
		.transform((val) => val.toLowerCase()),
	points: z.number().int("Points must be an integer"),
})

// Event with required eventName
const eventWithEventName = baseEventSchema.extend({
	eventName: z.string().min(1).max(100),
	uniqueId: z.string().max(255).optional(),
})

// Event without eventName (inherits from root)
const eventWithoutEventName = baseEventSchema.extend({
	eventName: z.never().optional(),
	uniqueId: z.never().optional(),
})

// Single event request (convenience)
const singleEventSchema = z
	.object({
		campaignId: z.number().int().positive().optional(),
		campaign: z.number().int().positive().optional(), // @deprecated - use campaignId
		eventName: z.string().min(1).max(100),
		account: z
			.string()
			.refine(isAddress, "Invalid Ethereum address")
			.transform((val) => val.toLowerCase()),
		points: z.number().int("Points must be an integer"),
		uniqueId: z.string().max(255).optional(),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})

// Batch with root-level defaults
const batchWithDefaultsSchema = z
	.object({
		campaignId: z.number().int().positive().optional(),
		campaign: z.number().int().positive().optional(), // @deprecated - use campaignId
		eventName: z.string().min(1).max(100),
		uniqueId: z.string().max(255).optional(),
		events: z.array(eventWithoutEventName).min(1).max(1000),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})

// Batch with per-event values
const batchWithPerEventSchema = z
	.object({
		campaignId: z.number().int().positive().optional(),
		campaign: z.number().int().positive().optional(), // @deprecated - use campaignId
		eventName: z.never().optional(),
		uniqueId: z.never().optional(),
		events: z.array(eventWithEventName).min(1).max(1000),
	})
	.refine((data) => !(data.campaignId !== undefined && data.campaign !== undefined), {
		message: "Cannot specify both 'campaignId' and 'campaign'. Use 'campaignId' instead ('campaign' is deprecated).",
		path: ["campaign"],
	})

// Combined schema - discriminated by presence of events array
const pushRequestSchema = z.union([batchWithDefaultsSchema, batchWithPerEventSchema, singleEventSchema])

type NormalizedEvent = {
	eventName: string
	account: string
	points: number
	uniqueId?: string
}

type NormalizedPayload = {
	events: NormalizedEvent[]
}

/**
 * Normalizes any valid push request into a standard format with events array.
 * Generates a batch-level uniqueId if not provided to ensure idempotency.
 */
function normalizePushPayload(data: z.infer<typeof pushRequestSchema>): NormalizedPayload {
	// Generate batch-level uniqueId if not provided
	const batchUniqueId = "uniqueId" in data && data.uniqueId ? data.uniqueId : randomUUID()

	// Single event request
	if (!("events" in data)) {
		return {
			events: [
				{
					eventName: data.eventName,
					account: data.account,
					points: data.points,
					uniqueId: data.uniqueId ?? batchUniqueId,
				},
			],
		}
	}

	return {
		events: data.events.map((event, index) => ({
			eventName: event.eventName ?? (data.eventName as string),
			account: event.account,
			points: event.points,
			uniqueId: event.uniqueId ?? data.uniqueId ?? `${batchUniqueId}:${index}`,
		})),
	}
}

/**
 * POST /points/push
 * Push point events. Returns 202 Accepted immediately, processing happens in background.
 */
export const POST = async (request: Request): Promise<Response> => {
	// Validate API key
	const auth = await validateApiKey()
	if ("error" in auth) {
		return auth.error
	}

	const { campaign } = auth.data

	try {
		const body = await request.json()
		const parsed = pushRequestSchema.safeParse(body)

		if (!parsed.success) {
			return Response.json(
				{
					message: "Validation failed",
					details: parsed.error.issues.map((issue) => ({
						path: issue.path.join("."),
						message: issue.message,
					})),
				},
				{ status: 400 },
			)
		}

		// If campaign ID provided (via campaignId or deprecated campaign field), validate it matches the API key's campaign
		const providedCampaignId =
			("campaignId" in parsed.data ? parsed.data.campaignId : undefined) ??
			("campaign" in parsed.data ? parsed.data.campaign : undefined)

		if (providedCampaignId !== undefined && providedCampaignId !== campaign.id) {
			return Response.json(
				{
					message: `Provided campaign ID (${providedCampaignId}) does not match API key's campaign (${campaign.id})`,
				},
				{ status: 403 },
			)
		}

		// Normalize to standard format
		const normalizedPayload = normalizePushPayload(parsed.data)
		const eventCount = normalizedPayload.events.length

		const payload = await getPayloadInstance()

		// Create PushRequest record
		const pushRequest = await payload.create({
			collection: "push-requests",
			data: {
				campaign: campaign.id,
				payload: normalizedPayload,
				eventCount,
				status: PUSH_REQUEST_STATUS.PENDING,
			},
		})

		// Trigger background processing
		await tasks.trigger<typeof processPushRequest>("process-push-request", {
			pushRequestId: pushRequest.id,
		})

		return Response.json(
			{
				message: "Push request accepted for processing",
				pushRequestId: pushRequest.id,
				eventCount,
			},
			{ status: 202 },
		)
	} catch (error) {
		console.error("Failed to process push request:", error)

		return Response.json(
			{
				message: error instanceof Error ? error.message : "Failed to process push request",
			},
			{ status: 500 },
		)
	}
}
