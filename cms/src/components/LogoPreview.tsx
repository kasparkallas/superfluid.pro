"use client"

import { useField } from "@payloadcms/ui"
import type { TextFieldClientComponent } from "payload"
import { useState } from "react"

export const LogoPreview: TextFieldClientComponent = (props) => {
	const { value, setValue } = useField<string>({ path: props.path })
	const [imageError, setImageError] = useState(false)
	const logoUrl = value as string

	const handleImageError = () => {
		setImageError(true)
	}

	const handleImageLoad = () => {
		setImageError(false)
	}

	const label =
		typeof props.field.label === "string"
			? props.field.label
			: props.field.label
				? Object.values(props.field.label)[0]
				: props.field.name

	return (
		<div className="field-type text">
			<label className="field-label" htmlFor={`field-${props.path}`}>
				{label}
				{props.field.required && <span className="required">*</span>}
			</label>

			<div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
				<div style={{ flex: 1 }}>
					<input
						id={`field-${props.path}`}
						type="text"
						value={logoUrl || ""}
						onChange={(e) => setValue(e.target.value)}
						placeholder="Enter logo URL"
					/>
				</div>

				{logoUrl && (
					<div
						style={{
							width: "64px",
							height: "64px",
							border: "1px solid #e1e1e1",
							borderRadius: "4px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "#f9f9f9",
							flexShrink: 0,
						}}
					>
						{!imageError ? (
							<img
								src={logoUrl}
								alt="Token logo"
								onError={handleImageError}
								onLoad={handleImageLoad}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
									borderRadius: "4px",
								}}
							/>
						) : (
							<span
								style={{
									fontSize: "12px",
									color: "#999",
									textAlign: "center",
									padding: "4px",
								}}
							>
								Failed to load image
							</span>
						)}
					</div>
				)}
			</div>

			{props.field.admin?.description && (
				<div className="field-description" style={{ marginTop: "0.5rem" }}>
					{typeof props.field.admin.description === "string"
						? props.field.admin.description
						: Object.values(props.field.admin.description)[0]}
				</div>
			)}
		</div>
	)
}
