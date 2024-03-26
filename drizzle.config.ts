import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgresql://lingo_owner:x8vXHr2YsbEj@ep-dry-voice-a5oymc2z.us-east-2.aws.neon.tech/lingo?sslmode=require",
  },
} satisfies Config;
