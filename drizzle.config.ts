import { defineConfig } from "drizzle-kit";

import env from "./app/libs/env";

export default defineConfig({
  out: "./app/libs/db/migrations",
  schema: "./app/libs/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
});
