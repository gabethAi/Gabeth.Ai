import * as schema from "./schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, {
  schema,
});

const migrateDb = async () => {
  console.log("Migrating DB...");
  await migrate(db, { migrationsFolder: "drizzle" });
};

// migrateDb();
