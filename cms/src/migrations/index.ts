import * as migration_20250818_102658_initial from "./20250818_102658_initial"
import * as migration_20250822_123052_order from "./20250822_123052_order"

export const migrations = [
	{
		up: migration_20250818_102658_initial.up,
		down: migration_20250818_102658_initial.down,
		name: "20250818_102658_initial",
	},
	{
		up: migration_20250822_123052_order.up,
		down: migration_20250822_123052_order.down,
		name: "20250822_123052_order",
	},
]
