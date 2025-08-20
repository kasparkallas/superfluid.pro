import { expect, type Page, test } from "@playwright/test"

test.describe("Frontend", () => {
	let _page: Page

	test.beforeAll(async ({ browser }, _testInfo) => {
		const context = await browser.newContext()
		_page = await context.newPage()
	})

	test("can go on homepage", async ({ page }) => {
		await page.goto("http://localhost:3000")

		await expect(page).toHaveTitle(/Payload Blank Template/)

		const headging = page.locator("h1").first()

		await expect(headging).toHaveText("Welcome to your new project.")
	})
})
