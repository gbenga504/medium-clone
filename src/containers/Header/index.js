import React, { PureComponent } from "react";
import {HeaderLayout} from "../Layout";
import "./index.css";

class Header extends PureComponent {
  render() {
    return (
      <HeaderLayout color={this.props.color}>
        <div className="col-xs-2">
          <img src="" id="logo" alt="logo" />
        </div>
        <div className="col-xs-offset-4 col-xs-6">
          <div id="section-icon-header-positioner">
            <div id="header-right-section">
              Make Post
            </div>
            <div id="iconHolder">
              <img
                src="/images/search.png"
                alt="search"
                className="headerIcons"
              />
            </div>
          </div>
        </div>
      </HeaderLayout>
    );
  }
}

export default Header;
