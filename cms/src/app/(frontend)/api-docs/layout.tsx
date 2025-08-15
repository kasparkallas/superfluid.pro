import type React from "react";

export default function ApiDocsLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<div
			style={{
				minHeight: "100vh",
				background: "white",
				color: "#3b4151",
			}}
		>
			{children}
		</div>
	);
}
