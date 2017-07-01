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
          <TitleBox
            readImage={this.props.onReadImage}
            handleTitleChange={this.props.handleTitleChange}
            titleHTML={this.props.formInnerHTML.titleHTML}
          />
          <DisplayImage displayImageURI={this.props.displayImageURI} />
          <input type="hidden" value={this.props.bodyHTML} name="body" />
          <PostBox
            handleBodyChange={this.props.handleBodyChange}
            bodyHTML={this.props.formInnerHTML.bodyHTML}
          />
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
      <input type="hidden" name="userId" value={props.userDetails} />
      <input type="hidden" name="secret" value={props.userDetails.secret} />
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
          alt=""
          className="postDisplayImage"
        />
      </div>
    </div>
  );
};

/**
 * @Functional Component ImageSelector renders the button to add the display image to the application 
 */
const ImageSelector = props => {
  return (
    <div className="imageSelector">
      <input
        type="file"
        className="selectorInputFile"
        onChange={props.readImage}
        name="postImg"
      />
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
      <ImageSelector readImage={props.readImage} />
      <input
        type="text"
        value={props.titleHTML ? props.titleHTML : ""}
        placeholder="Enter a title"
        id="titleInput"
        name="title"
        onChange={props.handleTitleChange}
      />
    </div>
  );
};

export default Form;
