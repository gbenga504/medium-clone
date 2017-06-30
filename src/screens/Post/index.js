import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import { NavigationalFooter } from "../../containers/Footer";
import Header from "./Header";
import Form from "./Form";
import { httpFetch } from "../../containers/Request";

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
      formRef: null,
      userDetails: {}
    };
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    httpFetch(`${this.state.postURI}/${this.props.match.params.id}`, {
      method: "Get",
      handleResponseAs: "json",
    })
    .then(response => {
      if(response.status == 'success'){
        
      }
      else Promise.reject(response.message)
    })
    .catch(error => {
      console.log('An occurred while trying to get the the post information');
    })
  }

  /**
   * This function sends the form post to the server after user is done writind post
   */
  makePost = () => {
    httpFetch(this.state.postURI, {
      handleResponseAs: "json",
      method: "Post",
      body: new FormData(this.state.formRef)
    })
      .then(response => {
        if (response.status == "message") console.log("success");
        else Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred while trying to make post");
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

  render() {
    return (
      <div className="row">
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
