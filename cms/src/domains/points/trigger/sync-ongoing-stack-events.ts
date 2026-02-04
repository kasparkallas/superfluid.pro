import { task } from "@trigger.dev/sdk/v3"
import { migrateFromStackEvents } from "./migrate-from-stack-events"

// Configure campaigns that sync from Stack.so
const STACK_SYNC_CAMPAIGNS = [
	{ campaignId: 7845, stackPointSystemId: 7845, envKey: "STACK_API_KEY_CAMPAIGN_7845" },
	// { campaignId: 7860, stackPointSystemId: 7860, envKey: "STACK_API_KEY_CAMPAIGN_7860" },
] as const

type SyncStackEventsPayload = {
	persist?: boolean // Default true
	skipReplay?: boolean // Default false
}

/**
 * Manual task to sync Stack.so events as informational records.
 * Triggers the migration task for each configured campaign.
 */
export const syncOngoingStackEvents = task({
	id: "sync-ongoing-stack-events",
	run: async (payload: SyncStackEventsPayload) => {
		const { persist = true, skipReplay = false } = payload

		console.log(
			`Starting Stack events sync for ${STACK_SYNC_CAMPAIGNS.length} campaigns (persist=${persist}, skipReplay=${skipReplay})`,
		)

		for (const config of STACK_SYNC_CAMPAIGNS) {
			await migrateFromStackEvents.trigger({
				campaignId: config.campaignId,
				stackPointSystemId: config.stackPointSystemId,
				stackApiKeyEnvVar: config.envKey,
				persist,
				skipReplay,
			})

			console.log(`Triggered sync for campaign ${config.campaignId}`)
		}
	},
})
