import React, { PureComponent } from "react";
import Editor from 'react-medium-editor';
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "./index.css";

class PostBox extends PureComponent {
  render() {
    return (
      <div className="row messageBox">
        <Editor
          tag="p"
          options={{toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']}}}
          className="postBox"
          data-placeholder="Write your post"
          onChange={this.props.handleBodyChange}
        />
      </div>
    );
  }
}

export default PostBox;
