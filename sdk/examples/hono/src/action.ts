import { readCfa } from "@sfpro/sdk/action/core";
import { http, createConfig } from "@wagmi/core";

import {
	superfluidMainnetTransports,
	superfluidMainnets,
	superfluidTestnetTransports,
	superfluidTestnets,
} from "@sfpro/sdk/config";
import { type Chain, type Transport, createClient } from "viem";
import { mainnet } from "viem/chains";
import { app } from "./app.js";

const superfluidTransports: Record<number, Transport> = {
	...superfluidMainnetTransports,
	...superfluidTestnetTransports,
};

const config = createConfig({
	chains: [...superfluidMainnets, ...superfluidTestnets] as [Chain, ...Chain[]],
	client({ chain }) {
		return createClient({ chain, transport: superfluidTransports[chain.id as keyof typeof superfluidTransports] });
	},
});

app.get("/action", async (c) => {
	const maximumFlowRate = await readCfa(config, {
		chainId: 1,
		functionName: "MAXIMUM_FLOW_RATE",
	});
	return c.text(maximumFlowRate.toString());
});

export const __esModule = true;
