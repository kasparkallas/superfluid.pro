import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-vercel-postgres"

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TABLE "users_campaign_permissions_allowed_campaign_ids" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"campaign_id" numeric
  );
  
  ALTER TABLE "users" ADD COLUMN "campaign_permissions_can_access_all_campaigns" boolean DEFAULT false;
  ALTER TABLE "users_campaign_permissions_allowed_campaign_ids" ADD CONSTRAINT "users_campaign_permissions_allowed_campaign_ids_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_campaign_permissions_allowed_campaign_ids_order_idx" ON "users_campaign_permissions_allowed_campaign_ids" USING btree ("_order");
  CREATE INDEX "users_campaign_permissions_allowed_campaign_ids_parent_id_idx" ON "users_campaign_permissions_allowed_campaign_ids" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   DROP TABLE "users_campaign_permissions_allowed_campaign_ids" CASCADE;
  ALTER TABLE "users" DROP COLUMN "campaign_permissions_can_access_all_campaigns";`)
}
