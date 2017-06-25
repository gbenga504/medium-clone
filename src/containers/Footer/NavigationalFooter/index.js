import React, { PureComponent } from "react";
import "./index.css";

class NavigationalFooter extends PureComponent {
  render() {
    return (
      <div className="navFooter">
        <div className="col-xs-12 col-sm-offset-4 col-sm-4">
          <div className="row">
            <div className="col-xs-2">
              <img
                src="/images/back.png"
                alt="arrow back button"
                className="navBtn"
              />
            </div>

            <div className="col-xs-8 text-center">
              <span id="postTags">
                Share your views about technology with others
              </span>
            </div>

            <div className="col-xs-2">
              <img
                src="/images/forward.png"
                alt="arrow forward button"
                className="navBtn"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationalFooter;
