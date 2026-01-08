import { defineConfig } from "@trigger.dev/sdk"

export default defineConfig({
	project: "proj_krcutfhqxlahqcrwbzbq",
	runtime: "node",
	logLevel: "log",
	// The max compute seconds a task is allowed to run. If the task run exceeds this duration, it will be stopped.
	// You can override this on an individual task.
	// See https://trigger.dev/docs/runs/max-duration
	maxDuration: 3600,
	retries: {
		enabledInDev: true,
		default: {
			maxAttempts: 3,
			minTimeoutInMs: 1000,
			maxTimeoutInMs: 10000,
			factor: 2,
			randomize: true,
		},
	},
	dirs: ["./src/domains/tokens/trigger", "./src/domains/points/trigger"],
	build: {
		external: ["sharp"],
		// extensions: [syncVercelEnvVars()], // Doesn't work well with the Neon Vercel integration as Neon changes the database URL for preview branches but it won't appear as the environment variable on Vercel.
	},
})
