import type { CollectionAfterChangeHook, CollectionConfig } from "payload"
import { z } from "zod"
import type { PointEvent } from "../../../payload-types"
import { AccessControl } from "../../../utils/AccessControl"
import { addressSchema, validateWithZod } from "../../../utils/validation"

// Event name validation
const eventNameSchema = z
	.string()
	.min(1, "Event name is required")
	.max(100, "Event name must be 100 characters or less")

// Points validation (integer, can be positive or negative)
const pointsSchema = z.number().int("Points must be an integer")

/**
 * After creating a PointEvent, automatically update the corresponding PointBalance.
 * This hook inherits the transaction context from the parent operation via `req`.
 * If the balance update fails, the entire event creation is rolled back.
 */
const updatePointBalance: CollectionAfterChangeHook<PointEvent> = async ({ doc, req, operation }) => {
	if (operation !== "create") return doc

	const { campaign, account, points, id: eventId } = doc
	const campaignId = typeof campaign === "object" ? campaign.id : campaign
	const balanceId = `${campaignId}:${account}`

	// Find existing balance (inherits transaction from req)
	const existing = await req.payload.find({
		req, // Pass req to use same transaction
		collection: "point-balances",
		where: { id: { equals: balanceId } },
		limit: 1,
		depth: 0,
	})

	if (existing.docs.length > 0) {
		const balance = existing.docs[0]
		const existingEventIds = (balance.events as number[]) || []
		await req.payload.update({
			req,
			collection: "point-balances",
			id: balance.id,
			data: {
				totalPoints: Math.max(0, balance.totalPoints + points),
				eventCount: balance.eventCount + 1,
				lastEventAt: new Date().toISOString(),
				events: [...existingEventIds, eventId],
			},
		})
	} else {
		await req.payload.create({
			req,
			collection: "point-balances",
			data: {
				id: balanceId,
				campaign: campaignId,
				account,
				totalPoints: Math.max(0, points),
				eventCount: 1,
				lastEventAt: new Date().toISOString(),
				events: [eventId],
			},
		})
	}

	return doc
}

export const PointEvents: CollectionConfig = {
	slug: "point-events",
	admin: {
		useAsTitle: "eventName",
		defaultColumns: ["eventName", "account", "points", "campaign", "uniqueId", "createdAt"],
		group: "Points",
	},
	access: {
		read: AccessControl.viewerOrAbove,
		// Internal creation only - no direct API access
		create: AccessControl.adminOnly,
		update: AccessControl.adminOnly,
		delete: AccessControl.adminOnly,
	},
	hooks: {
		afterChange: [updatePointBalance],
	},
	fields: [
		{
			name: "campaign",
			type: "relationship",
			relationTo: "campaigns",
			required: true,
			hasMany: false,
			index: true,
			admin: {
				description: "The campaign this event belongs to",
			},
		},
		{
			name: "pushRequest",
			type: "relationship",
			relationTo: "push-requests",
			hasMany: false,
			index: true,
			admin: {
				description: "The push request that created this event (for audit trail)",
			},
		},
		{
			name: "eventName",
			type: "text",
			required: true,
			index: true,
			validate: (value: unknown) => validateWithZod(eventNameSchema, value),
			admin: {
				description: 'Type of event (e.g., "swap", "stream_created")',
			},
		},
		{
			name: "account",
			type: "text",
			required: true,
			index: true,
			validate: (value: unknown) => validateWithZod(addressSchema, value),
			hooks: {
				beforeChange: [
					({ value }) => {
						if (typeof value === "string") {
							return value.toLowerCase()
						}
						return value
					},
				],
			},
			admin: {
				description: "Wallet address (normalized to lowercase)",
			},
		},
		{
			name: "points",
			type: "number",
			required: true,
			validate: (value: unknown) => validateWithZod(pointsSchema, value),
			admin: {
				description: "Points awarded (can be positive or negative)",
			},
		},
		{
			name: "uniqueId",
			type: "text",
			index: true,
			admin: {
				description: "Deduplication key (unique per campaign + account)",
			},
		},
		{
			name: "dedupKey",
			type: "text",
			unique: true,
			admin: {
				readOnly: true,
				description: "Computed deduplication key: campaignId:account:uniqueId",
			},
			hooks: {
				beforeChange: [
					({ data }) => {
						// Only compute if uniqueId is provided
						if (!data?.uniqueId) return null

						const campaignId = typeof data.campaign === "object" ? data.campaign.id : data.campaign
						return `${campaignId}:${data.account}:${data.uniqueId}`.toLowerCase()
					},
				],
			},
		},
	],
}
