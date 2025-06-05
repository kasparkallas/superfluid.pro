import { readCfa } from "@sfpro/sdk/actions/protocol";
import { createConfig } from "@wagmi/core";

import {
	superfluidMainnetTransports,
	superfluidMainnets,
	superfluidTestnetTransports,
	superfluidTestnets,
} from "@sfpro/sdk/config";
import { app } from "./app.js"; // Does this have to be .js?

const config = createConfig({
	chains: [...superfluidMainnets, ...superfluidTestnets],
	transports: {
		...superfluidMainnetTransports,
		...superfluidTestnetTransports,
	} as any,
});

app.get("/actions", async (c) => {
	const maximumFlowRate = await readCfa(config, {
		chainId: 1,
		functionName: "MAXIMUM_FLOW_RATE",
	});
	return c.text(maximumFlowRate.toString());
});

export const __esModule = true;
