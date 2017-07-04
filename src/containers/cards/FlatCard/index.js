import React from "react";
import Bottom from "./Bottom";
import "./index.css";

/**
 * @Component Flatcard renders a flat card type  
 */
const FlatCard = (props) => {
  return (
    <div className="col-sm-6 col-xs-12" style={{ marginBottom: "20px" }}>
      <div className="col-xs-12">
        <div className="row" id="card">
          <div className="col-xs-4" id="newsDisplayHolder">
            <img
              src={props.data.postImage.length > 0 ? `http://blog-stuff.herokuapp.com/${props.data.postImage}` : ""}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-xs-8" id="content">
            <div className="col-xs-12 title">{props.data.title}</div>
            <div className="col-xs-12 body" dangerouslySetInnerHTML={{ __html : `${props.data.body} ...read more` }} ></div>
            <Bottom
              writer={props.data.User.firstName}
              timePosted={props.data.updated_at}
              userProfilePics={`http://blog-stuff.herokuapp.com${props.data.User.userProfilePic}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
