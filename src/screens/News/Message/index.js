import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component Message renders the message body of the news screen
 */
class Message extends PureComponent {
  render() {
    return (
      <div className="row message">
        <DisplayImage displayImageURI={this.props.displayImageURI} />
        <div className="col-xs-12 text-justify messageBody">
          {this.props.body}
        </div>
      </div>
    );
  }
}

/**
 * @Functional component DisplayImage to display the main image of the post 
 * @param {String} props 
 */
const DisplayImage = props => {
  return (
    <div
      className="row"
      style={props.displayImageURI ? { display: "block" } : { display: "none" }}
    >
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <img
          src={props.displayImageURI}
          alt=""
          className="displayImage"
        />
      </div>
    </div>
  );
};

export default Message;
