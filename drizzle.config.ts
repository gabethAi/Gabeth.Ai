import * as dotenv from "dotenv";
dotenv.config();
import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env["DATABASE_HOST"] as string,
    user: process.env["DATABASE_USERNAME"] as string,
    password: process.env["DATABASE_PASSWORD"],
    database: process.env["DATABASE_NAME"] as string,
  },
} satisfies Config;
