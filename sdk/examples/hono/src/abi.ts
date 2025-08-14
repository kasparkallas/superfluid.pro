import { cfaAbi, cfaAddress } from "@sfpro/sdk/abi/core";
import { superfluidMainnetTransports } from "@sfpro/sdk/config";
import { createPublicClient } from "viem";
import { mainnet } from "viem/chains";
import { app } from "./app.js"; // Does this have to be .js?

const publicClient = createPublicClient({
	chain: mainnet,
	transport: superfluidMainnetTransports[mainnet.id],
});

app.get("/abi", async (c) => {
	const maximumFlowRate = await publicClient.readContract({
		address: cfaAddress[mainnet.id],
		abi: cfaAbi,
		functionName: "MAXIMUM_FLOW_RATE",
	});
	return c.text(maximumFlowRate.toString());
});

export const __esModule = true;
