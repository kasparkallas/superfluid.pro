"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "swagger-ui-react/swagger-ui.css";
import "./theme-newspaper.css";

// Dynamically import SwaggerUI with no SSR to avoid hydration issues
const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
	ssr: false,
	loading: () => (
		<div className="flex items-center justify-center py-12">
			<div className="text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
				<p className="text-gray-600">Loading API documentation...</p>
			</div>
		</div>
	),
});

export default function ApiDocsPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Suppress React strict mode warnings for swagger-ui-react
		const originalConsoleWarn = console.warn;
		console.warn = (...args) => {
			if (typeof args[0] === "string" && args[0].includes("UNSAFE_componentWillReceiveProps")) {
				return;
			}
			originalConsoleWarn.apply(console, args);
		};

		setIsClient(true);

		return () => {
			console.warn = originalConsoleWarn;
		};
	}, []);

	if (!isClient) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Loading API documentation...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-8">
				<div className="bg-white rounded-lg shadow-sm border">
					<SwaggerUI
						url="/openapi.json"
						docExpansion="list"
						defaultModelsExpandDepth={1}
						defaultModelExpandDepth={1}
						displayOperationId={false}
						displayRequestDuration={true}
						filter={true}
						showExtensions={true}
						showCommonExtensions={true}
						tryItOutEnabled={true}
					/>
				</div>
			</div>
		</div>
	);
}
