import type { CollectionConfig } from "payload"
import { AccessControl } from "../../../utils/AccessControl"
import {
	addressSchema,
	optionalAddressSchema,
	optionalUrlSchema,
	transformAddress,
	validateWithZod,
} from "../../../utils/validation"

export const Chains: CollectionConfig = {
	slug: "chains",
	admin: {
		useAsTitle: "humanReadableName",
		defaultColumns: ["humanReadableName", "id", "canonicalName", "isTestnet"],
	},
	access: {
		read: AccessControl.publicRead,
		create: AccessControl.editorOrAdmin,
		update: AccessControl.editorOrAdmin,
		delete: AccessControl.editorOrAdmin,
		admin: AccessControl.editorOrAdmin,
	},
	fields: [
		{
			name: "id",
			label: "Chain ID",
			type: "number",
			required: true,
			unique: true,
		},
		{
			name: "humanReadableName",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "canonicalName",
			label: "Canonical Name",
			type: "text",
			required: true,
			admin: {
				description: "Superfluid canonical network name",
			},
		},
		{
			name: "shortName",
			label: "Short Name",
			type: "text",
			required: true,
		},
		{
			name: "uppercaseName",
			label: "Uppercase Name",
			type: "text",
			required: true,
		},
		{
			name: "isDeprecated",
			label: "Is Deprecated?",
			type: "checkbox",
			defaultValue: false,
			required: true,
		},
		{
			name: "isTestnet",
			label: "Is Testnet?",
			type: "checkbox",
			defaultValue: false,
			required: true,
		},
		{
			name: "nativeTokenSymbol",
			label: "Native Token Symbol",
			type: "text",
			required: true,
		},
		{
			name: "nativeTokenWrapper",
			label: "Native Token Wrapper Address",
			type: "text",
			required: true,
			validate: (value: unknown) => validateWithZod(addressSchema, value),
			hooks: {
				beforeChange: [({ value }) => transformAddress(value)],
			},
		},
		{
			name: "contractsV1",
			label: "Contracts V1",
			type: "group",
			fields: [
				{
					name: "resolver",
					label: "Resolver",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "host",
					label: "Host",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "governance",
					label: "Governance",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "cfaV1",
					label: "CFA",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "cfaV1Forwarder",
					label: "CFA Forwarder",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "idaV1",
					label: "IDA",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "gdaV1",
					label: "GDA",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "gdaV1Forwarder",
					label: "GDA V1 Forwarder",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "superTokenFactory",
					label: "Super Token Factory",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "superfluidLoader",
					label: "Superfluid Loader",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "toga",
					label: "TOGA",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "batchLiquidator",
					label: "Batch Liquidator",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "superSpreader",
					label: "Super Spreader",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "existentialNFTCloneFactory",
					label: "Existential NFT Clone Factory",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "macroForwarder",
					label: "Macro Forwarder",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
			],
		},
		{
			name: "startBlockV1",
			label: "Start Block V1",
			type: "number",
			required: true,
		},
		{
			name: "logsQueryRange",
			label: "Logs Query Range",
			type: "number",
			required: true,
		},
		{
			name: "explorer",
			type: "text",
			required: true,
			admin: {
				description: "Block explorer URL",
			},
		},
		{
			name: "subgraphV1",
			label: "Subgraph V1",
			type: "group",
			fields: [
				{
					name: "cliName",
					label: "CLI Name",
					type: "text",
					required: false,
				},
				{
					name: "hostedEndpoint",
					label: "Hosted Endpoint",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalUrlSchema, value) : true),
				},
			],
		},
		{
			name: "automations",
			label: "Automations",
			type: "group",
			fields: [
				{
					name: "vestingScheduler",
					label: "Vesting Scheduler",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "vestingSchedulerV2",
					label: "Vesting Scheduler V2",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "vestingSchedulerV3",
					label: "Vesting Scheduler V3",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "flowScheduler",
					label: "Flow Scheduler",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "manager",
					label: "Auto-Wrap Manager",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "wrapStrategy",
					label: "Auto-Wrap Strategy",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalAddressSchema, value) : true),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
				{
					name: "subgraphVestingEndpoint",
					label: "Subgraph Vesting Endpoint",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalUrlSchema, value) : true),
				},
				{
					name: "subgraphFlowSchedulerEndpoint",
					label: "Subgraph Flow Scheduler Endpoint",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalUrlSchema, value) : true),
				},
				{
					name: "subgraphAutoWrapEndpoint",
					label: "Subgraph Auto Wrap Endpoint",
					type: "text",
					required: false,
					validate: (value: unknown) => (value ? validateWithZod(optionalUrlSchema, value) : true),
				},
			],
		},
		{
			name: "publicRPCs",
			label: "Public RPCs",
			type: "array",
			required: false,
			fields: [
				{
					name: "url",
					label: "URL",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(optionalUrlSchema, value),
				},
			],
		},
		{
			name: "coinGeckoId",
			label: "CoinGecko Platform ID",
			type: "text",
			required: false,
		},
		{
			name: "trustedForwarders",
			label: "Trusted Forwarders",
			type: "array",
			required: false,
			admin: {
				description: "List of additional trusted forwarders",
			},
			fields: [
				{
					name: "address",
					type: "text",
					required: true,
					validate: (value: unknown) => validateWithZod(addressSchema, value),
					hooks: {
						beforeChange: [({ value }) => transformAddress(value)],
					},
				},
			],
		},
	],
}
