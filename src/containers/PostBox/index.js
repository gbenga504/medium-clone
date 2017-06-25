import React, { PureComponent } from "react";
import "./index.css";

class PostBox extends PureComponent {
  render() {
    return (
      <div className="row messageBox">
        <textarea
          autoFocus
          type="text"
          placeholder="Enter your post here"
          id="messageInput"
        />
      </div>
    );
  }
}

export default PostBox;
