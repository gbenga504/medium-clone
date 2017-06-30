import React, { PureComponent } from "react";
import PostBox from "../../../containers/PostBox";
import "./index.css";

/**
 * @Component Form renders the form containing the title, display image and the body of the blog post 
 */
class Form extends PureComponent {
  componentDidMount() {
    this.props.onupdateFormRef(this.formRef);
  }

  render() {
    return (
      <form className="row form" ref={ref => (this.formRef = ref)}>
        <div className="col-xs-12">
          <TitleBox readImage={this.props.onReadImage} />
          <DisplayImage displayImageURI={this.props.displayImageURI} />
          <input type="hidden" value={this.props.bodyHTML} />
          <PostBox handleBodyChange={this.props.handleBodyChange} />
          <SecuredField userDetails={this.props.userDetails} />
        </div>
      </form>
    );
  }
}

/**
 * @Functional Component SecurrFields displays secure fields 
 * @param {Object} props 
 */
const SecuredField = props => {
  return (
    <div>
      <input type="hidden" name="userId" value={props.userDetails.userId} />
      <input type="hidden" name="secureKey" value={props.userDetails.userId} />
    </div>
  );
};

/**
 * @Functional Component renders the display image of the post form 
 * @param {Object} props 
 */
const DisplayImage = props => {
  return (
    <div
      className="row"
      style={props.displayImageURI ? { display: "block" } : { display: "none" }}
    >
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <img
          src={props.displayImageURI}
          alt="post display image"
          className="displayImage"
        />
      </div>
    </div>
  );
};

/**
 * @Functional Component ImageSelector renders the button to add the display image to the application 
 */
const ImageSelector = () => {
  return (
    <div className="imageSelector">
      <img src="/images/add.png" />
    </div>
  );
};

/**
 * @Fucntional Component TitleBox renders the Title box of the application 
 * @param {Object} props 
 */
const TitleBox = props => {
  return (
    <div className="row titleBox">
      <input
        type="file"
        className="selectorInputFile"
        onChange={props.readImage}
      />
      <ImageSelector />
      <input type="text" placeholder="Enter a title" id="titleInput" />
    </div>
  );
};

export default Form;
