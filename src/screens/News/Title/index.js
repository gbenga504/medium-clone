import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component Title renders the title of the news screen 
 */
class Title extends PureComponent {
  render() {
    return (
      <div className="row title">
        <div className="col-xs-12 text-center">
          <span className="postTitle">{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Title;
