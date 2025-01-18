import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { getHexceptionMenuKeyboard } from '../../hexception/keyboards/mainMenu';
import { WORLDMAP_KEYBOARD } from '../constants/keyboard';

export const worldmapHandlers = new Composer<BotContext>();

// Back to Hexception Handler
worldmapHandlers.hears(WORLDMAP_KEYBOARD.BACK_TO_HEXCEPTION, async (ctx) => {
  logger.info('Back to Hexception requested', { userId: ctx.from?.id });
  await ctx.reply('🏰 Switching back to Hexception mode...', {
    reply_markup: getHexceptionMenuKeyboard(),
  });
});
