import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Info from "./Info";
import Title from "./Title";
import Message from "./Message";
import AltIcon from "./AltIcon";
import PostFooter from "./PostFooter";
import { Fetch } from "../../containers/Request";

class News extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataURI: "/badoo.json",
      mainData: {}
    };
  }

  componentDidMount() {
    Fetch(this.state.dataURI, {
      method: "Get",
      handleResponseAs: "json"
    }).then(data => {
      this.setState({
        mainData: data
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <ContainerLayout color="#fff">
            <div className="row">
              <div className="col-xs-12">
                <Info
                  writersImage={
                    this.state.mainData.User
                      ? this.state.mainData.User.userProfilePic
                      : ""
                  }
                  writerName={
                    this.state.mainData.User
                      ? `${this.state.mainData.User.firstName} ${this.state.mainData.User.lastName}`
                      : ""
                  }
                  timePosted={this.state.mainData.updated_at}
                />
                <Title title={this.state.mainData.title} />
                <Message body={this.state.mainData.body} />
                <AltIcon />
              </div>
            </div>
          </ContainerLayout>
          {/*<PostFooter />*/}
        </div>
      </div>
    );
  }
}

export default News;
