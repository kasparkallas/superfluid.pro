import * as migration_20250818_102658_initial from "./20250818_102658_initial"

export const migrations = [
	{
		up: migration_20250818_102658_initial.up,
		down: migration_20250818_102658_initial.down,
		name: "20250818_102658_initial",
	},
]
