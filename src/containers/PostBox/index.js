import React from "react";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "./index.css";

/**
 * @Component PostBox renders the post box of the application 
 */
const PostBox = props => {
  return (
    <div className="row messageBox">
      <Editor
        tag="p"
        options={{
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h2",
              "h3",
              "quote"
            ]
          }
        }}
        className="postBox"
        data-placeholder="Write your post"
        onChange={props.handleBodyChange}
        text={props.bodyHTML ? props.bodyHTML : ""}
      />
    </div>
  );
};

export default PostBox;
