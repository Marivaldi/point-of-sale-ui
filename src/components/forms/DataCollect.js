import React,  {Component} from 'react';
import { connect } from 'react-redux';
import './css/DataCollect.css';

class DataCollect extends Component {
  render() {
    if(!this.props.visible) {
      return null;
    }
    
    return ( 
      <div id="data-collect-form" className={"row" + (this.props.blurred ? ' blur': '')}>
        <div className="col full-height scrollable">
              <div id="form" className="center-horizontally card shadow">
                <header className="border-bottom">Customer Lookup</header>
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput">First Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Zip Code</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Email Address</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="e.g. user@example.com"/>
                  </div>
                  <button type="submit" class="btn btn-success mr-3 mt-3">Accept</button>
                  <button type="button" class="btn btn-danger mt-3">Cancel</button>
                </form>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blurred: state.menu.visible,
    visible: state.form.visible
  };
};

export default connect(
  mapStateToProps,
  null
)(DataCollect);