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
    }
  }

  readImage = (evt) => {
    let fileReader = new FileReader(),
        file = evt.target.files[0];
    fileReader.onload = (evt) => {
      this.setState({displayImageURI: fileReader.result});
    }
    fileReader.readAsDataURL(file);
  }


  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <ContainerLayout color="#fff">
            <div className="row">
              <div className="col-xs-12">
                <Form onReadImage={this.readImage} displayImageURI={this.state.displayImageURI}/>
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
