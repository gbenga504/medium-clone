import React, { PureComponent } from "react";
import "./index.css";
import moment from "moment";

class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.manageTimePosted = this.manageTimePosted.bind(this);
  }

  manageTimePosted() {
    return moment(this.props.timePosted).format("Do MMMM YYYY");
  }

  render() {
    return (
      <div className="row info">
        <div className="col-xs-12">
          <div id="imageIcon">
            <img
              src={this.props.writersImage}
              alt="commenter's image"
              width="100%"
              height="100%"
              id="writersImage"
            />
          </div>
          <div id="commenter_info">
            <div className="writer_name">{this.props.writerName}</div>
            <div className="time"> {this.manageTimePosted()} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
