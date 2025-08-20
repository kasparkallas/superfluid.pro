import { createMcpHandler } from "@vercel/mcp-adapter"
import { createGetSuperfluidContractAbiTool, createListSuperfluidContractsTool } from "./(tools)/abi-tools"
import {
	createIntrospectSubgraphSchemaTool,
	createListSuperfluidSubgraphEndpointsTool,
	createQuerySubgraphTool,
} from "./(tools)/graphql-tools"
import {
	createGetSuperfluidNetworkMetadataTool,
	createListSuperfluidMetadataNetworksTool,
} from "./(tools)/metadata-tools"
import { createGetSuperfluidResourcesTool } from "./(tools)/resources-tools"
import { createFindSuperfluidTokensTool, createGetSuperfluidTokenTool } from "./(tools)/tokenlist-tools"

const handler = createMcpHandler(
	(server) => {
		// ABI tools
		createListSuperfluidContractsTool(server)
		createGetSuperfluidContractAbiTool(server)

		// GraphQL tools
		createListSuperfluidSubgraphEndpointsTool(server)
		createIntrospectSubgraphSchemaTool(server)
		createQuerySubgraphTool(server)

		// Metadata tools
		createListSuperfluidMetadataNetworksTool(server)
		createGetSuperfluidNetworkMetadataTool(server)

		// Token list tools
		createGetSuperfluidTokenTool(server)
		createFindSuperfluidTokensTool(server)

		// Resources tools
		createGetSuperfluidResourcesTool(server)
	},
	{
		capabilities: {
			tools: {},
		},
	},
	{
		redisUrl: process.env.REDIS_URL,
		sseEndpoint: "/sse",
		streamableHttpEndpoint: "/message",
		verboseLogs: true,
		maxDuration: 60,
	},
)

export { handler as GET, handler as POST, handler as DELETE }
