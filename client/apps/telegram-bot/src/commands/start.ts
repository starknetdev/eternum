import { Composer } from 'grammy';
import { getHexceptionMenuKeyboard } from '../features/hexception/keyboards/mainMenu';
import { BotContext } from '../types';
import { logger } from '../utils/logger';

export const startCommand = new Composer<BotContext>();

startCommand.command('start', async (ctx) => {
  logger.info('Start command received', {
    userId: ctx.from?.id,
    username: ctx.from?.username,
  });

  await ctx.reply(
    'Welcome to Eternum Bot! 🎮\n\n' +
      'I can help you stay updated with your Eternum game progress and receive notifications.\n\n' +
      'You are now in Hexception mode. Use the menu below to navigate:',
    {
      reply_markup: getHexceptionMenuKeyboard(),
    },
  );
});
