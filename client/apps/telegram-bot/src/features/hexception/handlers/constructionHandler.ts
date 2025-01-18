import { Composer, InlineKeyboard } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const constructionHandler = new Composer<BotContext>();

constructionHandler.hears(HEXCEPTION_KEYBOARD.CONSTRUCTION, async (ctx) => {
  logger.info('Construction requested', { userId: ctx.from?.id });

  const keyboard = new InlineKeyboard().webApp(
    '🏗️ Open Construction Manager',
    'https://127.0.0.1:5174/construction',
  );

  await ctx.reply('🏗️ Manage your construction projects:', {
    reply_markup: keyboard,
  });
});
