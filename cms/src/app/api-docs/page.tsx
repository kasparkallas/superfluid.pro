"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { useEffect, useState } from "react";

export default function ApiDocsPage() {
	const [baseUrl, setBaseUrl] = useState("");

	useEffect(() => {
		setBaseUrl(window.location.origin);
	}, []);

	return (
		<ApiReferenceReact
			configuration={{
				url: "/openapi.json",
				theme: "purple",
				layout: "modern",
				darkMode: true,
				servers: baseUrl
					? [
							{
								url: baseUrl,
								description: "Current server",
							},
						]
					: undefined,
				defaultHttpClient: {
					targetKey: "js",
					clientKey: "fetch",
				},
				hideDownloadButton: false,
				hideModels: false,
				searchHotKey: "k",
			}}
		/>
	);
}
