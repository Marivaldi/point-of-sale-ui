import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { MdClose } from "react-icons/md";
import Blur from '../blur/Blur';
import './css/Menu.css';
import { dismiss_message } from '../../redux/actions/menu/menu_actions';

class MessageWindow extends Component {

  close_message_window(){
    this.props.close_message_window();
  }
  
  render() {
    return (
      <div>
          <Blur visible={this.props.visible}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    close_message_window: () => dispatch(close_message_window())
  };
}

const mapStateToProps = state => {
  return {
    visible: state.message_window.visible
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageWindow);