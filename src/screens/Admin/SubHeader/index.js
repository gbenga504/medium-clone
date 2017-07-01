import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component SubHeader renders the subHeader of the application 
 */
class SubHeader extends PureComponent {
  render() {
    return (
      <div className="row subHeader">
        <div className="col-xs-12 col-sm-offset-2 col-sm-8">
          <div className="row">
            <div className="col-xs-2">
              <div className="profile_image_holder">
                <img
                  src={this.props.profile.userProfilePic}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-xs-10 text-justify">
              <span className="user_name">
                {this.props.profile
                  ? `${this.props.profile.lastName} ${this.props.profile.firstName}`
                  : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeader;
