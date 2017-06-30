import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Functional Component renders a circle loader 
 * @param {Object} props 
 */
const CircleLoader = props => {
  const shouldDisplay = props.isDataLoading ? props.isDataLoading : false,
    display = shouldDisplay ? "block" : "none";
  return <div className="circle" style={{ display }} />;
};

export default CircleLoader;
