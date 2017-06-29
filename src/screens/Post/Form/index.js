import React, { PureComponent } from "react";
import PostBox from "../../../containers/PostBox";
import "./index.css";

class Form extends PureComponent {
  render() {
    return (
      <form className="row form">
        <div className="col-xs-12">
          <TitleBox readImage={this.props.onReadImage}/>
          <DisplayImage displayImageURI={this.props.displayImageURI}/>
          <input type="hidden" value={this.props.bodyHTML} />
          <PostBox handleBodyChange={this.props.handleBodyChange}/>
        </div>
      </form>
    );
  }
}

const DisplayImage = (props) => {
  return(
    <div className="row" style={props.displayImageURI ? {display: 'block'} : {display: 'none'}}>
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <img src={props.displayImageURI} alt="post display image" className="displayImage"/>
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
      <input type="file" className="selectorInputFile" onChange={props.readImage}/>
      <ImageSelector />
      <input type="text" placeholder="Enter a title" id="titleInput" />
    </div>
  );
};

export default Form;
