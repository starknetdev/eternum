import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const helpHandler = new Composer<BotContext>();

helpHandler.hears(HEXCEPTION_KEYBOARD.HELP, async (ctx) => {
  logger.info('Help requested', { userId: ctx.from?.id });
  await ctx.reply('❓ Help and documentation will be displayed here...');
});
