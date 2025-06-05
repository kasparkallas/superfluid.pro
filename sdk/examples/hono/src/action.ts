import { readCfa } from "@sfpro/sdk/action/core";
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

app.get("/action", async (c) => {
	const maximumFlowRate = await readCfa(config, {
		chainId: 1,
		functionName: "MAXIMUM_FLOW_RATE",
	});
	return c.text(maximumFlowRate.toString());
});

export const __esModule = true;
