import React, { PureComponent } from "react";
import "./index.css";
import moment from "moment";

class Bottom extends PureComponent {
  render() {
    return (
      <div className="bottom">
        <ImageIcon userProfilePics={this.props.userProfilePics} />
        <CoreInfo
          writer={this.props.writer}
          timePosted={this.props.timePosted}
        />
        <BottomIcon />
      </div>
    );
  }
}

const ImageIcon = props => {
  return (
    <div className="imageIcon">
      <img
        src={`${props.userProfilePics}`}
        width="100%"
        height="100%"
        className="writer_display_image"
      />
    </div>
  );
};

const CoreInfo = props => {
  let time = moment(props.timePosted).format("Do MMMM YYYY");
  return (
    <div className="coreInfo">
      <div className="writer-info">{props.writer}</div>
      <div className="writer-info">{time}</div>
    </div>
  );
};

const BottomIcon = () => {
  return (
    <div className="bottomIcon">
      <img src="/images/recommend.png" alt="recommend" />
    </div>
  );
};

export default Bottom;
