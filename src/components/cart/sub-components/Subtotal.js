import React,  {Component} from 'react';
import AddItemButton from './AddItemButton';
import '../css/Subtotal.css';

class Subtotal extends Component {
  render() { 
    return ( 
      <div id="subtotal-container" className="card shadow">
        <div className="subtotal-row border-bottom">
          <div className="full-width center-vertically">
            <div className="label">Subtotal</div>
            <div className="value">$150.00</div>
          </div>
        </div>
        <div className="subtotal-row border-bottom">
          <div className="full-width center-vertically">
            <div className="label">Discounts</div>
            <div className="value">-$5.00</div>
          </div>
        </div>
        <div className="total-row border-bottom">
          <div className="full-width center-vertically">
            <div className="label">Total</div>
            <div className="value">$145.00</div>
          </div>
        </div>
        <div className="subtotal-button-row">
          <AddItemButton/>
        </div>
      </div>
     );
  }
}
 
export default Subtotal;