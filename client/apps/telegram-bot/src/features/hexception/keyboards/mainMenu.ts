import { Keyboard } from 'grammy';
import { HEXCEPTION_KEYBOARD } from '../constants/keyboard';

export function getHexceptionMenuKeyboard() {
  return (
    new Keyboard()
      // Row 1
      .text(HEXCEPTION_KEYBOARD.REALM_DETAILS)
      .text(HEXCEPTION_KEYBOARD.RESOURCES)
      .row()
      // Row 2
      .text(HEXCEPTION_KEYBOARD.CONSTRUCTION)
      .text(HEXCEPTION_KEYBOARD.MILITARY)
      .row()
      // Row 3
      .text(HEXCEPTION_KEYBOARD.ARRIVALS)
      .text(HEXCEPTION_KEYBOARD.TRADE)
      .row()
      // Row 4
      .text(HEXCEPTION_KEYBOARD.WORLDMAP)
      .text(HEXCEPTION_KEYBOARD.CHANGE_REALM)
      .row()
      // Row 5
      .text(HEXCEPTION_KEYBOARD.SETTINGS)
      .text(HEXCEPTION_KEYBOARD.HELP)
      .resized()
      .persistent()
  );
}
