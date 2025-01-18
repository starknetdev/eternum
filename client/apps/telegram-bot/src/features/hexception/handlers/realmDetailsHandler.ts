import { Composer, InlineKeyboard } from 'grammy';
import { BotContext } from '../../../types';
import { logger } from '../../../utils/logger';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export const realmDetailsHandler = new Composer<BotContext>();

realmDetailsHandler.hears(HEXCEPTION_KEYBOARD.REALM_DETAILS, async (ctx) => {
  logger.info('Realm details requested', { userId: ctx.from?.id });

  const message = `*🏰 Uw Rohi Kingdom*
ID: \`6933\` │ Level 2 ⚜️
━━━━━━━━━━━━━━━━
📍 *Location*: 154, -47

💎 *Resources*: 
• Wood
• Stone
• Copper
• Twilight Quartz

👥 *Population*: 7/10
📦 *Storage*: 300,000

⚒️ *Labor Status*:
🪵 Wood: 782,145 _(Producing - 3h left)_
🪨 Stone: 394,721 _(Producing - 1h left)_
💫 Twilight Quartz: 245,893 _(Paused)_

📢 *Notifications*:
• ⚠️ Ready to upgrade to Empire (Level 3)!
• 🐴 3 Donkeys have arrived
• ⚔️ 2 enemies detected nearby

💰 *$LORDS Balance*: 987

⏳ Next game tick: 37 minutes`;

  const keyboard = new InlineKeyboard()
    .row()
    .text('⚜️ Upgrade Realm', 'upgrade_realm')
    .row()
    .text('⬅️ Previous', 'prev_realm')
    .text('🔄 Refresh', 'refresh_realm')
    .text('➡️ Next', 'next_realm');

  await ctx.reply(message, {
    parse_mode: 'Markdown',
    reply_markup: keyboard,
  });
});
