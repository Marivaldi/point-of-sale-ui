import React,  {Component} from 'react';
import '../css/ProductSearch.css'
class ProductSearch extends Component {
  render() { 
    return ( 
      <div id="product-search" className="card shadow">
        <div class="input-group center">
          <input type="text" class="form-control" placeholder="Key an item code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <button class="btn btn-outline-success" type="button">search</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProductSearch;