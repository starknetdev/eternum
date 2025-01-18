import { Keyboard } from 'grammy';
import { WORLDMAP_KEYBOARD } from '../constants/keyboard';

export function getWorldmapMenuKeyboard() {
  return new Keyboard().text(WORLDMAP_KEYBOARD.BACK_TO_HEXCEPTION).resized().persistent();
}
