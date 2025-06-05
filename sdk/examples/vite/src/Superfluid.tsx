"use client";

import { useReadCfa } from "@sfpro/sdk/hook/core";
import { mainnet } from "wagmi/chains";

export function Superfluid() {
	const { data, isLoading, isError } = useReadCfa({
		chainId: mainnet.id,
		functionName: "MAXIMUM_FLOW_RATE",
	});

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error loading</p>}
			{data && (
				<div>
					<h3>CFA Maximum Flow Rate:</h3>
					<p>{data.toString()}</p>
				</div>
			)}
		</div>
	);
}
