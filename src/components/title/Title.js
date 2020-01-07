import React,  {Component} from 'react';
import { MdMenu } from "react-icons/md";
import { connect } from 'react-redux';
import { open_menu } from '../../redux/actions/menu/menu_actions';
import './Title.css';

class Title extends Component {
  open_menu(){
    this.props.open_menu();
  }
  render() { 
    return (
      <div id="title" className={"row shadow-lg border-bottom" + (this.props.blurred ? ' blur': '')}>
        <div className="col-1 hide-md">
          Magic Point of Sale
        </div> 
        <div className="col-11 container row fill-md">
          <div id="title-text" className="col-8">
            <h1>Sale Main Menu</h1>
            <h2>Scan or key an item</h2>
          </div>
          <div className="col-4 buttons">
            <MdMenu onClick={this.open_menu.bind(this)} className="float-right top-icon clickable"/>
          </div> 
        </div>     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blurred: state.menu.visible
  };
};

function mapDispatchToProps(dispatch) {
  return {
    open_menu: () => dispatch(open_menu())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);