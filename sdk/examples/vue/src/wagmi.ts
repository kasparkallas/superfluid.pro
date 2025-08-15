import {
	superfluidMainnets,
	superfluidMainnetTransports,
	superfluidTestnets,
	superfluidTestnetTransports,
} from "@sfpro/sdk/config";
import { createConfig, createStorage } from "@wagmi/vue";
import { coinbaseWallet, walletConnect } from "@wagmi/vue/connectors";

export const config = createConfig({
	chains: [...superfluidMainnets, ...superfluidTestnets],
	transports: {
		...superfluidMainnetTransports,
		...superfluidTestnetTransports,
	},
	connectors: [
		walletConnect({
			projectId: import.meta.env.VITE_WC_PROJECT_ID,
		}),
		coinbaseWallet({ appName: "Vite Vue Playground", darkMode: true }),
	],
	storage: createStorage({ storage: localStorage, key: "vite-vue" }),
});

declare module "@wagmi/vue" {
	interface Register {
		config: typeof config;
	}
}
