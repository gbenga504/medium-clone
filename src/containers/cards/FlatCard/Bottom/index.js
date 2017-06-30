import React, { PureComponent } from "react";
import "./index.css";
import moment from "moment";

/**
 * @Component Bottom renders the bottom segment of the card which contains user info 
 */
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

/**
 * @Functional Component ImageIcon renders the display image of the writer
 * @param {Object} props 
 */
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

/**
 * @Functional Component CoreInfo renders the time and writers' name 
 * @param {String} props 
 */
const CoreInfo = props => {
  let time = moment(props.timePosted).format("Do MMMM YYYY");
  return (
    <div className="coreInfo">
      <div className="writer-info">{props.writer}</div>
      <div className="writer-info">{time}</div>
    </div>
  );
};

/**
 * @Functional Component BottomIcon renders the bottom recommend Icon of the card 
 */
const BottomIcon = () => {
  return (
    <div className="bottomIcon">
      <img src="/images/recommend.png" alt="recommend" />
    </div>
  );
};

export default Bottom;
