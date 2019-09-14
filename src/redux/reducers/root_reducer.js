import { ADD_ITEM_TO_CART } from "../actions/cart/cart_action_types";
import { OPEN_MENU, CLOSE_MENU } from "../actions/menu/menu_action_types";

const initial_state = {
  title: '',
  caption: '',
  menu: {
    visible: false,
    buttons: []
  },
  cart: {
    visible: true,
    subtotal: '',
    items: []
  }
  
};

function root_reducer(state = initial_state, action) {
  if (action.type === ADD_ITEM_TO_CART) {
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        items: [action.payload, ...state.cart.items]
      }
    });
  } else if (action.type === OPEN_MENU) {
    return Object.assign({}, state, {
      menu: {
        visible: true,
        ...state.menu
      }
    });
  } else if (action.type === CLOSE_MENU) {
    return Object.assign({}, state.menu, {
      menu: {
        visible: true,
        ...state.menu
      }
    });
  }
  return state;
}

export default root_reducer;