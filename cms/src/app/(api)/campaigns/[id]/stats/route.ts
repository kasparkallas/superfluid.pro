import { eq, sum } from "@payloadcms/db-vercel-postgres/drizzle"
import { NextResponse } from "next/server"
import { getPayloadInstance } from "@/payload"
import { point_balances } from "@/payload-drizzle-schema"

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const campaignId = parseInt(id, 10)

	if (isNaN(campaignId)) {
		return NextResponse.json({ error: "Invalid campaign ID" }, { status: 400 })
	}

	try {
		const payload = await getPayloadInstance()

		const result = await payload.db.drizzle
			.select({
				totalPoints: sum(point_balances.totalPoints),
			})
			.from(point_balances)
			.where(eq(point_balances.campaign, campaignId))

		const totalPoints = Number(result[0]?.totalPoints ?? 0)

		return NextResponse.json({ totalPoints })
	} catch (error) {
		console.error("Error fetching campaign stats:", error)
		return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
	}
}
