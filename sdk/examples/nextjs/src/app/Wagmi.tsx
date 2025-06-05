"use client";

import {
	superfluidMainnetTransports,
	superfluidMainnets,
	superfluidTestnetTransports,
	superfluidTestnets,
} from "@sfpro/sdk/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from "wagmi";

export const config = createConfig({
	chains: [...superfluidMainnets, ...superfluidTestnets],
	transports: {
		...superfluidMainnetTransports,
		...superfluidTestnetTransports,
	} as any,
});

export const queryClient = new QueryClient();

export function Wagmi(props: {
	children: React.ReactNode;
}) {
	const { children } = props;

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
}
