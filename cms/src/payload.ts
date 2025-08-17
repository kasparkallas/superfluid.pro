import { getPayload } from "payload";

// Dynamically load the appropriate config based on environment
const getConfig = async () => {
	if (process.env.POSTGRES_URL) {
		// Production: Use Postgres config (default payload.config.ts)
		const config = await import("@payload-config");
		return config.default;
	} else {
		// Local development: Use SQLite config
		const config = await import("./payload.config.local");
		return config.default;
	}
};

const config = await getConfig();

// TODO: should lifecycle be handled here somehow?
export const payload = await getPayload({ config });
