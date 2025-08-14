import { type NextRequest, NextResponse } from "next/server";
import { createPrefixedLogger } from "@/features/logger";

const logger = createPrefixedLogger("Rate Limit");

interface RateLimitStore {
	requests: Map<string, number[]>;
}

interface RateLimitConfig {
	windowMs: number; // Time window in milliseconds
	max: number; // Maximum requests per window
}

// Default configuration
const DEFAULT_CONFIG: RateLimitConfig = {
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // 100 requests per 5 minutes
};

// In-memory store for rate limiting
// In production, you might want to use Redis or another distributed store
const store: RateLimitStore = {
	requests: new Map(),
};

// Clean up old entries periodically
setInterval(() => {
	const now = Date.now();
	for (const [key, timestamps] of store.requests.entries()) {
		const validTimestamps = timestamps.filter((timestamp) => now - timestamp < DEFAULT_CONFIG.windowMs);
		if (validTimestamps.length === 0) {
			store.requests.delete(key);
		} else {
			store.requests.set(key, validTimestamps);
		}
	}
}, 60 * 1000); // Clean up every minute

function getClientIdentifier(request: NextRequest): string {
	// Try to get real IP from various headers
	const forwardedFor = request.headers.get("x-forwarded-for");
	const realIp = request.headers.get("x-real-ip");
	const cfConnectingIp = request.headers.get("cf-connecting-ip");

	// Use the first available IP
	const ip = forwardedFor?.split(",")[0]?.trim() || realIp || cfConnectingIp || "unknown";

	return ip;
}

export function createRateLimiter(config: Partial<RateLimitConfig> = {}) {
	const finalConfig = { ...DEFAULT_CONFIG, ...config };

	return async function rateLimit(request: NextRequest): Promise<NextResponse | null> {
		const clientId = getClientIdentifier(request);
		const now = Date.now();

		// Get existing timestamps for this client
		const timestamps = store.requests.get(clientId) || [];

		// Filter out timestamps outside the window
		const validTimestamps = timestamps.filter((timestamp) => now - timestamp < finalConfig.windowMs);

		// Check if limit exceeded
		if (validTimestamps.length >= finalConfig.max) {
			logger.warn("Rate limit exceeded", {
				clientId,
				requests: validTimestamps.length,
				limit: finalConfig.max,
			});

			// Calculate retry after
			const oldestTimestamp = Math.min(...validTimestamps);
			const retryAfterMs = finalConfig.windowMs - (now - oldestTimestamp);
			const retryAfterSeconds = Math.ceil(retryAfterMs / 1000);

			return NextResponse.json(
				{
					message: "Too many requests",
					code: "RATE_LIMIT_EXCEEDED",
					retryAfter: retryAfterSeconds,
				},
				{
					status: 429,
					headers: {
						"Retry-After": retryAfterSeconds.toString(),
						"X-RateLimit-Limit": finalConfig.max.toString(),
						"X-RateLimit-Remaining": "0",
						"X-RateLimit-Reset": new Date(now + retryAfterMs).toISOString(),
					},
				},
			);
		}

		// Add current timestamp
		validTimestamps.push(now);
		store.requests.set(clientId, validTimestamps);

		// Return null to indicate request can proceed
		return null;
	};
}

// Export default rate limiter
export const defaultRateLimiter = createRateLimiter();
