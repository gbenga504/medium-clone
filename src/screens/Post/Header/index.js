import React, { PureComponent } from "react";
import { HeaderLayout } from "../../../containers/Layout";
import "./index.css";

class Header extends PureComponent {
  render() {
    return (
      <HeaderLayout border={true} color="#fff">
        <div className="col-xs-12">
          <div className="col-sm-4 hidden-xs">
            <img src="" id="logo" alt="logo" />
            &nbsp;
            <span id="saveChanges">Unsaved changes</span>
          </div>
          <div className="col-xs-12 col-sm-offset-2 col-sm-6">
            <div className="section-icon-header-positioner">
              <div id="header-right-section" className="col-xs-3">
                share
              </div>
              <div id="iconHolder" className="col-xs-9">
                <div id="publishBtn" onClick={this.props.onMakePost}>publish</div>
                <div id="profileImage">
                  <img src="" alt="notification" id="headerIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderLayout>
    );
  }
}

export default Header;
