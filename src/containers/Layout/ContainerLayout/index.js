import React from "react";
import "./index.css";

/**
 * @Component ContainerLayout renders a layout to pad and contain each screen 
 */
export const ContainerLayout = () => {
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
};
