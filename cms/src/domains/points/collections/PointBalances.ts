import type { CollectionConfig } from "payload"
import { AccessControl } from "../../../utils/AccessControl"
import { addressSchema, validateWithZod } from "../../../utils/validation"

export const PointBalances: CollectionConfig = {
	slug: "point-balances",
	admin: {
		useAsTitle: "id",
		defaultColumns: ["campaign", "account", "totalPoints", "eventCount", "lastEventAt"],
		group: "Points",
	},
	access: {
		// Public read for balance queries
		read: AccessControl.publicRead,
		// Internal creation/update only
		create: AccessControl.adminOnly,
		update: AccessControl.adminOnly,
		delete: AccessControl.adminOnly,
	},
	fields: [
		{
			name: "id",
			label: "ID",
			type: "text",
			required: true,
			unique: true,
			admin: {
				readOnly: true,
				description: "Composite ID: campaignId:account",
			},
			hooks: {
				beforeChange: [
					({ value, data, operation }) => {
						if (operation === "create" || operation === "update") {
							const campaignId = typeof data?.campaign === "object" ? data.campaign.id : data?.campaign
							return `${campaignId}:${data?.account}`.toLowerCase()
						}
						return value
					},
				],
			},
		},
		{
			name: "campaign",
			type: "relationship",
			relationTo: "campaigns",
			required: true,
			hasMany: false,
			index: true,
			admin: {
				description: "The campaign this balance belongs to",
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
			name: "totalPoints",
			type: "number",
			required: true,
			defaultValue: 0,
			admin: {
				readOnly: true,
				description: "Aggregated total points for this account in this campaign",
			},
		},
		{
			name: "eventCount",
			type: "number",
			required: true,
			defaultValue: 0,
			admin: {
				readOnly: true,
				description: "Number of point events for this account",
			},
		},
		{
			name: "lastEventAt",
			type: "date",
			admin: {
				readOnly: true,
				description: "When the last point event was processed",
				date: {
					pickerAppearance: "dayAndTime",
				},
			},
		},
		{
			name: "events",
			type: "relationship",
			relationTo: "point-events",
			hasMany: true,
			admin: {
				readOnly: true,
				description: "All point events that contributed to this balance",
			},
		},
	],
}
