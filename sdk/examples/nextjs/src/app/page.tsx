"use client";

import { useReadCfa } from "@sfpro/sdk/wagmi/protocol";
import dynamic from "next/dynamic";
import { mainnet } from "wagmi/chains";

function HomeContent() {
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

const Home = dynamic(() => Promise.resolve(HomeContent), {
	ssr: false,
});

export default Home;
