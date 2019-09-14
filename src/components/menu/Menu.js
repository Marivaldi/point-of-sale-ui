import React,  {Component} from 'react';
class Menu extends Component {
  render() { 
    return (
      <div>
        <div className="blur-cover"/>
          <div id="menu-container">
            <div className="container-fuid full-height full-width">
              <div id="menu-row" className="row">
                <div className="col-3 col-sm-7"/>
                <div id="menu" className="col-9 col-sm-5 border-left shadow">From the other side</div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
 
export default Menu;