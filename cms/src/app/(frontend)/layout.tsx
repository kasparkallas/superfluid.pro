import type React from "react";
import "./styles.css";

export const metadata = {
	description: "A content management system for the Superfluid resources.",
	title: "Superfluid CMS",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
