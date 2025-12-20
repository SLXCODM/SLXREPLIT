import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL environment variable is not set. Database functionality will be disabled.");
}

export const db = process.env.DATABASE_URL
  ? drizzle(postgres(process.env.DATABASE_URL), { schema })
  : null as any;
