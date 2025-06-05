import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
	variable: "--font-open-sans-google",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Superfluid Pro",
	description: "Next generation tooling for Superfluid Protocol",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
