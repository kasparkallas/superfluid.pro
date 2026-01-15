import { task } from "@trigger.dev/sdk"
import { getPayloadInstance } from "@/payload"
import { syncStackLeaderboard } from "./sync-stack-leaderboard"

// S4 Campaign Configuration
const S4_CAMPAIGNS = [
	{
		id: 7845,
		stackLeaderboardId: "leaderboard-40a3-78225-7849",
		name: "S4 streme.fun",
		slug: "s4-streme-fun",
		disableNegativeSync: false,
	},
	{
		id: 7850,
		stackLeaderboardId: "leaderboard-40a3-78225-7850",
		name: "S4 SuperBoring",
		slug: "s4-superboring",
		disableNegativeSync: false,
	},
	{
		id: 7853,
		stackLeaderboardId: "leaderboard-40a3-78225-7853",
		name: "S4 Community Activations",
		slug: "s4-community-activations",
		disableNegativeSync: false,
	},
	{
		id: 7855,
		stackLeaderboardId: "leaderboard-40a3-78225-7855",
		name: "S4 SUP reserve names",
		slug: "s4-sup-reserve-names",
		disableNegativeSync: false,
	},
	{
		id: 7846,
		stackLeaderboardId: "leaderboard-40a3-78225-7846",
		name: "S4 Degen Dogs",
		slug: "s4-degen-dogs",
		disableNegativeSync: false,
	},
	{
		id: 7857,
		stackLeaderboardId: "leaderboard-40a3-78225-7857",
		name: "S4 Giveth",
		slug: "s4-giveth",
		disableNegativeSync: false,
	},
	{
		id: 7859,
		stackLeaderboardId: "leaderboard-40a3-78225-7859",
		name: "S4 Gardens",
		slug: "s4-gardens",
		disableNegativeSync: false,
	},
	{
		id: 7860,
		stackLeaderboardId: "leaderboard-40a3-78225-7860",
		name: "S4 GoodDollar",
		slug: "s4-gooddollar",
		disableNegativeSync: false,
	},
] as const

type SyncS4CampaignsPayload = {
	syncPoints?: boolean // Default false = don't sync points
	persist?: boolean // Default false = dry-run (no DB writes)
}

/**
 * Ensures all S4 campaigns exist in the CMS and optionally syncs their entries from Stack.
 *
 * Usage:
 * - { } - Dry-run: see what campaigns would be created (no DB writes)
 * - { syncPoints: true } - Dry-run with sync preview
 * - { persist: true } - Actually create campaigns
 * - { persist: true, syncPoints: true } - Create campaigns + persist synced points
 *
 * Note: disableNegativeSync is configured per-campaign in S4_CAMPAIGNS array.
 */
export const syncS4Campaigns = task({
	id: "sync-s4-campaigns",
	retry: {
		maxAttempts: 1,
	},
	run: async (payload: SyncS4CampaignsPayload) => {
		const { syncPoints = false, persist = false } = payload
		const db = await getPayloadInstance()

		console.log(`Starting S4 campaigns sync: syncPoints=${syncPoints}, persist=${persist}`)

		const results = {
			campaignsCreated: 0,
			campaignsExisting: 0,
			syncResults: [] as Array<{ campaign: string; result: unknown }>,
		}

		// Phase 1: Ensure all campaigns exist (only create if persist=true)
		console.log("Phase 1: Checking S4 campaigns...")
		for (const campaign of S4_CAMPAIGNS) {
			try {
				await db.findByID({ collection: "campaigns", id: campaign.id })
				console.log(`Campaign ${campaign.name} (${campaign.id}) already exists`)
				results.campaignsExisting++
			} catch {
				if (persist) {
					await db.create({
						collection: "campaigns",
						data: { id: campaign.id, name: campaign.name, slug: campaign.slug },
					})
					console.log(`Created campaign ${campaign.name} (${campaign.id})`)
				} else {
					console.log(`Would create campaign ${campaign.name} (${campaign.id}) [dry-run]`)
				}
				results.campaignsCreated++
			}
		}

		console.log(
			`Phase 1 complete: ${results.campaignsCreated} ${persist ? "created" : "would be created"}, ${results.campaignsExisting} already existed`,
		)

		// Phase 2: Optionally sync points from Stack
		if (syncPoints) {
			console.log("Phase 2: Syncing points from Stack...")
			for (const campaign of S4_CAMPAIGNS) {
				console.log(`Syncing points for ${campaign.name}...`)
				const syncResult = await syncStackLeaderboard.triggerAndWait({
					stackLeaderboardId: campaign.stackLeaderboardId,
					campaignId: campaign.id,
					persist,
					disableNegativeSync: campaign.disableNegativeSync,
				})
				results.syncResults.push({ campaign: campaign.name, result: syncResult })
			}
			console.log("Phase 2 complete")
		} else {
			console.log("Phase 2 skipped: syncPoints=false")
		}

		return results
	},
})
