import React from "react";
import "./index.css";

/**
 * @Component ContainerLayout renders a layout to pad and contain each screen 
 */
const ContainerLayout = (props) => {
  return (
    <div
      className="row appContainer"
      style={{ backgroundColor: props.color }}
    >
      <div className="col-xs-12">
        {props.children}
      </div>
    </div>
  );
};

export default ContainerLayout;
