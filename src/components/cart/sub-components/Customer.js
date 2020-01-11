import React,  {Component} from 'react';
import '../css/Customer.css';
class  Customer extends Component {
  render() { 
    return (  
      <div id="member-container">
        <div id="member" className="card shadow center-vertically full-width">
          <div className="position-relative full-width full-height">
            <div id="member-button-container" className="center">
              <button type="button" className="member-button btn btn-outline-primary">Lookup a member</button>
              <button type="button" className="member-button btn btn-outline-success">Add a member</button>
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default Customer;