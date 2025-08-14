import { find } from "lodash";
import { type NextRequest, NextResponse } from "next/server";
import type { AggregatedData, SuperTokenData } from "@/features/fetch-super-tokens/core/types";
import { createStorageProvider, getStorageConfig } from "@/features/storage";
import { ApiErrorSchema, StoredPriceDataSchema, TokenParamSchema, TokenPriceHistorySchema } from "@/lib/api/schemas";

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

		// IMPORTANT: Always fetch from the aggregated file for consistency with fetchDailyPrices
		const allNetworksData = await storage.get("super-tokens/latest/all-networks.json");
		if (!allNetworksData) {
			const errorResponse = ApiErrorSchema.parse({
				message: "No super token data found",
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		const aggregatedData: AggregatedData = JSON.parse(allNetworksData);

		// Verify network exists
		const networkChainId = Object.entries(aggregatedData.chains).find(([, chain]) => chain.name === networkName)?.[0];

		if (!networkChainId) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Network '${networkName}' not found`,
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		// Find specific token in aggregated data
		const token = find(
			aggregatedData.tokens,
			(t: SuperTokenData) =>
				t.chainId === parseInt(networkChainId) && t.address.toLowerCase() === tokenAddress.toLowerCase(),
		);

		if (!token) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Token '${tokenAddress}' not found on network '${networkName}'`,
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		// Try to get price data - format: daily-prices/{network}/{symbol}_{address}.json
		const priceFileName = `${token.symbol}_${tokenAddress}.json`;
		const priceDataJson = await storage.get(`daily-prices/${networkName}/${priceFileName}`);

		if (!priceDataJson) {
			const errorResponse = ApiErrorSchema.parse({
				message: `Price data not found for token '${tokenAddress}' on network '${networkName}'`,
			});
			return NextResponse.json(errorResponse, { status: 404 });
		}

		const priceData = JSON.parse(priceDataJson);

		// Parse stored data with lenient schema
		const storedData = StoredPriceDataSchema.parse(priceData);

		// Transform to response format
		// IMPORTANT: Always use fresh token data from super-tokens storage
		// The price file contains token data but it might be stale
		const responseData = {
			version: storedData.version,
			timestamp: storedData.timestamp,
			testRun: storedData.testRun,
			token: token, // Use fresh token data fetched above, not from price file
			coingeckoId: storedData.coingeckoId ?? null,
			fetchedAt: storedData.fetchedAt,
			pricesUsd: storedData.pricesUsd,
		};

		// Validate final response
		const validatedResponse = TokenPriceHistorySchema.parse(responseData);

		return NextResponse.json(validatedResponse, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
			},
		});
	} catch (error) {
		console.error("API Error fetching price data:", error);
		const errorResponse = ApiErrorSchema.parse({
			message: "Internal server error",
		});
		return NextResponse.json(errorResponse, { status: 500 });
	}
}

export const revalidate = 3600; // 1 hour
