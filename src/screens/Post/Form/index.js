import React, { PureComponent } from "react";
import PostBox from "../../../containers/PostBox";
import "./index.css";

class Form extends PureComponent {
  render() {
    return (
      <form className="row form">
        <div className="col-xs-12">
          <TitleBox />
          <PostBox />
        </div>
      </form>
    );
  }
}

const DisplayImage = (props) => {
  return(
    <div className="row">
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <img src={} alt="post display image" className="displayImage"/>
      </div>
    </div>
  )
}

const ImageSelector = () => {
  return (
    <div className="imageSelector">
      <img src="/images/add.png" />
    </div>
  )
}

const TitleBox = (props) => {
  return (
    <div className="row titleBox">
      <input type="text" placeholder="Enter a title" id="titleInput" />
    </div>
  );
};

export default Form;
