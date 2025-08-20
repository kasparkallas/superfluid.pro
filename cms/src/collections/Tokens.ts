import superfluidMetadata from "@superfluid-finance/metadata"
import type { CollectionConfig } from "payload"
import { isAddress } from "viem"
import { AccessControl } from "../utils/AccessControl"
import {
	addressSchema,
	decimalsSchema,
	logoUriSchema,
	symbolSchema,
	transformAddress,
	validateWithZod,
} from "../utils/validation"

export const Tokens: CollectionConfig = {
	slug: "tokens",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["symbol", "name", "chainId", "address", "tokenType", "isListed", "tags"],
	},
	access: {
		read: AccessControl.publicRead,
		create: AccessControl.editorOrAdmin,
		update: AccessControl.tokenAccess,
		delete: AccessControl.tokenAccess,
		admin: AccessControl.editorOrAdmin,
	},
	fields: [
		{
			name: "id",
			label: "ID",
			type: "text",
			required: true,
			admin: {
				readOnly: true,
			},
			hooks: {
				beforeChange: [
					({ value, data, operation }) => {
						if (operation === "create" || operation === "update") {
							return `${data?.chainId}:${data?.address}`.toLowerCase()
						}
						return value
					},
				],
			},
		},
		{
			name: "chainId",
			label: "Chain ID",
			type: "number",
			required: true,
			admin: {
				description: "The blockchain network ID for this token (legacy field, will be migrated)",
			},
			validate: (value: unknown) => {
				if (typeof value !== "number") {
					return "Chain ID must be a number"
				}
				// Validate it's a known Superfluid network
				const validChainIds = superfluidMetadata.networks.map((n) => n.chainId)
				if (!validChainIds.includes(value)) {
					return `Invalid chain ID. Must be one of: ${validChainIds.join(", ")}`
				}
				return true
			},
		},
		{
			name: "address",
			type: "text",
			required: true,
			validate: (value: unknown) => validateWithZod(addressSchema, value),
			hooks: {
				beforeChange: [({ value }) => transformAddress(value)],
			},
		},
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "decimals",
			type: "number",
			required: true,
			validate: (value: unknown) => validateWithZod(decimalsSchema, value),
		},
		{
			name: "symbol",
			type: "text",
			required: true,
			validate: (value: unknown) => validateWithZod(symbolSchema, value),
		},
		{
			name: "logoUri",
			label: "Logo URI",
			type: "text",
			required: false,
			validate: (value: unknown) => validateWithZod(logoUriSchema, value),
			admin: {
				components: {
					Field: "/components/LogoPreview#LogoPreview",
				},
				description: "URL of the token logo image",
			},
		},
		{
			name: "isListed",
			label: "Is Listed on Resolver",
			type: "checkbox",
			required: false,
			defaultValue: false,
			admin: {
				description: "Whether the token is listed on the Resolver",
			},
		},
		{
			name: "coingeckoId",
			label: "CoinGecko ID",
			type: "text",
			required: false,
		},
		{
			name: "tags",
			type: "select",
			hasMany: true,
			required: false,
			admin: {
				description: "Select tags to categorize this token",
			},
			options: [
				{ label: "streme", value: "streme" },
				{ label: "testnet", value: "testnet" },
				{ label: "underlying", value: "underlying" },
				{ label: "supertoken", value: "supertoken" },
			],
		},
		{
			name: "tokenType",
			type: "select",
			required: true,
			options: [
				{ label: "Underlying Token", value: "underlyingToken" },
				{ label: "Pure Super Token", value: "pureSuperToken" },
				{ label: "Native Asset Super Token", value: "nativeAssetSuperToken" },
				{ label: "Wrapper Super Token", value: "wrapperSuperToken" },
			],
		},
		{
			name: "underlyingAddress",
			label: "Underlying Token Address",
			type: "text",
			required: false,
			admin: {
				description:
					"Required for Wrapper Super Tokens, optional for Native Asset Super Tokens, forbidden for Pure Super Tokens and Underlying Tokens",
				condition: (data) => {
					return data?.tokenType === "wrapperSuperToken" || data?.tokenType === "nativeAssetSuperToken"
				},
			},
			validate: (value: unknown, { data }: { data?: Record<string, unknown> }) => {
				const tokenType = data?.tokenType

				// Pure Super Token: must not have underlying address
				if (tokenType === "pureSuperToken") {
					if (value && value !== "") {
						return "Pure Super Tokens cannot have an underlying token address"
					}
					return true
				}

				// Underlying Token: must not have underlying address
				if (tokenType === "underlyingToken") {
					if (value && value !== "") {
						return "Underlying Tokens cannot have an underlying token address"
					}
					return true
				}

				// Wrapper Super Token: must have underlying address
				if (tokenType === "wrapperSuperToken") {
					if (!value || value === "") {
						return "Wrapper Super Tokens require an underlying token address"
					}
					// Validate the address format
					if (!isAddress(value as string)) {
						return "Invalid Ethereum address format"
					}
					return true
				}

				// Native Asset Super Token: optional underlying address
				if (tokenType === "nativeAssetSuperToken") {
					// If provided, validate the address format
					if (value && value !== "") {
						if (!isAddress(value as string)) {
							return "Invalid Ethereum address format"
						}
					}
					return true
				}

				return true
			},
			hooks: {
				beforeChange: [({ value }) => transformAddress(value)],
			},
		},
		{
			name: "note",
			type: "text",
			required: false,
			admin: {
				description: "Any additional notes about the token",
			},
		},
	],
}
