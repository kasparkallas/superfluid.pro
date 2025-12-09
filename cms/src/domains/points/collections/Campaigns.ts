import type { CollectionConfig } from "payload"
import { z } from "zod"
import { AccessControl } from "../../../utils/AccessControl"
import { validateWithZod } from "../../../utils/validation"

// Slug validation: lowercase letters, numbers, and hyphens only
const slugSchema = z
	.string()
	.min(1, "Slug is required")
	.max(50, "Slug must be 50 characters or less")
	.regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens")

export const Campaigns: CollectionConfig = {
	slug: "campaigns",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "slug", "createdAt"],
		group: "Points",
	},
	access: {
		read: AccessControl.viewerOrAbove,
		create: AccessControl.adminOnly,
		update: AccessControl.adminOnly,
		delete: AccessControl.adminOnly,
	},
	fields: [
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
	],
}
