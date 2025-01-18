import { BotError, GrammyError, HttpError } from "grammy";
import { BotContext } from "../types";
import { logger } from "../utils/logger";

export function errorHandler(err: BotError<BotContext>) {
  const ctx = err.ctx;
  logger.error(`Error while handling update ${ctx.update.update_id}:`, {
    error: err.error,
    userId: ctx.from?.id,
    chatId: ctx.chat?.id,
  });

  if (err.error instanceof GrammyError) {
    logger.error("Error in request:", err.error.description);
  } else if (err.error instanceof HttpError) {
    logger.error("Could not contact Telegram:", err.error);
  } else {
    logger.error("Unknown error:", err.error);
  }
}
