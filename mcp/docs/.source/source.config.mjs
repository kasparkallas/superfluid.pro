// source.config.ts
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
const docs = defineDocs({
	docs: {
		schema: frontmatterSchema,
	},
	meta: {
		schema: metaSchema,
	},
});
const source_config_default = defineConfig({
	mdxOptions: {
		// MDX options
	},
});
export { source_config_default as default, docs };
