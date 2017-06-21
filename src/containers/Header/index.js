import React, { PureComponent } from "react";
import HeaderLayout from "../HeaderLayout";
import "./index.css";

class Header extends PureComponent {
  render() {
    return (
      <HeaderLayout color={this.props.color}>
        <div className="col-xs-2">
          <img src="" id="logo" alt="logo" />
        </div>
        <div className="col-xs-offset-4 col-xs-6">
          <div className="section-icon-header-positioner">
            <div id="header-right-section" className="col-xs-6">
              Make Post
            </div>
            <div id="iconHolder" className="col-xs-6">
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
