import { NextResponse } from "next/server"
import { generateOpenApiDocument } from "@/lib/api/registry"

export async function GET() {
	try {
		const spec = generateOpenApiDocument()
		return NextResponse.json(spec, {
			headers: {
				"Cache-Control": "public, s-maxage=86400", // Cache for 24 hours
			},
		})
	} catch (error) {
		console.error("Failed to generate OpenAPI spec:", error)
		return NextResponse.json({ message: "Failed to generate API specification" }, { status: 500 })
	}
}
