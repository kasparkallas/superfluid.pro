import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const origin = process.argv[2] || "https://superfluid-sdk-mcp.vercel.app/api";

async function main() {
	const transport = new SSEClientTransport(new URL(`${origin}/sse`));

	const client = new Client(
		{
			name: "example-client",
			version: "1.0.0",
		},
		{
			capabilities: {
				prompts: {},
				resources: {},
				tools: {},
			},
		},
	);

	await client.connect(transport);

	console.log("Connected", client.getServerCapabilities());

	// List all available tools
	const tools = await client.listTools();
	console.log(
		"Available tools:",
		tools.tools.map((t) => t.name),
	);

	// Test GraphQL tools
	console.log("\n=== Testing GraphQL Tools ===");

	try {
		// Test 1: List subgraph endpoints
		console.log("\n1. Testing list-superfluid-subgraph-endpoints...");
		const endpoints = await client.callTool({
			name: "list-superfluid-subgraph-endpoints",
			arguments: {
				chainIds: [1, 137],
				includeTestnets: false,
				subgraphTypes: ["protocol", "vesting"],
			},
		});
		console.log("Subgraph endpoints:", JSON.parse(endpoints.content[0].text).slice(0, 2)); // Show first 2

		// Test 2: Introspect schema
		console.log("\n2. Testing introspect-subgraph-schema...");
		const schema = await client.callTool({
			name: "introspect-subgraph-schema",
			arguments: {
				chainId: 1,
				subgraphType: "protocol",
			},
		});
		console.log("Schema length:", schema.content[0].text.length, "characters");
		console.log("Schema preview:", `${schema.content[0].text.slice(0, 200)}...`);

		// Test 3: Query subgraph
		console.log("\n3. Testing query-subgraph...");
		const queryResult = await client.callTool({
			name: "query-subgraph",
			arguments: {
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
				chainId: 1,
				subgraphType: "protocol",
				variables: { first: 3 },
			},
		});
		const queryData = JSON.parse(queryResult.content[0].text);
		console.log("Query result - streams found:", queryData.data?.streams?.length || 0);
		if (queryData.data?.streams?.length > 0) {
			console.log("First stream:", queryData.data.streams[0]);
		}
	} catch (error) {
		console.error("GraphQL tools test error:", error.message);
	}
}

main();
