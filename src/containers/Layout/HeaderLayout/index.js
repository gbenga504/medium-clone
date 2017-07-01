import React from "react";
import "./index.css";

/**
 * @Component HeaderLayout renders a container layout to pad the header components 
 */
export const HeaderLayout = () => {
  return (
    <div
      className="row"
      id="header"
      style={{
        borderBottom: this.props.border ? "1px solid #E5E5E5" : "",
        backgroundColor: this.props.color ? this.props.color : "#E5E5E5"
      }}
    >
      {this.props.children}
    </div>
  );
};
