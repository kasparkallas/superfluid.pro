// storage-adapter-import-placeholder

import path from "node:path";
import { fileURLToPath } from "node:url";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Chains } from "./collections/Chains";
// import { Media } from './collections/Media'
import { Tokens } from "./collections/Tokens";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Use Vercel Postgres in production, SQLite for local development
const db = process.env.POSTGRES_URL
	? vercelPostgresAdapter({
			pool: {
				connectionString: process.env.POSTGRES_URL || "",
			},
		})
	: sqliteAdapter({
			// Local development: SQLite
			client: {
				url: process.env.DATABASE_URI || "file:./payload.db",
			},
		});

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Tokens, Chains],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db,
	sharp,
	plugins: [
		payloadCloudPlugin(),
		// storage-adapter-placeholder
	],
});
