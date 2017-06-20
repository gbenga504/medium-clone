import React, { PureComponent } from "react";
import HeaderContainer from "../../../containers/HeaderContainer";
import "./index.css";

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer border={true}>
          <div className="col-xs-12">
            <div className="col-xs-4">
              <img src="" id="logo" alt="logo"/> &nbsp; <span id="saveChanges">Unsaved changes</span>
            </div>
            <div className="col-xs-offset-2 col-xs-6">
              <div className="section-icon-header-positioner">
                <div id="header-right-section" className="col-xs-3">
                  share 
                </div>
                <div id="iconHolder" className="col-xs-9">
                  <div id="publishBtn">publish</div>
                  <div id="profileImage">
                    <img src="" alt="notification" id="headerIcons"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </HeaderContainer>
    );
  }
}

export default Header;