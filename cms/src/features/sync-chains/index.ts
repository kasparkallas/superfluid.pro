import superfluidMetadata from "@superfluid-finance/metadata";
import { payload } from "@/payload";
import type { Chain } from "@/payload-types";

type ChainData = Omit<Chain, "createdAt" | "updatedAt" | "sizes" | "deletedAt">;

export async function syncChains() {
	const networks = superfluidMetadata.networks;
	const results = {
		successful: [] as string[],
		failed: [] as { name: string; error: string }[],
		total: networks.length,
	};

	for (const network of networks) {
		// Transform the metadata structure to match Chain collection schema
		const chainData: ChainData = {
			id: network.chainId,
			canonicalName: network.name,
			isDeprecated: network.isDeprecated,
			isTestnet: network.isTestnet,
			shortName: network.shortName,
			uppercaseName: network.uppercaseName,
			humanReadableName: network.humanReadableName,
			nativeTokenSymbol: network.nativeTokenSymbol,
			nativeTokenWrapper: network.nativeTokenWrapper || "",
			contractsV1: {
				resolver: network.contractsV1.resolver,
				host: network.contractsV1.host,
				governance: network.contractsV1.governance || null,
				cfaV1: network.contractsV1.cfaV1,
				cfaV1Forwarder: network.contractsV1.cfaV1Forwarder,
				idaV1: network.contractsV1.idaV1,
				gdaV1: network.contractsV1.gdaV1 || null,
				gdaV1Forwarder: network.contractsV1.gdaV1Forwarder || null,
				superTokenFactory: network.contractsV1.superTokenFactory,
				superfluidLoader: network.contractsV1.superfluidLoader || "",
				toga: network.contractsV1.toga || null,
				batchLiquidator: network.contractsV1.batchLiquidator || null,
				superSpreader: network.contractsV1.superSpreader || null,
				...(network.contractsV1.existentialNFTCloneFactory
					? {
							existentialNFTCloneFactory: network.contractsV1.existentialNFTCloneFactory,
						}
					: {}),
				macroForwarder: network.contractsV1.macroForwarder || null,
			},
			automations: {
				vestingScheduler: network.contractsV1.vestingScheduler || null,
				vestingSchedulerV2: network.contractsV1.vestingSchedulerV2 || null,
				vestingSchedulerV3: network.contractsV1.vestingSchedulerV3 || null,
				flowScheduler: network.contractsV1.flowScheduler || null,
				manager: network.contractsV1.autowrap?.manager || null,
				wrapStrategy: network.contractsV1.autowrap?.wrapStrategy || null,
				subgraphVestingEndpoint: network.subgraphVesting?.hostedEndpoint || null,
				subgraphFlowSchedulerEndpoint: network.subgraphFlowScheduler?.hostedEndpoint || null,
				subgraphAutoWrapEndpoint: network.subgraphAutoWrap?.hostedEndpoint || null,
			},
			startBlockV1: network.startBlockV1,
			logsQueryRange: network.logsQueryRange || 0,
			explorer: network.explorer || "",
			subgraphV1: {
				cliName: network.subgraphV1.cliName || null,
				hostedEndpoint: network.subgraphV1.hostedEndpoint || null,
			},
			// Transform string arrays to object arrays
			publicRPCs: network.publicRPCs?.map((url) => ({ url })) || null,
			coinGeckoId: network.coinGeckoId || null,
			trustedForwarders: network.trustedForwarders?.map((address) => ({ address })) || null,
		};

		try {
			// Try to find existing chain by ID first
			const existingChain = await payload.find({
				collection: "chains",
				where: { id: { equals: network.chainId } },
				limit: 1,
			});

			if (existingChain.docs.length > 0) {
				// Update existing chain
				await payload.update({
					collection: "chains",
					id: existingChain.docs[0].id,
					data: chainData,
				});
				console.log(`Updated chain: ${network.name} (${network.chainId})`);
				results.successful.push(`${network.name} (${network.chainId})`);
			} else {
				// Create new chain
				await payload.create({
					collection: "chains",
					data: chainData,
				});
				console.log(`Created chain: ${network.name} (${network.chainId})`);
				results.successful.push(`${network.name} (${network.chainId})`);
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "Unknown error";
			console.error(`Failed to sync chain ${network.name} (${network.chainId}):`, error);
			results.failed.push({
				name: `${network.name} (${network.chainId})`,
				error: errorMessage,
			});
		}
	}

	return results;
}
