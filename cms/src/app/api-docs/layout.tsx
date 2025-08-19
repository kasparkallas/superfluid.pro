import type React from "react";

export default function ApiDocsLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
