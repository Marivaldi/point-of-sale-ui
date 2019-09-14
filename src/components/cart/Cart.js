import React,  {Component} from 'react';
import { connect } from 'react-redux';
import Basket from './sub-components/Basket';
import Customer from './sub-components/Customer';
import Subtotal from './sub-components/Subtotal';
import ProductSearch from './sub-components/ProductSearch';
class Cart extends Component {
  render() {
    if(!this.props.visible) {
      return null;
    }
    return ( 
      <div id="cart" className={"row" + (this.props.blurred ? ' blur': '')}>
        <Basket/>
        <div id="cart-aside" className="col-md-4 hide-md">
          <ProductSearch/>
          <Customer/>
          <Subtotal/>
        </div>
      </div>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    visible: state.cart.visible,
    blurred: state.menu.visible
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);