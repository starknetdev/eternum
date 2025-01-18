import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const constructionHandler = new Composer<BotContext>();

constructionHandler.hears(HEXCEPTION_KEYBOARD.CONSTRUCTION, async (ctx) => {
  logger.info('Construction requested', { userId: ctx.from?.id });
  await ctx.reply('🏗️ Your construction projects will be displayed here...');
});
