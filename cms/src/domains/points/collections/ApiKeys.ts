import type { CollectionBeforeChangeHook, CollectionConfig } from "payload"
import { AccessControl } from "../../../utils/AccessControl"
import { generateApiKey } from "../features/api-key"
import { API_KEY_STATUS } from "../types"

// Auto-generate API key on create
const autoGenerateApiKey: CollectionBeforeChangeHook = ({ data, operation }) => {
	if (operation === "create") {
		const { rawKey, keyHash, keyPrefix } = generateApiKey()
		data.keyHash = keyHash
		data.keyPrefix = keyPrefix
		data.rawKey = rawKey
	}
	return data
}

export const ApiKeys: CollectionConfig = {
	slug: "api-keys",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["campaign", "name", "status", "keyPrefix", "createdAt", "lastUsedAt"],
		group: "Points",
	},
	access: {
		read: AccessControl.campaignChildAccess,
		create: AccessControl.campaignChildEditorAccess,
		update: AccessControl.campaignChildEditorAccess,
		delete: AccessControl.adminOnly, // Only admins can delete (safety)
		admin: AccessControl.viewerOrAbove,
	},
	hooks: {
		beforeChange: [autoGenerateApiKey],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			admin: {
				description: 'Identifier for this API key (e.g., "Frontend Integration")',
			},
		},
		{
			name: "campaign",
			type: "relationship",
			relationTo: "campaigns",
			required: true,
			hasMany: false,
			admin: {
				description: "The campaign this API key belongs to",
			},
		},
		{
			name: "rawKey",
			type: "text",
			admin: {
				readOnly: true,
				position: "sidebar",
				description: "Full API key - copy this value (only shown after creation)",
			},
		},
		{
			name: "keyHash",
			type: "text",
			unique: true,
			index: true,
			admin: {
				hidden: true, // Auto-generated, not shown in admin
			},
		},
		{
			name: "keyPrefix",
			type: "text",
			admin: {
				readOnly: true,
				description: "First 12 characters of the key for identification",
			},
		},
		{
			name: "status",
			type: "select",
			required: true,
			defaultValue: API_KEY_STATUS.ACTIVE,
			options: [
				{ label: "Active", value: API_KEY_STATUS.ACTIVE },
				{ label: "Revoked", value: API_KEY_STATUS.REVOKED },
			],
			admin: {
				description: "Active keys can be used for API requests",
			},
		},
		{
			name: "lastUsedAt",
			type: "date",
			admin: {
				readOnly: true,
				description: "Last time this key was used for an API request",
				date: {
					pickerAppearance: "dayAndTime",
				},
			},
		},
	],
}
