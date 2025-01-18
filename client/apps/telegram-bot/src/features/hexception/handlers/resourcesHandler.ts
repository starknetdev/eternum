import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const resourcesHandler = new Composer<BotContext>();

resourcesHandler.hears(HEXCEPTION_KEYBOARD.RESOURCES, async (ctx) => {
  logger.info('Resources requested', { userId: ctx.from?.id });
  await ctx.reply('💎 Your resources information will be displayed here...');
});
