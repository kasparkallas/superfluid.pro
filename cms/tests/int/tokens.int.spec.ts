import { getPayload, type Payload } from "payload"
import { beforeAll, describe, expect, it } from "vitest"
import config from "@/payload.config"

let payload: Payload

describe("Tokens Collection", () => {
	beforeAll(async () => {
		const payloadConfig = await config
		payload = await getPayload({ config: payloadConfig })
	})

	describe("Underlying Address Validation", () => {
		const getBaseToken = (suffix: string) => ({
			chainId: 1,
			address: `0x${suffix.padEnd(40, "0")}`,
			name: "Test Token",
			decimals: 18,
			symbol: "TEST",
			order: 0,
		})

		it("should reject underlying address for Pure Super Token", async () => {
			await expect(
				payload.create({
					collection: "tokens",
					data: {
						...getBaseToken("1"),
						tokenType: "pureSuperToken",
						underlyingAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
					},
				}),
			).rejects.toThrow()
		})

		it("should accept empty underlying address for Pure Super Token", async () => {
			const token = await payload.create({
				collection: "tokens",
				data: {
					...getBaseToken("2"),
					tokenType: "pureSuperToken",
					underlyingAddress: "",
				},
			})
			expect(token.underlyingAddress).toBeFalsy()
		})

		it("should reject underlying address for Underlying Token", async () => {
			await expect(
				payload.create({
					collection: "tokens",
					data: {
						...getBaseToken("3"),
						tokenType: "underlyingToken",
						underlyingAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
					},
				}),
			).rejects.toThrow()
		})

		it("should accept empty underlying address for Underlying Token", async () => {
			const token = await payload.create({
				collection: "tokens",
				data: {
					...getBaseToken("4"),
					tokenType: "underlyingToken",
					underlyingAddress: "",
				},
			})
			expect(token.underlyingAddress).toBeFalsy()
		})

		it("should require underlying address for Wrapper Super Token", async () => {
			await expect(
				payload.create({
					collection: "tokens",
					data: {
						...getBaseToken("5"),
						tokenType: "wrapperSuperToken",
						underlyingAddress: "",
					},
				}),
			).rejects.toThrow()
		})

		it("should accept valid underlying address for Wrapper Super Token", async () => {
			const token = await payload.create({
				collection: "tokens",
				data: {
					...getBaseToken("6"),
					tokenType: "wrapperSuperToken",
					underlyingAddress: "0xABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCD",
				},
			})
			expect(token.underlyingAddress).toBe("0xabcdefabcdefabcdefabcdefabcdefabcdefabcd") // normalized to lowercase
		})

		it("should reject invalid address format for Wrapper Super Token", async () => {
			await expect(
				payload.create({
					collection: "tokens",
					data: {
						...getBaseToken("7"),
						tokenType: "wrapperSuperToken",
						underlyingAddress: "invalid-address",
					},
				}),
			).rejects.toThrow()
		})

		it("should accept underlying address for Native Asset Super Token", async () => {
			const token = await payload.create({
				collection: "tokens",
				data: {
					...getBaseToken("8"),
					tokenType: "nativeAssetSuperToken",
					underlyingAddress: "0xABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCD",
				},
			})
			expect(token.underlyingAddress).toBe("0xabcdefabcdefabcdefabcdefabcdefabcdefabcd") // normalized to lowercase
		})

		it("should accept empty underlying address for Native Asset Super Token", async () => {
			const token = await payload.create({
				collection: "tokens",
				data: {
					...getBaseToken("9"),
					tokenType: "nativeAssetSuperToken",
					underlyingAddress: "",
				},
			})
			expect(token.underlyingAddress).toBeFalsy()
		})

		it("should reject invalid address format for Native Asset Super Token", async () => {
			await expect(
				payload.create({
					collection: "tokens",
					data: {
						...getBaseToken("a"),
						tokenType: "nativeAssetSuperToken",
						underlyingAddress: "invalid-address",
					},
				}),
			).rejects.toThrow()
		})
	})
})
