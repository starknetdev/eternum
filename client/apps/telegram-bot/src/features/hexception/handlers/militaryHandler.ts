import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const militaryHandler = new Composer<BotContext>();

militaryHandler.hears(HEXCEPTION_KEYBOARD.MILITARY, async (ctx) => {
  logger.info('Military requested', { userId: ctx.from?.id });
  await ctx.reply('⚔️ Your military information will be displayed here...');
});
