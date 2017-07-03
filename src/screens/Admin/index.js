import React, { PureComponent } from "react";
import Header from "../../containers/Header";
import { ContainerLayout } from "../../containers/Layout";
import SubHeader from "./SubHeader";
import { MaterialCard } from "../../containers/cards";
import Linking from "../../containers/Linking";
import { httpFetch } from "../../containers/Request";
import { ToolTip } from "../../containers/Report";

/**
 * @Component Admin renders the admin scren of the application 
 */
class Admin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      profileURI: "http://blog-stuff.herokuapp.com/api/v1/user",
      adminData: {},
      posts: [],
      deleteURI: "http://blog-stuff.herokuapp.com/api/v1/post",
      makePostLinkVisible: false,
      toolTipMessage: null,
      toolTipType: null,
    };
    this.deletePost = this.deletePost.bind(this);
  }

  //Fetch the admin information and some posts
  componentDidMount() {
    let shouldMakeVisible = window.localStorage.getItem("user_details")
      ? true
      : false;
    this.setState({
      makePostLinkVisible: shouldMakeVisible
    });

    let userId = JSON.parse(window.localStorage.getItem("user_details")).userId;
    httpFetch(`${this.state.profileURI}/${userId}`, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "error") return Promise.reject(response.message);
        else {
          let admin_data = response.data;
          this.setState({
            adminData: {
              userProfilePic: admin_data.userProfilePic,
              firstName: admin_data.firstName,
              lastName: admin_data.lastName
            },
            posts: admin_data.Posts
          });
        }
      })
      .catch(error => {
        console.log(
          "An error occurred while trying to read info from the database", error
        );
      });
  }

  /**
 * Delete ost based on Id 
 * @param {String} postId 
 */
  deletePost(postId) {
    this.setState({
      toolTipMessage: "Deleting post...",
      toolTipType: "loading"
    });
    httpFetch(`${this.state.deleteURI}/${postId}`, {
      method: "delete",
      handleResponseAs: "json"
    }).then(response => {
      if (response.status == "success") {
        let updatedPost = this.state.post.filter(item => {
          return item.postId != postId;
        });
        this.setState({
          post: updatedPost,
          toolTipMessage: "Post Deleted successfully",
          toolTipType: "success"
        });
      } else {
        this.setState({
          toolTipMessage: "Error occurred in deleting post",
          toolTipType: "error"
        });
      }
    });
  }

  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <ToolTip
          message={this.state.toolTipMessage}
          type={this.state.toolTipType}
        />
        <div className="col-xs-12" style={{ height: "100%" }}>
          <Header
            color={"#fff"}
            makePostLinkVisible={this.state.makePostLinkVisible}
          />
          <SubHeader profile={this.state.adminData} />
          <ContainerLayout color="#F4F4EF">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6"
                style={{ backgroundColor: "#F4F4EF" }}
              >
                {this.state.posts.map(data => {
                  return (
                    <Linking to={`/news/${data.id}`} key={`${data.id}`}>
                      <MaterialCard data={data} deletePost={this.deletePost}/>
                    </Linking>
                  );
                })}
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
  }
}

export default Admin;
