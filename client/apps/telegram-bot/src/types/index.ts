import { Context } from "grammy";

export interface BotContext extends Context {
  // Add custom context properties here
}

export interface Config {
  botToken: string;
  environment: string;
  logLevel: string;
}
