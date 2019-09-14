import { OPEN_MENU } from "./menu_action_types";
export function open_menu(payload) {
  return { type: OPEN_MENU, payload }
};