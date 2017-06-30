import React, { PureComponent } from "react";
import { HeaderLayout } from "../Layout";
import "./index.css";
import Linking from "../Linking";

/**
 * @Component Header renders the header aspect of some part of the blog 
 */
class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderLayout color={this.props.color}>
        <div className="col-xs-2">
          <img src="" id="logo" alt="" />
        </div>
        <div className="col-xs-offset-4 col-xs-6">
          <div id="section-icon-header-positioner">
            <div id="header-right-section">
              <Linking
                to="/post"
                style={
                  this.props.makePostLinkVisible
                    ? { color: "#2196f3", display: "block" }
                    : { display: "none" }
                }
              >
                Make Post
              </Linking>
            </div>
            <div id="iconHolder">
              <Linking to="/search">
                <img
                  src="/images/search.png"
                  alt="search"
                  className="headerIcons"
                />
              </Linking>
            </div>
          </div>
        </div>
      </HeaderLayout>
    );
  }
}

export default Header;
