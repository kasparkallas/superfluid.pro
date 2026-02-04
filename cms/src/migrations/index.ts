import * as migration_20250818_102658_initial from "./20250818_102658_initial"
import * as migration_20250822_123052_order from "./20250822_123052_order"
import * as migration_20251209_140506 from "./20251209_140506"
import * as migration_20260128_003116_campaign_permissions from "./20260128_003116_campaign_permissions"
import * as migration_20260203_144022 from "./20260203_144022"
import * as migration_20260203_174920 from "./20260203_174920"

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
	{
		up: migration_20251209_140506.up,
		down: migration_20251209_140506.down,
		name: "20251209_140506",
	},
	{
		up: migration_20260128_003116_campaign_permissions.up,
		down: migration_20260128_003116_campaign_permissions.down,
		name: "20260128_003116_campaign_permissions",
	},
	{
		up: migration_20260203_144022.up,
		down: migration_20260203_144022.down,
		name: "20260203_144022",
	},
	{
		up: migration_20260203_174920.up,
		down: migration_20260203_174920.down,
		name: "20260203_174920",
	},
]
