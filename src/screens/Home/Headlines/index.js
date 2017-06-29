import React, { PureComponent } from "react";
import "./index.css";
import { TextRight, ButtonRight } from "./Right";

/**
 * @Component Headlines render an headline based on the topic and the type of button required 
 */
class Headlines extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="headline">
        <div className="col-xs-4" id="tagName">
          <div id="title">{this.props.title}</div>
        </div>

        <div className="col-xs-offset-5 col-xs-3">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { Headlines, TextRight, ButtonRight };
