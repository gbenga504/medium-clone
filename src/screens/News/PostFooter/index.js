import React, { Component } from "react";
import Section from "./Section";
import "./index.css";

/**
 * @Component PostFooter acts a container component for the footer of the news screen 
 */
class PostFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="footer row">
          <div className="col-xs-12">
            <Section data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostFooter;
