import React,  {Component} from 'react';
import { connect } from 'react-redux';
import '../css/Basket.css';
import Item from './Item';
import AddItemButton from './AddItemButton';

class Basket extends Component {
    render() {
        return (
          <div className="col-md-8">
            <div className="basket-container full-height">
              <div id="basket" className="card shadow scrollable">
                <header className="container">
                     <div className="row">
                            <div className="col-2 header-col ml-2 ellipsis">
                            Item
                            </div>
                            <div className="col-3 header-col ellipsis">
                            Price
                            </div>
                            <div className="col-2 header-col ellipsis">
                            Qty.
                            </div>
                            <div className="col-3 header-col ellipsis">
                            Total
                            </div>
                            <div className="col-1"/>
                        </div>
                </header>
                <ol>
                    {this.props.items.map((item) => (
                        <Item key={item.id} item={item} slide={true}/>
                    ))}
                </ol>
              </div>
              <div id="subtotal" className="container">
                <div className="row center-vertically full-width">
                  <div className="col">
                    <span className="larger-text">
                      Total: ${ this.props.subtotal }.00
                    </span>
                  </div>
                  <div className="col">
                    <AddItemButton/>
                  </div> 
                </div>
              </div>
            </div>
          </div>
         );
    }
}


const mapStateToProps = state => {
    return {
      items: state.cart.items,
      subtotal: state.cart.subtotal
    };
};

export default connect(
  mapStateToProps,
  null
)(Basket)