import React, { PureComponent } from "react";
import "./index.css";

const CircleLoader = props => {
  const shouldDisplay = props.isDataLoading ? props.isDataLoading : false,
    display = shouldDisplay ? "block" : "none";
  return <div className="circle" style={{ display }} />;
};

export default CircleLoader;
