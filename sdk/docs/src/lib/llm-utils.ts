import type { source } from "@/lib/source";
import type { InferPageType } from "fumadocs-core/source";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";

const processor = remark().use(remarkMdx).use(remarkGfm);

export async function getLLMText(page: InferPageType<typeof source>) {
	const processed = await processor.process({
		path: page.file.path,
		value: page.data.content,
	});

	return `# ${page.data.title}
URL: ${page.url}

${page.data.description || ""}

${processed.value}`;
}
