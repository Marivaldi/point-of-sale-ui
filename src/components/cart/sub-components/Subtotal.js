import React,  {Component} from 'react';
import { connect } from 'react-redux';
import AddItemButton from './AddItemButton';
import '../css/Subtotal.css';

class Subtotal extends Component {
  render() { 
    return ( 
      <div id="subtotal-container" className="card shadow">
        <div className="subtotal-row border-bottom">
          <div className="full-width center-vertically">
            <div className="label">Subtotal</div>
            <div className="value">${this.props.subtotal}.00</div>
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
            <div className="value">${this.props.subtotal - 5}.00</div>
          </div>
        </div>
        <div className="subtotal-button-row">
          <AddItemButton/>
        </div>
      </div>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    subtotal: state.cart.subtotal
  };
};

export default connect(
mapStateToProps,
null
)(Subtotal)