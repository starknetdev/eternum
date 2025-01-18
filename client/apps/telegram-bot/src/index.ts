import { Bot } from 'grammy';
import { startCommand } from './commands/start';
import { hexceptionHandlers } from './features/hexception/handlers/menuHandlers';
import { worldmapHandlers } from './features/worldmap/handlers/menuHandlers';
import { errorHandler } from './middlewares/errorHandler';
import { BotContext } from './types';
import { getConfig } from './utils/config';
import { logger } from './utils/logger';

async function main() {
  const config = getConfig();

  logger.info('Starting bot...', { environment: config.environment });

  const bot = new Bot<BotContext>(config.botToken, {
    client: {
      environment: config.environment === 'production' ? 'prod' : 'test',
    },
  });

  // Middlewares
  bot.use(startCommand);
  bot.use(hexceptionHandlers);
  bot.use(worldmapHandlers);

  // Error handling
  bot.catch(errorHandler);

  // Start bot
  await bot.start({
    onStart: (botInfo) => {
      logger.info('Bot started successfully', {
        username: botInfo.username,
        botId: botInfo.id,
      });
    },
  });
}

main().catch((err) => {
  logger.error('Fatal error', err);
  process.exit(1);
});
