import React from "react";
import { Link } from "react-router-dom";

/**
 * @Component Linking renders a Link component which links pages to other pages 
 */
const Linking = () => {
  return <Link to={this.props.to} {...this.props}>{this.props.children}</Link>;
};

export default Linking;
