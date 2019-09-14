import React,  {Component} from 'react';
import './TransactionOptions.css';

class TransactionOptions extends Component {
  render() {
    return (
      <div className="full-width scrollable half-height transaction-options">
        <ul className="full-width">
          <li className="full-width">
            <button type="button" className="btn full-width btn-primary shadow">Click Me</button> 
          </li>
          <li className="full-width">
            <button type="button" className="btn full-width btn-primary shadow">Click Me</button> 
          </li>
          <li className="full-width">
            <button type="button" className="btn full-width btn-primary shadow">Click Me</button> 
          </li>
          <li className="full-width">
            <button type="button" className="btn full-width btn-primary shadow">Click Me</button> 
          </li>
        </ul>
      </div>
    );
  }
}
 
export default TransactionOptions;