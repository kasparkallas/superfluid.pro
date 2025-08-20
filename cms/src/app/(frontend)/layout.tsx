import type React from "react";
import "./styles.css";
import { Providers } from "./providers";

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
