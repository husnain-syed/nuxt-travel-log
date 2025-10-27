import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;
// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
