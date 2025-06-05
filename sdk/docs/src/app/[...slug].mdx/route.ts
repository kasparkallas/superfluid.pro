import { getLLMText } from "@/lib/llm-utils";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import type { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function generateStaticParams() {
	const params = source.getPages().map((page) => ({
		slug: page.slugs,
	}));
	console.log("generateStaticParams returns:", JSON.stringify(params, null, 2));
	return params;
}

export async function GET(request: NextRequest, context: { params: Promise<{ slug: string[] }> }) {
	console.log("GET handler received context:", JSON.stringify(context, null, 2));

	const routeParams = await context.params;
	console.log("GET handler received routeParams (after await):", JSON.stringify(routeParams, null, 2));

	if (!routeParams || typeof routeParams !== "object" || !routeParams.slug) {
		console.error("Error: routeParams is invalid or routeParams.slug is undefined/null.");
		console.error("routeParams value:", JSON.stringify(routeParams, null, 2));
		return new Response("Internal server error: Invalid parameters received by GET handler.", { status: 500 });
	}

	const page = source.getPage(routeParams.slug);

	if (!page) {
		console.log(`Page not found for slug: ${routeParams.slug.join("/")}`);
		notFound();
	}

	const llmText = await getLLMText(page);

	return new Response(llmText, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
			"Cache-Control": "public, max-age=3600, s-maxage=86400",
		},
	});
}
