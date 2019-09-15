import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { MdClose } from "react-icons/md";
import Blur from '../blur/Blur';

class MessageWindow extends Component {

  close_message_window(){
    this.props.close_message_window();
  }
  
  render() {
    if(!this.props.visible) {
      return null;
    }
    
    return (
      <div>
          <Blur visible={this.props.visible}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //close_message_window: () => dispatch(close_message_window())
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