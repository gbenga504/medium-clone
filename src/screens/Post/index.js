import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import { NavigationalFooter } from "../../containers/Footer";
import Header from "./Header";
import Form from "./Form";

class Post extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      displayImageURI : null,
      bodyHTML : '',
      formRef: null,
    }
  }

  makePost = () => {
    
  }

  readImage = (evt) => {
    let fileReader = new FileReader(),
        file = evt.target.files[0];
    fileReader.onload = (evt) => {
      this.setState({displayImageURI: fileReader.result});
    }
    fileReader.readAsDataURL(file);
  }

  updateFormRef = (value) => {
    if(!this.state.formRef)
      this.setState({formRef : value})
  }

  handleBodyChange = (text, medium) => {
    this.setState({
      bodyHTML : text,
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <ContainerLayout color="#fff">
            <div className="row">
              <div className="col-xs-12">
                <Form onReadImage={this.readImage} onupdateFormRef={this.updateFormRef} bodyHTML={this.state.bodyHTML} displayImageURI={this.state.displayImageURI} handleBodyChange={this.handleBodyChange}/>
              </div>
            </div>
          </ContainerLayout>
        </div>
        {/*<NavigationalFooter />*/}
      </div>
    );
  }
}

export default Post;
