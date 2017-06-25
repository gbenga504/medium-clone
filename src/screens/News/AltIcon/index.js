import React, { Component } from "react";
import "./index.css";

class AltIcon extends Component {
  render() {
    return (
      <div className="altIcon">
        <div id="tagName">Heart</div>
        <div className="iconHolder">
          <img
            src="/images/recommend.png"
            alt="recommend icon"
            className="recommend_icon"
          />
          <div className="shareCount">
            100
          </div>
        </div>
        <div className="iconHolder">
          <img
            src="/images/bookmark.png"
            alt="bookamrk icon"
            className="recommend_icon"
          />
          <div className="shareCount">
            82
          </div>
        </div>
      </div>
    );
  }
}

export default AltIcon;
