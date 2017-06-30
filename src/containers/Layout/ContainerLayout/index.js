import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component ContainerLayout renders a layout to pad and contain each screen 
 */
class ContainerLayout extends PureComponent {
  render() {
    return (
      <div
        className="row appContainer"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="col-xs-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ContainerLayout;
