import React from "react";
import "./index.css";

/**
 * @Component HeaderLayout renders a container layout to pad the header components 
 */
const HeaderLayout = (props) => {
  return (
    <div
      className="row"
      id="header"
      style={{
        borderBottom: props.border ? "1px solid #E5E5E5" : "",
        backgroundColor: props.color ? props.color : "#E5E5E5"
      }}
    >
      {props.children}
    </div>
  );
};

export default HeaderLayout;
