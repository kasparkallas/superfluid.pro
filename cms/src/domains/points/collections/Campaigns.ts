import type { CollectionBeforeDeleteHook, CollectionConfig } from "payload"
import { z } from "zod"
import { AccessControl } from "../../../utils/AccessControl"
import { validateWithZod } from "../../../utils/validation"

// Slug validation: lowercase letters, numbers, and hyphens only
const slugSchema = z
	.string()
	.min(1, "Slug is required")
	.max(50, "Slug must be 50 characters or less")
	.regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens")

/**
 * Cascade delete all related records when a campaign is deleted.
 * Deletes in order: point-balances (references point-events), point-events (references push-requests),
 * push-requests, api-keys.
 */
const cascadeDeleteRelatedRecords: CollectionBeforeDeleteHook = async ({ req, id }) => {
	await req.payload.delete({
		collection: "point-balances",
		where: { campaign: { equals: id } },
		req,
	})
	await req.payload.delete({
		collection: "point-events",
		where: { campaign: { equals: id } },
		req,
	})
	await req.payload.delete({
		collection: "push-requests",
		where: { campaign: { equals: id } },
		req,
	})
	await req.payload.delete({
		collection: "api-keys",
		where: { campaign: { equals: id } },
		req,
	})
}

export const Campaigns: CollectionConfig = {
	slug: "campaigns",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["id", "name", "slug", "relatedEntities", "createdAt"],
		group: "Points",
	},
	access: {
		read: AccessControl.campaignAccess,
		create: AccessControl.adminOnly,
		update: AccessControl.adminOnly,
		delete: AccessControl.adminOnly,
		admin: AccessControl.viewerOrAbove,
	},
	hooks: {
		beforeDelete: [cascadeDeleteRelatedRecords],
	},
	fields: [
		{
			name: "id",
			label: "Campaign ID",
			type: "number",
			required: true,
			unique: true,
			admin: {
				description: "Unique numeric identifier for this campaign",
			},
		},
		{
			name: "name",
			type: "text",
			required: true,
			admin: {
				description: "Human-readable name for this campaign",
			},
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			validate: (value: unknown) => validateWithZod(slugSchema, value),
			admin: {
				description: "URL-friendly identifier (lowercase, hyphens only)",
			},
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
		},
		{
			name: "relatedEntities",
			type: "ui",
			admin: {
				components: {
					Cell: "/components/CampaignRelatedLinksCell#CampaignRelatedLinksCell",
					Field: "/components/CampaignRelatedLinksField#CampaignRelatedLinksField",
				},
			},
		},
	],
}
