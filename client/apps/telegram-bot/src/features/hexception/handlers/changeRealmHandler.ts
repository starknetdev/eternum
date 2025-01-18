import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const changeRealmHandler = new Composer<BotContext>();

changeRealmHandler.hears(HEXCEPTION_KEYBOARD.CHANGE_REALM, async (ctx) => {
  logger.info('Change realm requested', { userId: ctx.from?.id });
  await ctx.reply('🔄 Realm selection will be available here...');
});
