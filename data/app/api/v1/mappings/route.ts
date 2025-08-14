import { NextResponse } from "next/server";
import { createStorageProvider, getStorageConfig } from "@/features/storage";
import { ApiErrorSchema, CoinGeckoMappingsSchema } from "@/lib/api/schemas";

export async function GET() {
	try {
		// Get data using existing storage abstraction
		const storageConfig = getStorageConfig(process.env.NODE_ENV === "production" ? "blob" : "local");
		const storage = createStorageProvider(storageConfig);

		const mappingsJson = await storage.get("coingecko-mappings/super-token-ids.json");
		if (!mappingsJson) {
			const errorResponse = ApiErrorSchema.parse({
				message: "CoinGecko mappings not found",
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		const mappingsData = JSON.parse(mappingsJson);

		// Validate response
		const responseData = CoinGeckoMappingsSchema.parse(mappingsData);

		return NextResponse.json(responseData, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		});
	} catch (error) {
		console.error("API Error fetching CoinGecko mappings:", error);
		const errorResponse = ApiErrorSchema.parse({
			message: "Internal server error",
		});
		return NextResponse.json(errorResponse, { status: 500 });
	}
}

export const revalidate = 3600; // 1 hour
