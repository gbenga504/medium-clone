import React, { PureComponent } from "react";
import "./index.css";

class HeaderContainer extends PureComponent {
  render() {
    return (
      <div className="row" id="header">
            {this.props.children}
      </div>
    );
  }
}

export default HeaderContainer;