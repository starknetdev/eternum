import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const tradeHandler = new Composer<BotContext>();

tradeHandler.hears(HEXCEPTION_KEYBOARD.TRADE, async (ctx) => {
  logger.info('Trade requested', { userId: ctx.from?.id });
  await ctx.reply('💰 Trade options will be displayed here...');
});
