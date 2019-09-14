import { ADD_ITEM_TO_BASKET } from "../actions/basket/basket_action_types";
import { OPEN_MENU, CLOSE_MENU } from "../actions/menu/menu_action_types";

const initial_state = {
  title: '',
  caption: '',
  menu: {
    visible: false,
    buttons: []
  },
  basket: {
    visible: true,
    subtotal: '',
    items: []
  }
  
};

function root_reducer(state = initial_state, action) {
  if (action.type === ADD_ITEM_TO_BASKET) {
    return Object.assign({}, state, {
      basket: {
        ...state.basket,
        items: [action.payload, ...state.basket.items]
      }
    });
  } else if (action.type === OPEN_MENU) {
    return Object.assign({}, state.menu, {
      visible: true
    });
  } else if (action.type === CLOSE_MENU) {
    return Object.assign({}, state.menu, {
      visible: false
    });
  }
  return state;
}

export default root_reducer;