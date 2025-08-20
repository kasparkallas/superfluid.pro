import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres"
import { buildConfig } from "payload"
import { sharedConfig } from "./payload.config.shared"

const isPostgres = !!process.env.POSTGRES_URL

// Default config for production (used by generated files)
export default buildConfig({
	...sharedConfig,
	db: isPostgres
		? vercelPostgresAdapter({
				pool: {
					connectionString: process.env.POSTGRES_URL || "",
				},
				push: false,
			})
		: sqliteAdapter({
				client: {
					url: process.env.DATABASE_URI || "file:./payload.db",
				},
			}),
})
