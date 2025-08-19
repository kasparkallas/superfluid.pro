// storage-adapter-import-placeholder

import path from "node:path";
import { fileURLToPath } from "node:url";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";
import { Chains } from "./collections/Chains";
// import { Media } from './collections/Media'
import { Tokens } from "./collections/Tokens";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isEmailEnabled = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

export const sharedConfig = {
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
};
