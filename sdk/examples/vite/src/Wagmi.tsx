"use client";

import {
	superfluidMainnets,
	superfluidMainnetTransports,
	superfluidTestnets,
	superfluidTestnetTransports,
} from "@sfpro/sdk/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiProvider } from "wagmi";

const config = createConfig({
	chains: [...superfluidMainnets, ...superfluidTestnets],
	transports: {
		...superfluidMainnetTransports,
		...superfluidTestnetTransports,
	} as any,
});

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}

const queryClient = new QueryClient();

export function Wagmi(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
}
