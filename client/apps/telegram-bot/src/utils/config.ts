import { config } from "dotenv";
import { Config } from "../types";

// Load environment variables from .env file
config();

export const getConfig = (): Config => {
  const requiredEnvVars = ["BOT_TOKEN"];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }

  return {
    botToken: process.env.BOT_TOKEN!,
    environment: process.env.NODE_ENV || "development",
    logLevel: process.env.LOG_LEVEL || "info",
  };
};
