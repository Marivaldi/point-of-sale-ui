import React,  {Component} from 'react'
import {IoMdClose} from "react-icons/io";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      slide: props.slide,
      description: props.item.description,
      price: props.item.price,
      quantity: props.item.quantity,
      total: props.item.total
    }
  }
  render() { 
    return (  
      <li className={"item-wrapper container " + (this.props.slide ? 'slide' : '')}>
        <div className="main row">
            <div className="col-2 ellipsis">
              {this.state.description}
            </div>
            <div className="col-3 ellipsis">
              {this.state.price}
            </div>
            <div className="col-2 ellipsis">
              {this.state.quantity}
            </div>
            <div className="col-3 ellipsis">
              {this.state.total}
            </div>
            <div className="col-1 ellipsis align-right clickable">
              <IoMdClose />
            </div>
        </div>
      </li>
    );
  }
}
 
export default Item;