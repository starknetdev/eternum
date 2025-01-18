import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { getWorldmapMenuKeyboard } from '../../worldmap/keyboards/mainMenu';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const goToWorldmapHandler = new Composer<BotContext>();

goToWorldmapHandler.hears(HEXCEPTION_KEYBOARD.WORLDMAP, async (ctx) => {
  logger.info('Worldmap requested', { userId: ctx.from?.id });
  await ctx.reply('🗺️ Switching to Worldmap mode...', {
    reply_markup: getWorldmapMenuKeyboard(),
  });
});
