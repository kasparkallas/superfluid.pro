import { isAddress } from "viem"
import { z } from "zod"

// Ethereum address schema with validation
export const addressSchema = z
	.string()
	.min(1, "Address is required")
	.refine(isAddress, "Invalid Ethereum address format")
	.transform((val) => val.toLowerCase())

// Optional address schema
export const optionalAddressSchema = z.union([addressSchema, z.literal(""), z.undefined()]).optional()

// URL schema for RPC endpoints and subgraph endpoints
export const urlSchema = z.string().url("Invalid URL format")

// Optional URL schema
export const optionalUrlSchema = z.union([urlSchema, z.literal(""), z.undefined()]).optional()

// Token-specific validation schemas
export const decimalsSchema = z
	.number()
	.int("Decimals must be an integer")
	.min(1, "Decimals must be at least 1")
	.max(18, "Decimals must be at most 18")

export const symbolSchema = z.string().min(1, "Symbol is required").max(20, "Symbol must be 20 characters or less")

// Logo URI schema - accepts valid URLs or empty string/undefined
export const logoUriSchema = z.union([z.string().url("Invalid URL format"), z.literal(""), z.undefined()])

// Helper function for cleaner Zod validation in Payload fields
export const validateWithZod = <T>(schema: z.ZodSchema<T>, value: unknown): true | string => {
	const result = schema.safeParse(value)
	return result.success ? true : result.error.issues[0].message
}

// Transform function for address fields in Payload
export const transformAddress = (value: unknown): string | undefined => {
	if (typeof value === "string" && value) {
		return value.toLowerCase()
	}
	return value as string | undefined
}
