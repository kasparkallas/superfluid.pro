import type { McpServer } from "@/types";
import metadata from "@superfluid-finance/metadata";
import { buildClientSchema, getIntrospectionQuery, parse, printSchema } from "graphql";
import { unstable_cache } from "next/cache";
import { z } from "zod";

// Type definitions
type SubgraphType = "protocol" | "vesting" | "flowScheduler" | "autoWrap";

interface SubgraphEndpoints {
	protocol?: string;
	vesting?: string;
	flowScheduler?: string;
	autoWrap?: string;
}

interface NetworkSubgraphs {
	chainId: number;
	networkName: string;
	subgraphs: SubgraphEndpoints;
}

/**
 * Get subgraph endpoint for a specific network and subgraph type
 */
const getSubgraphEndpoint = (chainId: number, subgraphType: SubgraphType): string | null => {
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
};

/**
 * Introspect a GraphQL endpoint and return the schema as SDL
 */
const introspectGraphQLEndpoint = async (endpoint: string): Promise<string> => {
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: getIntrospectionQuery(),
		}),
	});

	if (!response.ok) {
		throw new Error(`GraphQL request failed: ${response.statusText}`);
	}

	const responseJson = await response.json();

	if (responseJson.errors) {
		throw new Error(`GraphQL introspection errors: ${JSON.stringify(responseJson.errors)}`);
	}

	// Transform to a schema object
	const schema = buildClientSchema(responseJson.data);

	// Print the schema SDL
	return printSchema(schema);
};

/**
 * Cached schema introspection
 */
const getCachedSchema = unstable_cache(
	async (chainId: number, subgraphType: SubgraphType) => {
		const endpoint = getSubgraphEndpoint(chainId, subgraphType);
		if (!endpoint) {
			throw new Error(`No ${subgraphType} subgraph found for network ${chainId}`);
		}
		return introspectGraphQLEndpoint(endpoint);
	},
	["subgraph-schema"],
	{
		revalidate: 86400, // Cache for 24 hours
		tags: ["superfluid", "subgraph", "schema"],
	},
);

/**
 * Execute GraphQL query against an endpoint
 */
const executeGraphQLQuery = async (
	endpoint: string,
	query: string,
	variables?: Record<string, unknown>,
	operationName?: string,
): Promise<unknown> => {
	// Note: could refactor to graphql-request here
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables: variables || undefined,
			operationName: operationName || undefined,
		}),
	});

	if (!response.ok) {
		const responseText = await response.text();
		throw new Error(`GraphQL request failed: ${response.statusText}\n${responseText}`);
	}

	const data = await response.json();

	if (data.errors && data.errors.length > 0) {
		throw new Error(`GraphQL response has errors: ${JSON.stringify(data, null, 2)}`);
	}

	return data;
};

export const createListSuperfluidSubgraphEndpointsTool = (server: McpServer) => {
	server.tool(
		"list-superfluid-subgraph-endpoints",
		"List Superfluid subgraph endpoints for all or specific networks. Returns protocol, vesting, flow scheduler, and auto-wrap subgraph URLs when available.",
		{
			chainIds: z.array(z.number().int().positive()).optional(),
			includeTestnets: z.boolean().optional(),
			subgraphTypes: z.array(z.enum(["protocol", "vesting", "flowScheduler", "autoWrap"])).optional(),
		},
		async (args: {
			chainIds?: number[];
			includeTestnets?: boolean;
			subgraphTypes?: SubgraphType[];
		}) => {
			const includeTestnets = args.includeTestnets ?? true;
			const requestedChainIds = args.chainIds;
			const requestedTypes = args.subgraphTypes || ["protocol", "vesting", "flowScheduler", "autoWrap"];

			// Get networks to process
			let networks = includeTestnets ? metadata.networks : metadata.mainnets;

			if (requestedChainIds) {
				networks = networks.filter((network) => requestedChainIds.includes(network.chainId));
			}

			const networkSubgraphs: NetworkSubgraphs[] = networks
				.map((network) => {
					const subgraphs: SubgraphEndpoints = {};

					for (const type of requestedTypes) {
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
				.filter((item) => Object.keys(item.subgraphs).length > 0); // Only include networks with at least one subgraph

			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(networkSubgraphs, null, 2),
					},
				],
			};
		},
	);
};

export const createIntrospectSubgraphSchemaTool = (server: McpServer) => {
	server.tool(
		"introspect-subgraph-schema",
		"Introspect a Superfluid subgraph schema by network and type. Returns the GraphQL schema definition.",
		{
			chainId: z.number().int().positive(),
			subgraphType: z.enum(["protocol", "vesting", "flowScheduler", "autoWrap"]).default("protocol"),
			skipCache: z.boolean().optional(),
		},
		async (args: {
			chainId: number;
			subgraphType: SubgraphType;
			skipCache?: boolean;
		}) => {
			try {
				let schema: string;

				if (args.skipCache) {
					const endpoint = getSubgraphEndpoint(args.chainId, args.subgraphType);
					if (!endpoint) {
						return {
							isError: true,
							content: [
								{
									type: "text",
									text: `No ${args.subgraphType} subgraph found for network ${args.chainId}`,
								},
							],
						};
					}
					schema = await introspectGraphQLEndpoint(endpoint);
				} else {
					schema = await getCachedSchema(args.chainId, args.subgraphType);
				}

				return {
					content: [
						{
							type: "text",
							text: schema,
						},
					],
				};
			} catch (error) {
				return {
					isError: true,
					content: [
						{
							type: "text",
							text: `Failed to introspect schema: ${error}`,
						},
					],
				};
			}
		},
	);
};

export const createQuerySubgraphTool = (server: McpServer) => {
	server.tool(
		"query-subgraph",
		"Execute a GraphQL query against a Superfluid subgraph. Automatically resolves the endpoint based on network and subgraph type.",
		{
			query: z.string(),
			chainId: z.number().int().positive(),
			subgraphType: z.enum(["protocol", "vesting", "flowScheduler", "autoWrap"]).default("protocol"),
			variables: z.record(z.unknown()).optional(),
			operationName: z.string().optional(),
		},
		async (args: {
			query: string;
			chainId: number;
			subgraphType: SubgraphType;
			variables?: Record<string, unknown>;
			operationName?: string;
		}) => {
			try {
				// Validate the query syntax first
				parse(args.query);

				// Get the endpoint
				const endpoint = getSubgraphEndpoint(args.chainId, args.subgraphType);
				if (!endpoint) {
					return {
						isError: true,
						content: [
							{
								type: "text",
								text: `No ${args.subgraphType} subgraph found for network ${args.chainId}`,
							},
						],
					};
				}

				// Execute the query
				const data = await executeGraphQLQuery(endpoint, args.query, args.variables, args.operationName);

				return {
					content: [
						{
							type: "text",
							text: JSON.stringify(data, null, 2),
						},
					],
				};
			} catch (error) {
				return {
					isError: true,
					content: [
						{
							type: "text",
							text: `Failed to execute GraphQL query: ${error}`,
						},
					],
				};
			}
		},
	);
};
