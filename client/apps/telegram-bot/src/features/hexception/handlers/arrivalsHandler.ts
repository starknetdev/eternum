import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const arrivalsHandler = new Composer<BotContext>();

arrivalsHandler.hears(HEXCEPTION_KEYBOARD.ARRIVALS, async (ctx) => {
  logger.info('Arrivals requested', { userId: ctx.from?.id });
  await ctx.reply('🔄 Your incoming/outgoing movements will be displayed here...');
});
