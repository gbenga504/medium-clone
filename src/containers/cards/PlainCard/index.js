import "./index.css";
import React from "react";

/**
 * @Component PlainCard renders a plain card type 
 */

const PlainCard = props => {
  return (
    <div className="row">
      <div className="col-xs-12 plainCard">
        <div className="row">
          <div className="col-xs-12 cardTitle">{props.data.title}</div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="imageTagger">
              <img
                src={`http://blog-stuff.herokuapp.com/${props.data.User.userProfilePic}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-12 cardBody"
            dangerouslySetInnerHTML={{ __html: props.data.body }}
          />
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="recommend_btn">
              <span className="recommended_tag">23 recommended</span>
              &nbsp; &nbsp;
              <img
                src="/images/recommend.png"
                alt="recommend"
                className="recommend_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainCard;
