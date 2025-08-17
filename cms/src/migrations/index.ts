import * as migration_20250817_215023_initial from "./20250817_215023_initial";

export const migrations = [
	{
		up: migration_20250817_215023_initial.up,
		down: migration_20250817_215023_initial.down,
		name: "20250817_215023_initial",
	},
];
