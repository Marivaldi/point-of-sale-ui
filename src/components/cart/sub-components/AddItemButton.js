import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { add_item_to_basket } from '../../../redux/actions/cart/cart_actions';

class AddItemButton extends Component {
  constructor(props) {
    super(props);
    this.item_id = 0;
  }

  add_item(){
    const descriptions = ["Shirt", "Shoes", "Beanie", "Sweater", "Jeans", "Socks"]
    let unit_price = (Math.floor(Math.random() * Math.floor(10)));
    let quantity = (Math.floor(Math.random() * Math.floor(10)));
    let total = unit_price * quantity;
    let description = descriptions[(Math.floor(Math.random() * Math.floor(6)))]
    this.props.add_item({
      id: this.item_id + description + quantity + unit_price,
      description: description,
      price: '$' + unit_price + '.00',
      quantity: quantity,
      total: '$' + total + '.00',
      true_total: total
    });
    this.item_id++;
  }

  render() { 
    return ( <button onClick={this.add_item.bind(this)} type="button" className="btn btn-lg btn-success full-width center shadow"  id="checkout-btn">Checkout</button> );
  }
}
 
function mapDispatchToProps(dispatch) {
  return {
    add_item: item => dispatch(add_item_to_basket(item))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddItemButton);