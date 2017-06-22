import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Linking extends PureComponent {
  render() {
    return (
      <Link to={this.props.to} {...this.props}>{this.props.children}</Link>
    );
  }
}

export default Linking;
