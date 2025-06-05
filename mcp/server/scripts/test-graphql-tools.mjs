import metadata from "@superfluid-finance/metadata";

// Test function to validate our endpoint resolution
function getSubgraphEndpoint(chainId, subgraphType) {
	const network = metadata.getNetworkByChainId(chainId);
	if (!network) return null;

	switch (subgraphType) {
		case "protocol":
			return network.subgraphV1?.hostedEndpoint || null;
		case "vesting":
			return network.subgraphVesting?.hostedEndpoint || null;
		case "flowScheduler":
			return network.subgraphFlowScheduler?.hostedEndpoint || null;
		case "autoWrap":
			return network.subgraphAutoWrap?.hostedEndpoint || null;
		default:
			return null;
	}
}

async function testEndpointResolution() {
	console.log("=== Testing Endpoint Resolution ===\n");

	const testCases = [
		{ chainId: 1, subgraphType: "protocol" },
		{ chainId: 1, subgraphType: "vesting" },
		{ chainId: 137, subgraphType: "protocol" },
		{ chainId: 137, subgraphType: "autoWrap" },
		{ chainId: 999999, subgraphType: "protocol" }, // Invalid chain
	];

	for (const { chainId, subgraphType } of testCases) {
		const endpoint = getSubgraphEndpoint(chainId, subgraphType);
		console.log(`Chain ${chainId}, ${subgraphType}: ${endpoint || "NOT_FOUND"}`);
	}
}

async function testSubgraphEndpointListing() {
	console.log("\n=== Testing Subgraph Endpoint Listing ===\n");

	// Get mainnet networks only
	const networks = metadata.mainnets;
	const testNetworks = networks.slice(0, 3); // Test first 3 networks

	const networkSubgraphs = testNetworks
		.map((network) => {
			const subgraphs = {};
			const types = ["protocol", "vesting", "flowScheduler", "autoWrap"];

			for (const type of types) {
				const endpoint = getSubgraphEndpoint(network.chainId, type);
				if (endpoint) {
					subgraphs[type] = endpoint;
				}
			}

			return {
				chainId: network.chainId,
				networkName: network.humanReadableName,
				subgraphs,
			};
		})
		.filter((item) => Object.keys(item.subgraphs).length > 0);

	console.log(JSON.stringify(networkSubgraphs, null, 2));
}

async function testGraphQLIntrospection() {
	console.log("\n=== Testing GraphQL Introspection ===\n");

	// Test against a known endpoint
	const endpoint = getSubgraphEndpoint(1, "protocol");
	if (!endpoint) {
		console.log("No protocol subgraph found for Ethereum mainnet");
		return;
	}

	console.log(`Testing introspection against: ${endpoint}`);

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
					query IntrospectionQuery {
						__schema {
							types {
								name
								kind
							}
						}
					}
				`,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();

		if (data.errors) {
			console.log("GraphQL errors:", data.errors);
			return;
		}

		const types = data.data.__schema.types;
		console.log(`Successfully introspected schema with ${types.length} types`);
		console.log(
			"Sample types:",
			types.slice(0, 5).map((t) => t.name),
		);
	} catch (error) {
		console.error("Introspection failed:", error.message);
	}
}

async function testGraphQLQuery() {
	console.log("\n=== Testing GraphQL Query ===\n");

	const endpoint = getSubgraphEndpoint(1, "protocol");
	if (!endpoint) {
		console.log("No protocol subgraph found for Ethereum mainnet");
		return;
	}

	console.log(`Testing query against: ${endpoint}`);

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
					query GetStreams($first: Int!) {
						streams(first: $first) {
							id
							token {
								symbol
							}
							sender
							receiver
							currentFlowRate
						}
					}
				`,
				variables: { first: 2 },
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();

		if (data.errors) {
			console.log("GraphQL errors:", data.errors);
			return;
		}

		const streams = data.data.streams;
		console.log(`Successfully queried ${streams.length} streams`);
		if (streams.length > 0) {
			console.log("First stream:", streams[0]);
		}
	} catch (error) {
		console.error("Query failed:", error.message);
	}
}

async function main() {
	await testEndpointResolution();
	await testSubgraphEndpointListing();
	await testGraphQLIntrospection();
	await testGraphQLQuery();

	console.log("\n=== All tests completed ===");
}

main().catch(console.error);
