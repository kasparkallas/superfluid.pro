import sfMeta from "@superfluid-finance/metadata";
import { createPrefixedLogger } from "../../logger";

const logger = createPrefixedLogger("Chain Discovery");

interface ChainInfo {
	chainId: number;
	name: string;
	endpoint: string;
}

export async function discoverChains(): Promise<ChainInfo[]> {
	const chains: ChainInfo[] = [];

	// Iterate through mainnet networks only
	for (const network of sfMeta.mainnets) {
		// Check if network has a subgraph endpoint
		if (network.subgraphV1?.hostedEndpoint) {
			chains.push({
				chainId: network.chainId,
				name: network.name,
				endpoint: network.subgraphV1.hostedEndpoint,
			});
		} else {
			logger.warn("No subgraph endpoint for network", {
				networkName: network.name,
				chainId: network.chainId,
			});
		}
	}

	return chains;
}
