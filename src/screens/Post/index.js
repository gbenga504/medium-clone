import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import { NavigationalFooter } from "../../containers/Footer";
import Header from "./Header";
import Form from "./Form";
import { httpFetch } from "../../containers/Request";
import { ToolTip } from "../../containers/Report";

/**
 * @Component Post is renders the Post screen of the blog 
 */
class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayImageURI: null,
      postURI: "/api/v1/post",
      bodyHTML: "",
      titleHTML: "",
      formRef: null,
      userDetails: {},
      toolTipMessage: null,
      toolTipType: null
    };
  }

  //sends a request to get the post information from te database if its an update requets
  componentDidMount() {
    if (this.props.match.params.id)
      httpFetch(`${this.state.postURI}/${this.props.match.params.id}`, {
        method: "Get",
        handleResponseAs: "json"
      })
        .then(response => {
          if (response.status == "success") {
            this.setState({
              titleHTML: response.data.title,
              bodyHTML: response.data.body,
              displayImageURI: response.data.postImage,
              toolTipMessage: "could not retrieve information",
              toolTipType: "error"
            });
          } else Promise.reject(response.message);
        })
        .catch(error => {
          this.setState({
            toolTipMessage: "could not retrieve information",
            toolTipType: "error"
          });
        });
  }

  /**
   * This function either makes a post or updates a post based on the url 
   */
  makePost = () => {
    this.setState({
      toolTipMessage: "sending post...",
      toolTipType: "loading"
    });
    let requestMethod = this.props.match.params.id ? "Put" : "Post";
    httpFetch(this.state.postURI, {
      handleResponseAs: "json",
      method: requestMethod,
      body: new FormData(this.state.formRef)
    })
      .then(response => {
        if (response.status == "message")
          this.setState({
            toolTipMessage: "message posted successfully",
            toolTipType: "success"
          });
        else Promise.reject(response.message);
      })
      .catch(error => {
        this.setState({
          toolTipMessage: "Error making posts",
          toolTipType: "error"
        });
      });

    let userDetails = window.localStorage.getItem("user_details"),
      parsedUserDetails = JSON.parse(userDetails);
    this.setState({ userDetails: parsedUserDetails });
  };

  /**
   * @param {Object} evt 
   * This function reads the image selected from the file storage as a dataURL 
   */
  readImage = evt => {
    let fileReader = new FileReader(), file = evt.target.files[0];
    fileReader.onload = evt => {
      this.setState({ displayImageURI: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  };

  /**
   * @param {String} value
   * This function updates/stores the form reference so that it could be used to make the post 
   */
  updateFormRef = value => {
    if (!this.state.formRef) this.setState({ formRef: value });
  };

  /**
   * @param {String} text
   * @param {Object} medium
   * This function is called to update the html of the post body when the change event is called 
   */
  handleBodyChange = (text, medium) => {
    this.setState({
      bodyHTML: text
    });
  };

  /**
 * handle the text change event 
 * @params {String} text
 */
  handleTitleChange = evt => {
    this.setState({
      titleHTML: evt.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <ToolTip
          message={this.state.toolTipMessage}
          type={this.state.toolTipType}
        />
        <div className="col-xs-12">
          <Header onMakePost={this.makePost} />
          <ContainerLayout color="#fff">
            <div className="row">
              <div className="col-xs-12">
                <Form
                  userDetails={this.state.userDetails}
                  onReadImage={this.readImage}
                  onupdateFormRef={this.updateFormRef}
                  bodyHTML={this.state.bodyHTML}
                  displayImageURI={this.state.displayImageURI}
                  handleBodyChange={this.handleBodyChange}
                  handleTitleChange={this.handleTitleChange}
                  formInnerHTML={{
                    titleHTML: this.state.titleHTML,
                    bodyHTML: this.state.bodyHTML
                  }}
                />
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
  }
}

export default Post;
