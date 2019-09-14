import React,  {Component} from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './reset.css';
import './App.css';
import Title from './components/title/Title';
import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
          <Title/>
          <div id="content">
            <Cart/>
          </div>
          <Menu/>
      </Provider>
    );
  }
}

export default App;
