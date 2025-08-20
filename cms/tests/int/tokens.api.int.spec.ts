import { getPayload } from "payload"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import config from "../../src/payload.config"

describe("Tokens API", () => {
	let payload: any

	beforeEach(async () => {
		payload = await getPayload({ config })
	})

	afterEach(async () => {
		if (payload) {
			await payload.db.destroy()
		}
	})

	describe("GET /api/tokens", () => {
		it("should return empty array when no tokens exist", async () => {
			const response = await fetch("http://localhost:3000/api/tokens")
			expect(response.status).toBe(200)

			const data = await response.json()
			expect(data).toHaveProperty("tokens")
			expect(data).toHaveProperty("pagination")
			expect(Array.isArray(data.tokens)).toBe(true)
		})

		it("should accept query parameters", async () => {
			const response = await fetch("http://localhost:3000/api/tokens?limit=10&page=1")
			expect(response.status).toBe(200)

			const data = await response.json()
			expect(data.pagination).toMatchObject({
				page: 1,
				limit: 10,
			})
		})
	})

	describe("GET /api/tokens/[chainId]/[address]", () => {
		it("should return 400 for invalid chainId", async () => {
			const response = await fetch("http://localhost:3000/api/tokens/invalid/0x123")
			expect(response.status).toBe(400)

			const data = await response.json()
			expect(data).toHaveProperty("error")
		})

		it("should return 400 for invalid address", async () => {
			const response = await fetch("http://localhost:3000/api/tokens/1/invalid")
			expect(response.status).toBe(400)

			const data = await response.json()
			expect(data).toHaveProperty("error")
		})

		it("should return 404 for non-existent token", async () => {
			const response = await fetch("http://localhost:3000/api/tokens/1/0x1234567890123456789012345678901234567890")
			expect(response.status).toBe(404)

			const data = await response.json()
			expect(data).toHaveProperty("error")
		})
	})
})
