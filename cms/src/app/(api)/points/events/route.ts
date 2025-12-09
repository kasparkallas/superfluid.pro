import type { Where } from "payload"
import { isAddress } from "viem"
import { validateApiKey } from "@/domains/points/features/api-key/validateApiKey"
import type { PointEventsResponse } from "@/domains/points/types"
import { getPayloadInstance } from "@/payload"

/**
 * GET /points/events
 * Query events with filters: account, eventName, limit, page
 *
 * Examples:
 * - /points/events
 * - /points/events?account=0x1234...
 * - /points/events?eventName=swap
 * - /points/events?account=0x1234...&eventName=swap&limit=50&page=2
 */
export const GET = async (request: Request): Promise<Response> => {
	// Validate API key
	const auth = await validateApiKey()
	if ("error" in auth) {
		return auth.error
	}

	const { campaign } = auth.data

	try {
		const url = new URL(request.url)
		const accountParam = url.searchParams.get("account")
		const eventNameParam = url.searchParams.get("eventName")
		const limitParam = url.searchParams.get("limit")
		const pageParam = url.searchParams.get("page")

		// Parse and validate limit
		let limit = 50 // default
		if (limitParam) {
			const parsed = Number.parseInt(limitParam, 10)
			if (Number.isNaN(parsed) || parsed < 1 || parsed > 100) {
				return Response.json({ error: "limit must be between 1 and 100" }, { status: 400 })
			}
			limit = parsed
		}

		// Parse and validate page
		let page = 1 // default
		if (pageParam) {
			const parsed = Number.parseInt(pageParam, 10)
			if (Number.isNaN(parsed) || parsed < 1) {
				return Response.json({ error: "page must be a positive integer" }, { status: 400 })
			}
			page = parsed
		}

		// Validate account if provided
		if (accountParam && !isAddress(accountParam)) {
			return Response.json({ error: "Invalid Ethereum address" }, { status: 400 })
		}

		// Build where clause
		const conditions: Where[] = [{ campaign: { equals: campaign.id } }]

		if (accountParam) {
			conditions.push({ account: { equals: accountParam.toLowerCase() } })
		}

		if (eventNameParam) {
			conditions.push({ eventName: { equals: eventNameParam } })
		}

		const payload = await getPayloadInstance()

		const result = await payload.find({
			collection: "point-events",
			where: { and: conditions },
			limit,
			page,
			sort: "-createdAt",
		})

		const response: PointEventsResponse = {
			events: result.docs.map((event) => ({
				id: event.id,
				eventName: event.eventName,
				account: event.account,
				points: event.points,
				uniqueId: event.uniqueId ?? null,
				createdAt: event.createdAt,
			})),
			pagination: {
				page: result.page ?? 1,
				limit: result.limit,
				totalDocs: result.totalDocs,
				totalPages: result.totalPages,
				hasNextPage: result.hasNextPage,
				hasPrevPage: result.hasPrevPage,
			},
		}

		return Response.json(response)
	} catch (error) {
		console.error("Failed to query events:", error)

		return Response.json(
			{
				error: "Failed to query events",
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		)
	}
}
