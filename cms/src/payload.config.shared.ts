// storage-adapter-import-placeholder

import path from "node:path";
import { fileURLToPath } from "node:url";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { Chains } from "./collections/Chains";
// import { Media } from './collections/Media'
import { Tokens } from "./collections/Tokens";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
	plugins: [payloadCloudPlugin()],
};
