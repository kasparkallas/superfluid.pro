import type React from "react"

export default function PointsApiDocsLayout(props: { children: React.ReactNode }) {
	const { children } = props

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
