// Points domain shared types

import { z } from "zod"

export const CAMPAIGN_STATUS = {
	ACTIVE: "active",
	PAUSED: "paused",
	ENDED: "ended",
} as const

export type CampaignStatus = (typeof CAMPAIGN_STATUS)[keyof typeof CAMPAIGN_STATUS]

export const API_KEY_STATUS = {
	ACTIVE: "active",
	REVOKED: "revoked",
} as const

export type ApiKeyStatus = (typeof API_KEY_STATUS)[keyof typeof API_KEY_STATUS]

export const PUSH_REQUEST_STATUS = {
	PENDING: "pending",
	PROCESSING: "processing",
	COMPLETED: "completed",
	FAILED: "failed",
} as const

export type PushRequestStatus = (typeof PUSH_REQUEST_STATUS)[keyof typeof PUSH_REQUEST_STATUS]

// API Key prefix for identification
export const API_KEY_PREFIX = "sfp_"

// ============================================
// API Response Schemas (for OpenAPI generation)
// ============================================

// Pagination schema (reusable)
export const paginationSchema = z.object({
	page: z.number(),
	limit: z.number(),
	totalDocs: z.number(),
	totalPages: z.number(),
	hasNextPage: z.boolean(),
	hasPrevPage: z.boolean(),
})

export type Pagination = z.infer<typeof paginationSchema>

// Point Event response
export const pointEventResponseSchema = z.object({
	id: z.number(),
	eventName: z.string(),
	account: z.string(),
	points: z.number(),
	uniqueId: z.string().nullable(),
	createdAt: z.string(), // Returns eventTime value
})

export type PointEventResponse = z.infer<typeof pointEventResponseSchema>

// Events list response
export const pointEventsResponseSchema = z.object({
	events: z.array(pointEventResponseSchema),
	pagination: paginationSchema,
})

export type PointEventsResponse = z.infer<typeof pointEventsResponseSchema>

// Single balance response
export const pointBalanceResponseSchema = z.object({
	account: z.string(),
	points: z.number(),
})

export type PointBalanceResponse = z.infer<typeof pointBalanceResponseSchema>

// Multiple balances response
export const pointBalancesResponseSchema = z.object({
	balances: z.array(pointBalanceResponseSchema),
})

export type PointBalancesResponse = z.infer<typeof pointBalancesResponseSchema>

// Event balance response (aggregated by event type)
export const eventBalanceResponseSchema = z.object({
	eventName: z.string(),
	points: z.number(),
	account: z.string().optional(),
})

export type EventBalanceResponse = z.infer<typeof eventBalanceResponseSchema>
