"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type React from "react"
import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers(props: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 1000 * 60 * 5, // 5 minutes
						gcTime: 1000 * 60 * 30, // 30 minutes
						retry: (failureCount, error) => {
							// Don't retry 4xx errors
							if (error instanceof Error && error.message.includes("4")) {
								return false
							}
							return failureCount < 3
						},
					},
				},
			}),
	)

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				{props.children}
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
