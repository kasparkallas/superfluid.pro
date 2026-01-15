"use client"

import { useDocumentInfo } from "@payloadcms/ui"
import { useEffect, useState } from "react"

const COLLECTIONS = [
	{ label: "Point Events", collection: "point-events" },
	{ label: "Point Balances", collection: "point-balances" },
	{ label: "API Keys", collection: "api-keys" },
	{ label: "Push Requests", collection: "push-requests" },
]

export const CampaignRelatedLinksField: React.FC = () => {
	const { id } = useDocumentInfo()
	const [counts, setCounts] = useState<Record<string, number | null>>({})
	const [totalPoints, setTotalPoints] = useState<number | null>(null)

	useEffect(() => {
		if (!id) return

		// Fetch counts for each collection in parallel
		COLLECTIONS.forEach(async ({ collection }) => {
			try {
				const res = await fetch(`/api/${collection}?where[campaign][equals]=${id}&limit=0`)
				const data = await res.json()
				setCounts((prev) => ({ ...prev, [collection]: data.totalDocs }))
			} catch {
				setCounts((prev) => ({ ...prev, [collection]: null }))
			}
		})

		// Fetch total points
		const fetchTotalPoints = async () => {
			try {
				const res = await fetch(`/campaigns/${id}/stats`)
				const data = await res.json()
				setTotalPoints(data.totalPoints)
			} catch {
				setTotalPoints(null)
			}
		}
		fetchTotalPoints()
	}, [id])

	// Don't show on create form (no ID yet)
	if (!id) return null

	return (
		<div className="field-type" style={{ marginBottom: "1.5rem" }}>
			<span className="field-label">Related Entities</span>
			<div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem", marginBottom: "1rem" }}>
				{COLLECTIONS.map(({ label, collection }) => {
					const count = counts[collection]
					return (
						<a
							key={collection}
							href={`/admin/collections/${collection}?where[campaign][equals]=${id}`}
							style={{
								padding: "0.5rem 1rem",
								background: "var(--theme-elevation-50)",
								borderRadius: "4px",
								textDecoration: "none",
								color: "inherit",
								fontSize: "14px",
							}}
						>
							{label} {count !== undefined ? `(${count ?? "?"})` : ""}
						</a>
					)
				})}
			</div>
			<span className="field-label">Campaign Stats</span>
			<div style={{ marginTop: "0.5rem" }}>
				<div
					style={{
						padding: "0.75rem 1rem",
						background: "var(--theme-elevation-100)",
						borderRadius: "4px",
						fontSize: "14px",
						fontWeight: 500,
					}}
				>
					Total Points: {totalPoints != null ? totalPoints.toLocaleString() : "..."}
				</div>
			</div>
		</div>
	)
}
