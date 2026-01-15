"use client"

import type { DefaultCellComponentProps } from "payload"

export const CampaignRelatedLinksCell: React.FC<DefaultCellComponentProps> = ({ rowData }) => {
	const campaignId = rowData?.id

	if (!campaignId) return null

	const links = [
		{ label: "Events", collection: "point-events" },
		{ label: "Balances", collection: "point-balances" },
		{ label: "API Keys", collection: "api-keys" },
		{ label: "Requests", collection: "push-requests" },
	]

	return (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			{links.map(({ label, collection }) => (
				<a
					key={collection}
					href={`/admin/collections/${collection}?where[campaign][equals]=${campaignId}`}
					style={{
						fontSize: "12px",
						padding: "2px 6px",
						background: "#f0f0f0",
						borderRadius: "3px",
						textDecoration: "none",
						color: "#333",
					}}
				>
					{label}
				</a>
			))}
		</div>
	)
}
