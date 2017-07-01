import React from "react";
import { Link } from "react-router-dom";

/**
 * @Component Linking renders a Link component which links pages to other pages 
 */
const Linking = (props) => {
  return <Link to={props.to} {...props}>{props.children}</Link>;
};

export default Linking;
