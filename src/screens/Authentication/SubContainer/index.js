import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component SubContainer renders the login screen header 
 */
class SubContainer extends PureComponent {
  render() {
    return (
      <div className="row section">
        <div className="col-xs-12 col-sm-offset-3 col-sm-6 sectionPadder">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SubContainer;
