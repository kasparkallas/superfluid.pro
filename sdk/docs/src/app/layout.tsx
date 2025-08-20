import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Open_Sans } from "next/font/google"
import type { ReactNode } from "react"

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	weight: ["300", "400", "500", "600", "700"],
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={openSans.variable} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider
					search={{
						options: {
							// type: 'static',
						},
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	)
}
