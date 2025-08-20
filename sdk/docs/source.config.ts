import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import { createGenerator, remarkAutoTypeTable } from "fumadocs-typescript"

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
	dir: "content/docs",
})

const generator = createGenerator()

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [[remarkAutoTypeTable, { generator }]],
	},
})
