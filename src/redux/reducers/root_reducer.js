import { ADD_ITEM_TO_CART } from "../actions/cart/cart_action_types";
import { OPEN_MENU, CLOSE_MENU } from "../actions/menu/menu_action_types";

const initial_state = {
  title: '',
  caption: '',
  valid_events: [],
  form: {
    visible: false,
    inputs: []
  },
  menu: {
    visible: false,
    transaction_options: [],
    application_options: []
  },
  cart: {
    visible: true,
    subtotal: 0,
    items: []
  },
  message_window: {
    visible: false,
    title: '',
    message: ''

  }
};

function root_reducer(state = initial_state, action) {
  if (action.type === ADD_ITEM_TO_CART) {
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        subtotal: state.cart.subtotal + action.payload.true_total,
        items: [action.payload, ...state.cart.items]
      }
    });
  } else if (action.type === OPEN_MENU) {
    var newState = Object.assign({}, state, {
      menu: {
        ...state.menu,
        visible: true
      }
    });
    return newState;
  } else if (action.type === CLOSE_MENU) {
    return Object.assign({}, state, {
      menu: {
        ...state.menu,
        visible: false
      }
    });
  }
  return state;
}

export default root_reducer;