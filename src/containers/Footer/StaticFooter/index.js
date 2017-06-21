import React, { PureComponent } from "react";
import "./index.css";

class StaticFooter extends PureComponent {
  render() {
    return (
      <div className="footer">
        <span className="tag">Help</span>
        <span className="tag">Privacy</span>
        <span className="tag">About</span>
      </div>
    );
  }
}

export default StaticFooter;
