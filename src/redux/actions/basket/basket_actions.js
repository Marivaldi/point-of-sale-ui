import { ADD_ITEM_TO_BASKET, UPDATE_SUBTOTAL } from "./basket_action_types";

export function add_item_to_basket(payload) {
  return { type: ADD_ITEM_TO_BASKET, payload }
};

export function update_subtotal(payload) {
  return { type: UPDATE_SUBTOTAL, payload }
};