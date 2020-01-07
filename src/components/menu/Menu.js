import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { MdClose, MdLockOutline } from "react-icons/md";
import Blur from '../blur/Blur';
import './css/Menu.css';
import { close_menu } from '../../redux/actions/menu/menu_actions';

class Menu extends Component {

  close_menu(){
    this.props.close_menu();
  }
  
  render() {
    return (
      <div>
          <Blur visible={this.props.visible}/>
          <div id="menu-container" className={(this.props.visible ? 'show': 'hide')}>
            <div id="hi" className="container-fuid">
              <div id="menu-row" className="row">
                <div className="col-3 col-sm-7"/>
                <div id="menu" className="col-9 col-sm-5 border-left shadow scrollable">
                  <div id="menu-user" className="container-fluid border-bottom">
                    <div id="menu-close" className="row">
                      <div className="col">
                        <MdClose onClick={this.close_menu.bind(this)} className="float-right clickable"/>
                      </div>
                    </div>
                    <div id="menu-user-name" className="row">
                      <div className="col">
                        Test Associate
                      </div>
                    </div>
                    <div id="menu-user-id" className="row">
                      <div className="col">
                        888
                      </div>
                    </div>
                    <div id="menu-user-options" >
                      <button type="button" className="btn btn-outline-light">Sign Out</button>
                      <button type="button" className="btn btn-outline-light"> <MdLockOutline/> Lock</button>
                    </div>
                  </div>
                  <div id="menu-options">
                    <div id="transaction-options-label">Modify the Transaction</div>
                    <ul>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Discount Menu</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Gift Registry</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Credit Application</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                    </ul>
                    <div id="transaction-options-label">Global Options</div>
                    <ul>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Item Lookup</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Apps Menu</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                      <li className="option-wrapper border-bottom">
                        <a className="option">Other Option</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    close_menu: () => dispatch(close_menu())
  };
}

const mapStateToProps = state => {
  return {
    visible: state.menu.visible
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);