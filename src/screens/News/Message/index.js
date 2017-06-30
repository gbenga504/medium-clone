import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component Message renders the message body of the news screen
 */
class Message extends PureComponent {
  render() {
    return (
      <div className="row message">
        <div className="col-xs-12 text-justify messageBody">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Message;
