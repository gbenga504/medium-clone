import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component StaticFooter renders a static footer type 
 */
class StaticFooter extends PureComponent {
  render() {
    return (
      <div className="row staticFooter">
        <span className="tag">Help</span>
        <span className="tag">Privacy</span>
        <span className="tag">About</span>
      </div>
    );
  }
}

export default StaticFooter;
