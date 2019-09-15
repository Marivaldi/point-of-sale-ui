import React,  {Component} from 'react';
import './reset.css';
import './App.css';
import Title from './components/title/Title';
import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';
import DataCollect from './components/forms/DataCollect';
import MessageWindow from './components/message/MessageWindow';

class App extends Component {
  render() { 
    return (
      <div className="full-height full-width">
        <Title/>
        <div id="content">
          <Cart/>
          <DataCollect/>
        </div>
        <Menu/>
        <MessageWindow/>
      </div>
    );
  }
  
  componentDidMount(){}
}

export default App;
