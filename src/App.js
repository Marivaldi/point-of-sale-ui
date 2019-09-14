import React,  {Component} from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './reset.css';
import './App.css';
import Basket from './components/basket/Basket';
import Title from './components/title/Title';
import Subtotal from './components/basket/Subtotal';

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
          <Title/>
          <div id="main-content" className="row">
            <Basket/>
            <div id="additional-content" className="col-md-4 hide-md">
              <div id="product-search" className="card shadow">
                <div class="input-group center">
                  <input type="text" class="form-control" placeholder="Key an item code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-success" type="button">search</button>
                  </div>
                </div>
              </div>
              <div id="member-container">
                <div id="member" className="card shadow center-vertically full-width">
                  <div className="position-relative full-width full-height">
                    <div className="center">
                      <button type="button" class="btn btn-outline-primary">Add a member</button>
                    </div>
                  </div>
                </div>
              </div>
              <Subtotal/>
            </div>
          </div>
      </Provider>
    );
  }
}

export default App;
