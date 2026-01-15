// storage-adapter-import-placeholder

import path from "node:path"
import { fileURLToPath } from "node:url"
import { nodemailerAdapter } from "@payloadcms/email-nodemailer"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import type { Payload } from "payload"
import sharp from "sharp"
import { Users } from "./collections/Users"
// import { Media } from './collections/Media'
import { ApiKeys, Campaigns, PointBalances, PointEvents, PushRequests } from "./domains/points/collections"
import { Chains, Tokens } from "./domains/tokens/collections"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isEmailEnabled = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS

export const sharedConfig = {
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	onInit: async (payload: Payload) => {
		const isDev = process.env.NODE_ENV === "development"
		const isSQLite = !process.env.POSTGRES_URL

		if (!isDev || !isSQLite) return

		const existingUsers = await payload.find({
			collection: "users",
			limit: 1,
		})

		if (existingUsers.totalDocs === 0) {
			await payload.create({
				collection: "users",
				data: {
					email: "admin@superfluid.pro",
					password: "admin123",
					role: "admin",
				},
			})
			payload.logger.info("Seeded admin user: admin@superfluid.pro / admin123")
		}
	},
	collections: [Users, Tokens, Chains, Campaigns, ApiKeys, PushRequests, PointEvents, PointBalances],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	sharp,
	plugins: [
		payloadCloudPlugin(),
		vercelBlobStorage({
			enabled: true,
			collections: {},
			token: process.env.BLOB_READ_WRITE_TOKEN,
		}),
	],
	email: isEmailEnabled
		? nodemailerAdapter({
				defaultFromAddress: "cms@superfluid.pro",
				defaultFromName: "Superfluid CMS",
				transportOptions: {
					host: process.env.SMTP_HOST,
					port: 587,
					secure: false,
					auth: {
						user: process.env.SMTP_USER,
						pass: process.env.SMTP_PASS,
					},
					tls: {
						rejectUnauthorized: true,
						ciphers: "SSLv3",
					},
				},
			})
		: undefined,
}
