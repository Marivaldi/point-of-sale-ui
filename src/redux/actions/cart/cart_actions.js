import { ADD_ITEM_TO_CART, UPDATE_SUBTOTAL } from "./cart_action_types";

export function add_item_to_basket(payload) {
  return { type: ADD_ITEM_TO_CART, payload }
};

export function update_subtotal(payload) {
  return { type: UPDATE_SUBTOTAL, payload }
};