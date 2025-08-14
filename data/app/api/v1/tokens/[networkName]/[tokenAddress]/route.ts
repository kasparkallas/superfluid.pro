import { find } from "lodash";
import { type NextRequest, NextResponse } from "next/server";
import type { SuperTokenData } from "@/features/fetch-super-tokens/core/types";
import { createStorageProvider, getStorageConfig } from "@/features/storage";
import { ApiErrorSchema, SuperTokenSchema, TokenParamSchema } from "@/lib/api/schemas";

export async function GET(
	_request: NextRequest,
	context: { params: Promise<{ networkName: string; tokenAddress: string }> },
) {
	try {
		// Await params in Next.js 15
		const params = await context.params;

		// Validate path parameters
		const paramsResult = TokenParamSchema.safeParse(params);
		if (!paramsResult.success) {
			const errorResponse = ApiErrorSchema.parse({
				message: "Invalid network name or token address",
				code: "VALIDATION_ERROR",
			});
			return NextResponse.json(errorResponse, { status: 400 });
		}

		const { networkName, tokenAddress } = paramsResult.data;

		// Get data using existing storage abstraction
		const storageConfig = getStorageConfig(process.env.NODE_ENV === "production" ? "blob" : "local");
		const storage = createStorageProvider(storageConfig);

		// Try to get network-specific data first
		const networkTokensJson = await storage.get(`super-tokens/latest/${networkName}.json`);
		if (!networkTokensJson) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Network '${networkName}' not found`,
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		const networkData = JSON.parse(networkTokensJson);
		const tokens: SuperTokenData[] = networkData.tokens;

		// Find specific token using lodash
		const token = find(tokens, { address: tokenAddress.toLowerCase() }) || find(tokens, { address: tokenAddress });

		if (!token) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Token '${tokenAddress}' not found on network '${networkName}'`,
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		// Validate response
		const responseData = SuperTokenSchema.parse(token);

		return NextResponse.json(responseData, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		});
	} catch (error) {
		console.error("API Error fetching specific token:", error);
		const errorResponse = ApiErrorSchema.parse({
			message: "Internal server error",
		});
		return NextResponse.json(errorResponse, { status: 500 });
	}
}

export const revalidate = 3600; // 1 hour
