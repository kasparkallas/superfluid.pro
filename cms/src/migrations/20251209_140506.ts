import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-vercel-postgres"

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_api_keys_status" AS ENUM('active', 'revoked');
  CREATE TYPE "public"."enum_push_requests_status" AS ENUM('pending', 'processing', 'completed', 'failed');
  CREATE TABLE "campaigns" (
  	"id" numeric PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "api_keys" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"campaign_id" numeric NOT NULL,
  	"raw_key" varchar,
  	"key_hash" varchar,
  	"key_prefix" varchar,
  	"status" "enum_api_keys_status" DEFAULT 'active' NOT NULL,
  	"last_used_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "push_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"campaign_id" numeric NOT NULL,
  	"payload" jsonb NOT NULL,
  	"event_count" numeric NOT NULL,
  	"status" "enum_push_requests_status" DEFAULT 'pending' NOT NULL,
  	"error" varchar,
  	"processed_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "point_events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"campaign_id" numeric NOT NULL,
  	"push_request_id" integer,
  	"event_name" varchar NOT NULL,
  	"account" varchar NOT NULL,
  	"points" numeric NOT NULL,
  	"unique_id" varchar,
  	"dedup_key" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "point_balances" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"campaign_id" numeric NOT NULL,
  	"account" varchar NOT NULL,
  	"total_points" numeric DEFAULT 0 NOT NULL,
  	"event_count" numeric DEFAULT 0 NOT NULL,
  	"last_event_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "point_balances_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" varchar NOT NULL,
  	"path" varchar NOT NULL,
  	"point_events_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "campaigns_id" numeric;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "api_keys_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "push_requests_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "point_events_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "point_balances_id" varchar;
  ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "public"."campaigns"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "push_requests" ADD CONSTRAINT "push_requests_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "public"."campaigns"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "point_events" ADD CONSTRAINT "point_events_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "public"."campaigns"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "point_events" ADD CONSTRAINT "point_events_push_request_id_push_requests_id_fk" FOREIGN KEY ("push_request_id") REFERENCES "public"."push_requests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "point_balances" ADD CONSTRAINT "point_balances_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "public"."campaigns"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "point_balances_rels" ADD CONSTRAINT "point_balances_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."point_balances"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "point_balances_rels" ADD CONSTRAINT "point_balances_rels_point_events_fk" FOREIGN KEY ("point_events_id") REFERENCES "public"."point_events"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "campaigns_slug_idx" ON "campaigns" USING btree ("slug");
  CREATE INDEX "campaigns_updated_at_idx" ON "campaigns" USING btree ("updated_at");
  CREATE INDEX "campaigns_created_at_idx" ON "campaigns" USING btree ("created_at");
  CREATE INDEX "api_keys_campaign_idx" ON "api_keys" USING btree ("campaign_id");
  CREATE UNIQUE INDEX "api_keys_key_hash_idx" ON "api_keys" USING btree ("key_hash");
  CREATE INDEX "api_keys_updated_at_idx" ON "api_keys" USING btree ("updated_at");
  CREATE INDEX "api_keys_created_at_idx" ON "api_keys" USING btree ("created_at");
  CREATE INDEX "push_requests_campaign_idx" ON "push_requests" USING btree ("campaign_id");
  CREATE INDEX "push_requests_status_idx" ON "push_requests" USING btree ("status");
  CREATE INDEX "push_requests_updated_at_idx" ON "push_requests" USING btree ("updated_at");
  CREATE INDEX "push_requests_created_at_idx" ON "push_requests" USING btree ("created_at");
  CREATE INDEX "point_events_campaign_idx" ON "point_events" USING btree ("campaign_id");
  CREATE INDEX "point_events_push_request_idx" ON "point_events" USING btree ("push_request_id");
  CREATE INDEX "point_events_event_name_idx" ON "point_events" USING btree ("event_name");
  CREATE INDEX "point_events_account_idx" ON "point_events" USING btree ("account");
  CREATE INDEX "point_events_unique_id_idx" ON "point_events" USING btree ("unique_id");
  CREATE UNIQUE INDEX "point_events_dedup_key_idx" ON "point_events" USING btree ("dedup_key");
  CREATE INDEX "point_events_updated_at_idx" ON "point_events" USING btree ("updated_at");
  CREATE INDEX "point_events_created_at_idx" ON "point_events" USING btree ("created_at");
  CREATE INDEX "point_balances_campaign_idx" ON "point_balances" USING btree ("campaign_id");
  CREATE INDEX "point_balances_account_idx" ON "point_balances" USING btree ("account");
  CREATE INDEX "point_balances_updated_at_idx" ON "point_balances" USING btree ("updated_at");
  CREATE INDEX "point_balances_created_at_idx" ON "point_balances" USING btree ("created_at");
  CREATE INDEX "point_balances_rels_order_idx" ON "point_balances_rels" USING btree ("order");
  CREATE INDEX "point_balances_rels_parent_idx" ON "point_balances_rels" USING btree ("parent_id");
  CREATE INDEX "point_balances_rels_path_idx" ON "point_balances_rels" USING btree ("path");
  CREATE INDEX "point_balances_rels_point_events_id_idx" ON "point_balances_rels" USING btree ("point_events_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_campaigns_fk" FOREIGN KEY ("campaigns_id") REFERENCES "public"."campaigns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_api_keys_fk" FOREIGN KEY ("api_keys_id") REFERENCES "public"."api_keys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_push_requests_fk" FOREIGN KEY ("push_requests_id") REFERENCES "public"."push_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_point_events_fk" FOREIGN KEY ("point_events_id") REFERENCES "public"."point_events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_point_balances_fk" FOREIGN KEY ("point_balances_id") REFERENCES "public"."point_balances"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_campaigns_id_idx" ON "payload_locked_documents_rels" USING btree ("campaigns_id");
  CREATE INDEX "payload_locked_documents_rels_api_keys_id_idx" ON "payload_locked_documents_rels" USING btree ("api_keys_id");
  CREATE INDEX "payload_locked_documents_rels_push_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("push_requests_id");
  CREATE INDEX "payload_locked_documents_rels_point_events_id_idx" ON "payload_locked_documents_rels" USING btree ("point_events_id");
  CREATE INDEX "payload_locked_documents_rels_point_balances_id_idx" ON "payload_locked_documents_rels" USING btree ("point_balances_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "campaigns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "api_keys" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "push_requests" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "point_events" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "point_balances" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "point_balances_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "payload_kv" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "campaigns" CASCADE;
  DROP TABLE "api_keys" CASCADE;
  DROP TABLE "push_requests" CASCADE;
  DROP TABLE "point_events" CASCADE;
  DROP TABLE "point_balances" CASCADE;
  DROP TABLE "point_balances_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP INDEX "payload_locked_documents_rels_campaigns_id_idx";
  DROP INDEX "payload_locked_documents_rels_api_keys_id_idx";
  DROP INDEX "payload_locked_documents_rels_push_requests_id_idx";
  DROP INDEX "payload_locked_documents_rels_point_events_id_idx";
  DROP INDEX "payload_locked_documents_rels_point_balances_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "campaigns_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "api_keys_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "push_requests_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "point_events_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "point_balances_id";
  DROP TYPE "public"."enum_api_keys_status";
  DROP TYPE "public"."enum_push_requests_status";`)
}
