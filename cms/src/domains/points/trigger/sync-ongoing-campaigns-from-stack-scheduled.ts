import { schedules } from "@trigger.dev/sdk"
import { syncOngoingCampaignsFromStack } from "./sync-ongoing-campaigns-from-stack"

/**
 * Scheduled task that runs every hour to sync ongoing campaigns from Stack.
 * Triggers with persist=true and syncPoints=true to create campaigns and sync points.
 */
export const syncOngoingCampaignsFromStackScheduled = schedules.task({
	id: "sync-ongoing-campaigns-from-stack-scheduled",
	cron: "0 * * * *", // Every hour at minute 0
	run: async () => {
		console.log("Triggering ongoing campaigns sync from Stack...")

		await syncOngoingCampaignsFromStack.trigger({
			syncPoints: true,
			persist: true,
		})

		console.log("Ongoing campaigns sync from Stack triggered")
	},
})
