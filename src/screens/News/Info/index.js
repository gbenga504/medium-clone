import React, { PureComponent } from "react";
import "./index.css";
import moment from "moment";

/**
 * @Component Info renders the display information of the writer 
 */
class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.manageTimePosted = this.manageTimePosted.bind(this);
  }

  //Call moment to perform a formatting for the time
  manageTimePosted() {
    return moment(this.props.timePosted).format("Do MMMM YYYY");
  }

  render() {
    return (
      <div className="row info">
        <div className="col-xs-12">
          <div id="imageIcon">
            <img
              src={`http://blog-stuff.herokuapp.com${this.props.writersImage}`}
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
