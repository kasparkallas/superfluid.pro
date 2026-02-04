import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-vercel-postgres"

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	// Add column as nullable first (for existing rows)
	await db.execute(sql`
    ALTER TABLE "point_events" ADD COLUMN "event_time" timestamp(3) with time zone;
  `)

	// Backfill existing events: set eventTime = createdAt
	await db.execute(sql`
    UPDATE "point_events" SET "event_time" = "created_at" WHERE "event_time" IS NULL;
  `)

	// Now make it NOT NULL
	await db.execute(sql`
    ALTER TABLE "point_events" ALTER COLUMN "event_time" SET NOT NULL;
  `)

	// Add index for query performance
	await db.execute(sql`
    CREATE INDEX "point_events_event_time_idx" ON "point_events" USING btree ("event_time");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   DROP INDEX "point_events_event_time_idx";
  ALTER TABLE "point_events" DROP COLUMN "event_time";`)
}
