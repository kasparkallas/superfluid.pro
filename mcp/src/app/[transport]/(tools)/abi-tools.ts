import {
	// Main ABIs
	cfaForwarderAbi,
	gdaForwarderAbi,
	gdaPoolAbi,
	superTokenAbi,
} from "@sfpro/sdk";
import type { Abi } from "viem";
import { z } from "zod";

import {
	// Protocol ABIs
	batchLiquidatorAbi,
	cfaAbi,
	gdaAbi,
	governanceAbi,
	hostAbi,
	idaAbi,
	superTokenFactoryAbi,
	togaAbi,
} from "@sfpro/sdk/protocol";

import type { McpServer } from "@/types";
import {
	// Automation ABIs
	autoWrapManagerAbi,
	autoWrapStrategyAbi,
	flowSchedulerAbi,
	legacyVestingSchedulerV1Abi,
	legacyVestingSchedulerV2Abi,
	vestingSchedulerV3Abi,
} from "@sfpro/sdk/automation";

type ContractInfo = {
	abi: Abi;
	names: string[];
	tags: string[];
};

const contractAbis = {
	// Main contracts
	cfaForwarder: {
		abi: cfaForwarderAbi,
		names: ["CFAv1Forwarder", "cfaForwarder"],
		tags: ["beginner-friendly", "CFA"],
	},
	gdaForwarder: {
		abi: gdaForwarderAbi,
		names: ["GDAv1Forwarder", "gdaForwarder"],
		tags: ["beginner-friendly", "GDA"],
	},
	gdaPool: {
		abi: gdaPoolAbi,
		names: ["SuperfluidPool", "gdaPool"],
		tags: ["beginner-friendly", "GDA"],
	},
	superToken: {
		abi: superTokenAbi,
		names: ["SuperToken"],
		tags: [
			"beginner-friendly",
			"ERC-20",
			"Pure Super Token",
			"Native Asset Super Token",
			"Wrapper Super Token",
			"wrap/unwrap",
			"upgrade/downgrade",
			"real-time balance",
		],
	},
	// Protocol contracts
	cfa: {
		abi: cfaAbi,
		names: ["ConstantFlowAgreementV1", "CFA"],
		tags: ["core protocol", "batch call", "one-to-one direct streams/flows", "ACL", "flow operator"],
	},
	gda: {
		abi: gdaAbi,
		names: ["GeneralDistributionAgreementV1", "GDA"],
		tags: ["core protocol", "batch call", "n-to-many distribution streams/flows", "n-to-many instant distributions"],
	},
	host: {
		abi: hostAbi,
		names: ["Host"],
		tags: ["core protocol", "batch call"],
	},
	governance: {
		abi: governanceAbi,
		names: ["GovernanceII", "governance"],
		tags: ["core protocol"],
	},
	ida: {
		abi: idaAbi,
		names: ["InstantDistributionAgreementV1", "IDA"],
		tags: ["legacy", "core protocol", "1-to-many instant distributions"],
	},
	toga: {
		abi: togaAbi,
		names: ["TOGA"],
		tags: ["core protocol", "solvency/sentinel"],
	},
	superTokenFactory: {
		abi: superTokenFactoryAbi,
		names: ["SuperTokenFactory"],
		tags: [],
	},
	batchLiquidator: {
		abi: batchLiquidatorAbi,
		names: ["BatchLiquidator"],
		tags: ["solvency/sentinel"],
	},
	// Automation contracts
	autoWrapManager: {
		abi: autoWrapManagerAbi,
		names: ["AutoWrapManager"],
		tags: ["automation", "whitelist", "SuperApp"],
	},
	autoWrapStrategy: {
		abi: autoWrapStrategyAbi,
		names: ["AutoWrapStrategy"],
		tags: ["automation", "whitelist", "SuperApp"],
	},
	flowScheduler: {
		abi: flowSchedulerAbi,
		names: ["FlowScheduler"],
		tags: ["automation", "whitelist", "SuperApp"],
	},
	vestingSchedulerV1: {
		abi: legacyVestingSchedulerV1Abi,
		names: ["VestingSchedulerV1"],
		tags: ["legacy", "automation", "whitelist", "SuperApp"],
	},
	vestingSchedulerV2: {
		abi: legacyVestingSchedulerV2Abi,
		names: ["VestingSchedulerV2"],
		tags: ["legacy", "automation", "whitelist", "SuperApp"],
	},
	vestingSchedulerV3: {
		abi: vestingSchedulerV3Abi,
		names: ["VestingSchedulerV3", "VestingScheduler"],
		tags: ["automation", "whitelist", "ERC-2771"],
	},
} satisfies Record<string, ContractInfo>;

const allValidContractNames = Object.values(contractAbis)
	.flatMap((contract) => contract.names)
	.map((name) => name.toLowerCase()) as [string, ...string[]];

export const createListSuperfluidContractsTool = (server: McpServer) => {
	server.tool(
		"list-superfluid-contracts",
		"List all available Superfluid contract names that can be used to fetch ABIs",
		async () => {
			const contracts = Object.entries(contractAbis).map(([name, info]) => ({
				name,
				tags: info.tags,
			}));

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(contracts, null, 2),
					},
				],
			};
		},
	);
};

export const createGetSuperfluidContractAbiTool = (server: McpServer) => {
	server.tool(
		"get-superfluid-contract-abi",
		"Get the ABI for a specific Superfluid Protocol contract by name",
		{
			contractName: contractNamesSchema,
		},
		async (args: { contractName: string }) => {
			const contractInfo = Object.values(contractAbis).find((contract) =>
				contract.names.map((name) => name.toLowerCase()).includes(args.contractName.toLowerCase()),
			);

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(contractInfo?.abi, null, 2),
					},
				],
			};
		},
	);
};

export const contractNamesSchema = z.enum(allValidContractNames);
