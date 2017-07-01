import React from "react";
import "./index.css";

/**
 * @Component Title renders the title of the news screen 
 */
const Title = (props) => {
  return (
    <div className="row title">
      <div className="col-xs-12 text-center">
        <span className="postTitle">{props.title}</span>
      </div>
    </div>
  );
};

export default Title;
