import React, { PureComponent } from "react";
import "./index.css";

class HeaderContainer extends PureComponent {
  render() {
    return (
      <div className="row" id="header" style={{borderBottom: this.props.border ? "1px solid #E5E5E5" : "" }}>
            {this.props.children}
      </div>
    );
  }
}

export default HeaderContainer;
