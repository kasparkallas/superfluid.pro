import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-vercel-postgres"

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'viewer');
  CREATE TYPE "public"."enum_tokens_tags" AS ENUM('streme', 'testnet', 'underlying', 'supertoken');
  CREATE TYPE "public"."enum_tokens_token_type" AS ENUM('underlyingToken', 'pureSuperToken', 'nativeAssetSuperToken', 'wrapperSuperToken');
  CREATE TABLE "users_token_permissions_allowed_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "users_token_permissions_allowed_addresses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar
  );
  
  CREATE TABLE "users_token_permissions_allowed_chain_ids" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"chain_id" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'admin' NOT NULL,
  	"token_permissions_can_edit_all_tokens" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "tokens_tags" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_tokens_tags",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "tokens" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"chain_id" numeric NOT NULL,
  	"address" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"decimals" numeric NOT NULL,
  	"symbol" varchar NOT NULL,
  	"logo_uri" varchar,
  	"is_listed" boolean DEFAULT false,
  	"coingecko_id" varchar,
  	"token_type" "enum_tokens_token_type" NOT NULL,
  	"underlying_address" varchar,
  	"note" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "chains_public_r_p_cs" (
  	"_order" integer NOT NULL,
  	"_parent_id" numeric NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "chains_trusted_forwarders" (
  	"_order" integer NOT NULL,
  	"_parent_id" numeric NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "chains" (
  	"id" numeric PRIMARY KEY NOT NULL,
  	"human_readable_name" varchar NOT NULL,
  	"canonical_name" varchar NOT NULL,
  	"short_name" varchar NOT NULL,
  	"uppercase_name" varchar NOT NULL,
  	"is_deprecated" boolean DEFAULT false NOT NULL,
  	"is_testnet" boolean DEFAULT false NOT NULL,
  	"native_token_symbol" varchar NOT NULL,
  	"native_token_wrapper" varchar NOT NULL,
  	"contracts_v1_resolver" varchar NOT NULL,
  	"contracts_v1_host" varchar NOT NULL,
  	"contracts_v1_governance" varchar,
  	"contracts_v1_cfa_v1" varchar NOT NULL,
  	"contracts_v1_cfa_v1_forwarder" varchar NOT NULL,
  	"contracts_v1_ida_v1" varchar NOT NULL,
  	"contracts_v1_gda_v1" varchar,
  	"contracts_v1_gda_v1_forwarder" varchar,
  	"contracts_v1_super_token_factory" varchar NOT NULL,
  	"contracts_v1_superfluid_loader" varchar NOT NULL,
  	"contracts_v1_toga" varchar,
  	"contracts_v1_batch_liquidator" varchar,
  	"contracts_v1_super_spreader" varchar,
  	"contracts_v1_existential_n_f_t_clone_factory" varchar,
  	"contracts_v1_macro_forwarder" varchar,
  	"start_block_v1" numeric NOT NULL,
  	"logs_query_range" numeric NOT NULL,
  	"explorer" varchar NOT NULL,
  	"subgraph_v1_cli_name" varchar,
  	"subgraph_v1_hosted_endpoint" varchar,
  	"automations_vesting_scheduler" varchar,
  	"automations_vesting_scheduler_v2" varchar,
  	"automations_vesting_scheduler_v3" varchar,
  	"automations_flow_scheduler" varchar,
  	"automations_manager" varchar,
  	"automations_wrap_strategy" varchar,
  	"automations_subgraph_vesting_endpoint" varchar,
  	"automations_subgraph_flow_scheduler_endpoint" varchar,
  	"automations_subgraph_auto_wrap_endpoint" varchar,
  	"coin_gecko_id" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"tokens_id" varchar,
  	"chains_id" numeric
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_token_permissions_allowed_tags" ADD CONSTRAINT "users_token_permissions_allowed_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_token_permissions_allowed_addresses" ADD CONSTRAINT "users_token_permissions_allowed_addresses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_token_permissions_allowed_chain_ids" ADD CONSTRAINT "users_token_permissions_allowed_chain_ids_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tokens_tags" ADD CONSTRAINT "tokens_tags_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chains_public_r_p_cs" ADD CONSTRAINT "chains_public_r_p_cs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chains"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chains_trusted_forwarders" ADD CONSTRAINT "chains_trusted_forwarders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chains"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tokens_fk" FOREIGN KEY ("tokens_id") REFERENCES "public"."tokens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chains_fk" FOREIGN KEY ("chains_id") REFERENCES "public"."chains"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_token_permissions_allowed_tags_order_idx" ON "users_token_permissions_allowed_tags" USING btree ("_order");
  CREATE INDEX "users_token_permissions_allowed_tags_parent_id_idx" ON "users_token_permissions_allowed_tags" USING btree ("_parent_id");
  CREATE INDEX "users_token_permissions_allowed_addresses_order_idx" ON "users_token_permissions_allowed_addresses" USING btree ("_order");
  CREATE INDEX "users_token_permissions_allowed_addresses_parent_id_idx" ON "users_token_permissions_allowed_addresses" USING btree ("_parent_id");
  CREATE INDEX "users_token_permissions_allowed_chain_ids_order_idx" ON "users_token_permissions_allowed_chain_ids" USING btree ("_order");
  CREATE INDEX "users_token_permissions_allowed_chain_ids_parent_id_idx" ON "users_token_permissions_allowed_chain_ids" USING btree ("_parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "tokens_tags_order_idx" ON "tokens_tags" USING btree ("order");
  CREATE INDEX "tokens_tags_parent_idx" ON "tokens_tags" USING btree ("parent_id");
  CREATE INDEX "tokens_updated_at_idx" ON "tokens" USING btree ("updated_at");
  CREATE INDEX "tokens_created_at_idx" ON "tokens" USING btree ("created_at");
  CREATE INDEX "chains_public_r_p_cs_order_idx" ON "chains_public_r_p_cs" USING btree ("_order");
  CREATE INDEX "chains_public_r_p_cs_parent_id_idx" ON "chains_public_r_p_cs" USING btree ("_parent_id");
  CREATE INDEX "chains_trusted_forwarders_order_idx" ON "chains_trusted_forwarders" USING btree ("_order");
  CREATE INDEX "chains_trusted_forwarders_parent_id_idx" ON "chains_trusted_forwarders" USING btree ("_parent_id");
  CREATE INDEX "chains_updated_at_idx" ON "chains" USING btree ("updated_at");
  CREATE INDEX "chains_created_at_idx" ON "chains" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_tokens_id_idx" ON "payload_locked_documents_rels" USING btree ("tokens_id");
  CREATE INDEX "payload_locked_documents_rels_chains_id_idx" ON "payload_locked_documents_rels" USING btree ("chains_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   DROP TABLE "users_token_permissions_allowed_tags" CASCADE;
  DROP TABLE "users_token_permissions_allowed_addresses" CASCADE;
  DROP TABLE "users_token_permissions_allowed_chain_ids" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "tokens_tags" CASCADE;
  DROP TABLE "tokens" CASCADE;
  DROP TABLE "chains_public_r_p_cs" CASCADE;
  DROP TABLE "chains_trusted_forwarders" CASCADE;
  DROP TABLE "chains" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_tokens_tags";
  DROP TYPE "public"."enum_tokens_token_type";`)
}
