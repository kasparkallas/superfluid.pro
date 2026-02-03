import { schedules } from "@trigger.dev/sdk/v3"
import { migrateFromStackEvents } from "./migrate-from-stack-events"

// Configure campaigns that sync from Stack.so
const STACK_SYNC_CAMPAIGNS = [
	{ campaignId: 7845, stackPointSystemId: 7845, envKey: "STACK_API_KEY_CAMPAIGN_7845" },
	{ campaignId: 7860, stackPointSystemId: 7860, envKey: "STACK_API_KEY_CAMPAIGN_7860" },
] as const

/**
 * Scheduled task to periodically sync Stack.so events as informational records.
 * Runs every 6 hours and triggers the migration task for each configured campaign.
 */
export const syncStackEventsScheduled = schedules.task({
	id: "sync-stack-events-scheduled",
	cron: "0 */6 * * *", // Every 6 hours
	run: async () => {
		console.log(`Starting scheduled Stack events sync for ${STACK_SYNC_CAMPAIGNS.length} campaigns`)

		for (const config of STACK_SYNC_CAMPAIGNS) {
			await migrateFromStackEvents.trigger({
				campaignId: config.campaignId,
				stackPointSystemId: config.stackPointSystemId,
				stackApiKeyEnvVar: config.envKey, // Pass env var name, not the value (prevents logging in dashboard)
				persist: true,
			})

			console.log(`Triggered sync for campaign ${config.campaignId}`)
		}
	},
})
