import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { getWorldmapMenuKeyboard } from '../../worldmap/keyboards/mainMenu';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const hexceptionHandlers = new Composer<BotContext>();

// Realm Details Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.REALM_DETAILS, async (ctx) => {
  logger.info('Realm details requested', { userId: ctx.from?.id });
  await ctx.reply('🏰 Your realm details will be displayed here...');
});

// Resources Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.RESOURCES, async (ctx) => {
  logger.info('Resources requested', { userId: ctx.from?.id });
  await ctx.reply('💎 Your resources information will be displayed here...');
});

// Construction Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.CONSTRUCTION, async (ctx) => {
  logger.info('Construction requested', { userId: ctx.from?.id });
  await ctx.reply('🏗️ Your construction projects will be displayed here...');
});

// Military Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.MILITARY, async (ctx) => {
  logger.info('Military requested', { userId: ctx.from?.id });
  await ctx.reply('⚔️ Your military information will be displayed here...');
});

// Arrivals Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.ARRIVALS, async (ctx) => {
  logger.info('Arrivals requested', { userId: ctx.from?.id });
  await ctx.reply('🔄 Your incoming/outgoing movements will be displayed here...');
});

// Trade Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.TRADE, async (ctx) => {
  logger.info('Trade requested', { userId: ctx.from?.id });
  await ctx.reply('💰 Trade options will be displayed here...');
});

// Worldmap Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.WORLDMAP, async (ctx) => {
  logger.info('Worldmap requested', { userId: ctx.from?.id });
  await ctx.reply('🗺️ Switching to Worldmap mode...', {
    reply_markup: getWorldmapMenuKeyboard(),
  });
});

// Change Realm Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.CHANGE_REALM, async (ctx) => {
  logger.info('Change realm requested', { userId: ctx.from?.id });
  await ctx.reply('🔄 Realm selection will be available here...');
});

// Settings Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.SETTINGS, async (ctx) => {
  logger.info('Settings requested', { userId: ctx.from?.id });
  await ctx.reply('⚙️ Bot settings will be available here...');
});

// Help Handler
hexceptionHandlers.hears(HEXCEPTION_KEYBOARD.HELP, async (ctx) => {
  logger.info('Help requested', { userId: ctx.from?.id });
  await ctx.reply('❓ Help and documentation will be displayed here...');
});
