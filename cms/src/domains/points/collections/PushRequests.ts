import type { CollectionConfig } from "payload"
import { AccessControl } from "../../../utils/AccessControl"
import { PUSH_REQUEST_STATUS } from "../types"

export const PushRequests: CollectionConfig = {
	slug: "push-requests",
	admin: {
		useAsTitle: "id",
		defaultColumns: ["id", "campaign", "eventCount", "status", "createdAt", "processedAt"],
		group: "Points",
	},
	access: {
		read: AccessControl.adminOnly,
		create: () => false, // Only created programmatically via /points/push
		update: AccessControl.adminOnly,
		delete: AccessControl.adminOnly,
	},
	fields: [
		{
			name: "campaign",
			type: "relationship",
			relationTo: "campaigns",
			required: true,
			hasMany: false,
			index: true,
			admin: {
				description: "The campaign this push request belongs to",
			},
		},
		{
			name: "payload",
			type: "json",
			required: true,
			admin: {
				description: "Full validated request payload for audit trail and reprocessing",
			},
		},
		{
			name: "eventCount",
			type: "number",
			required: true,
			admin: {
				readOnly: true,
				description: "Number of events in the payload",
			},
		},
		{
			name: "status",
			type: "select",
			required: true,
			defaultValue: PUSH_REQUEST_STATUS.PENDING,
			index: true,
			options: [
				{ label: "Pending", value: PUSH_REQUEST_STATUS.PENDING },
				{ label: "Processing", value: PUSH_REQUEST_STATUS.PROCESSING },
				{ label: "Completed", value: PUSH_REQUEST_STATUS.COMPLETED },
				{ label: "Failed", value: PUSH_REQUEST_STATUS.FAILED },
			],
			admin: {
				description: "Processing status of this push request",
			},
		},
		{
			name: "error",
			type: "text",
			admin: {
				description: "Error message if processing failed",
				condition: (data) => data?.status === PUSH_REQUEST_STATUS.FAILED,
			},
		},
		{
			name: "processedAt",
			type: "date",
			admin: {
				readOnly: true,
				description: "When this push request finished processing",
				date: {
					pickerAppearance: "dayAndTime",
				},
			},
		},
	],
}
