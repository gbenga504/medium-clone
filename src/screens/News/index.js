import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Info from "./Info";
import Title from "./Title";
import Message from "./Message";
import AltIcon from "./AltIcon";
import PostFooter from "./PostFooter";
import { httpFetch } from "../../containers/Request";

/**
 * @Component News renders the news screen and displays post based on Ids 
 */
class News extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataURI: "http://blog-stuff.herokuapp.com/api/v1/post",
      mainData: {},
      moreNewsData: []
    };
  }

  //Fetch the data related to the post based on Id and also other news that the user can read
  componentDidMount() {
    httpFetch(`${this.state.dataURI}/${this.props.match.params.id}`, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "success")
          this.setState({
            mainData: response.data
          });
        else Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred while tryign to retrieve data");
      });

    httpFetch(`${this.state.dataURI}?len=2`, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "success")
          this.setState({
            moreNewsData: response.data
          });
        else Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred while trying to get information");
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
                <Message
                  body={this.state.mainData.body}
                  displayImageURI={this.state.mainData.postImage}
                />
                <AltIcon />
              </div>
            </div>
          </ContainerLayout>
          <PostFooter data={this.state.moreNewsData} />
        </div>
      </div>
    );
  }
}

export default News;
