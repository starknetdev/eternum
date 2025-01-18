import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const settingsHandler = new Composer<BotContext>();

settingsHandler.hears(HEXCEPTION_KEYBOARD.SETTINGS, async (ctx) => {
  logger.info('Settings requested', { userId: ctx.from?.id });
  await ctx.reply('⚙️ Bot settings will be available here...');
});
