import * as dotenv from "dotenv";
dotenv.config();
import type { Config } from "drizzle-kit";

export default {
  schema: "./app/lib/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL || "",
  },
} satisfies Config;
