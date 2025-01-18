import { Keyboard } from 'grammy';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export function getHexceptionMenuKeyboard() {
  return (
    new Keyboard()
      // Row 1 - Main actions (3 columns)
      .text(HEXCEPTION_KEYBOARD.REALM_DETAILS)
      .text(HEXCEPTION_KEYBOARD.RESOURCES)
      .text(HEXCEPTION_KEYBOARD.CONSTRUCTION)
      .row()
      // Row 2 - Game actions (3 columns)
      .text(HEXCEPTION_KEYBOARD.MILITARY)
      .text(HEXCEPTION_KEYBOARD.ARRIVALS)
      .text(HEXCEPTION_KEYBOARD.TRADE)
      .row()
      // Row 3 - Navigation (2 columns)
      .text(HEXCEPTION_KEYBOARD.WORLDMAP)
      .text(HEXCEPTION_KEYBOARD.CHANGE_REALM)
      .row()
      // Row 4 - Settings & Help (2 columns)
      .text(HEXCEPTION_KEYBOARD.SETTINGS)
      .text(HEXCEPTION_KEYBOARD.HELP)
      .resized()
      .persistent()
  );
}
