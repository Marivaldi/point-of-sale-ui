import React,  {Component} from 'react';
import '../css/ProductSearch.css'
class ProductSearch extends Component {
  render() { 
    return ( 
      <div id="product-search" className="card shadow">
        <div className="input-group center">
          <input type="text" className="form-control" placeholder="Key an item code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="button">search</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProductSearch;