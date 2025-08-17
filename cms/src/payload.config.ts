import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { buildConfig } from "payload";
import { sharedConfig } from "./payload.config.shared";

// Default config for production (used by generated files)
export default buildConfig({
	...sharedConfig,
	db: vercelPostgresAdapter({
		pool: {
			connectionString: process.env.POSTGRES_URL || "",
		},
	}),
});
