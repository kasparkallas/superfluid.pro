import type { CollectionConfig } from "payload"
import { AccessControl } from "../utils/AccessControl"

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	access: {
		read: AccessControl.selfOrAdmin,
		create: AccessControl.adminOnly,
		update: AccessControl.selfOrAdmin,
		delete: AccessControl.adminOnly,
		admin: AccessControl.viewerOrAbove,
	},
	hooks: {
		beforeChange: [
			async ({ data, req, operation }) => {
				// Check if this is the first user being created
				if (operation === "create") {
					const existingUsers = await req.payload.find({
						collection: "users",
						limit: 1,
						depth: 0,
					})

					// If no users exist, make this user an admin
					if (existingUsers.totalDocs === 0) {
						data.role = "admin"
					}
				}

				// Lowercase allowed tags
				if (data?.tokenPermissions?.allowedTags?.length > 0) {
					data.tokenPermissions.allowedTags = data.tokenPermissions.allowedTags.map(
						(item: { tag: string; id?: string | null }) => ({
							...item,
							tag: item.tag?.toLowerCase(),
						}),
					)
				}

				// Lowercase allowed addresses
				if (data?.tokenPermissions?.allowedAddresses?.length > 0) {
					data.tokenPermissions.allowedAddresses = data.tokenPermissions.allowedAddresses.map(
						(item: { address: string; id?: string | null }) => ({
							...item,
							address: item.address?.toLowerCase(),
						}),
					)
				}

				return data
			},
		],
	},
	fields: [
		// Email added by default
		{
			name: "name",
			type: "text",
			required: false,
		},
		{
			name: "role",
			type: "select",
			required: true,
			defaultValue: "admin",
			options: [
				{ label: "Admin", value: "admin" },
				{ label: "Editor", value: "editor" },
				{ label: "Viewer", value: "viewer" },
			],
			access: {
				// Only admins can change roles
				update: AccessControl.fieldAdminOnly,
			},
		},
		{
			name: "tokenPermissions",
			type: "group",
			admin: {
				condition: (data) => data?.role === "editor",
				description: "Configure token editing permissions for editors",
			},
			access: {
				// Only admins can modify token permissions
				update: AccessControl.fieldAdminOnly,
			},
			fields: [
				{
					name: "canEditAllTokens",
					type: "checkbox",
					defaultValue: true,
					admin: {
						description: "If checked, user can edit all tokens. If unchecked, restrictions below apply.",
					},
				},
				{
					name: "allowedTags",
					type: "array",
					admin: {
						description: "User can edit tokens with ANY of these tags",
					},
					fields: [
						{
							name: "tag",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "allowedAddresses",
					type: "array",
					admin: {
						description: "User can edit tokens from ANY of these addresses",
					},
					fields: [
						{
							name: "address",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "allowedChainIds",
					type: "array",
					admin: {
						description: "User can edit tokens on ANY of these chains",
					},
					fields: [
						{
							name: "chainId",
							type: "number",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "campaignPermissions",
			type: "group",
			admin: {
				condition: (data) => data?.role === "editor" || data?.role === "viewer",
				description: "Configure which campaigns this user can access",
			},
			access: {
				update: AccessControl.fieldAdminOnly,
			},
			fields: [
				{
					name: "canAccessAllCampaigns",
					type: "checkbox",
					defaultValue: false,
					admin: {
						description: "If checked, user can access all campaigns. If unchecked, only assigned campaigns.",
					},
				},
				{
					name: "allowedCampaignIds",
					type: "array",
					admin: {
						description: "Campaign IDs this user can access",
						condition: (data) => !data?.campaignPermissions?.canAccessAllCampaigns,
					},
					fields: [
						{
							name: "campaignId",
							type: "number",
							required: true,
						},
					],
				},
			],
		},
	],
}
