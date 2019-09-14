import { OPEN_MENU, CLOSE_MENU} from "./menu_action_types";
export function open_menu(payload) {
  return { type: OPEN_MENU, payload }
};

export function close_menu(payload) {
  return { type: CLOSE_MENU, payload }
};