import React, { PureComponent } from "react";
import Header from "../../containers/Header";
import { ContainerLayout } from "../../containers/Layout";
import SubHeader from "./SubHeader";
import { MaterialCard } from "../../containers/cards";
import Linking from "../../containers/Linking";
import {httpFetch} from "../../containers/Request";

class Admin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      profileURI: "",
      adminData: {},
      posts: [],
      deleteURI: "",
    };
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    httpFetch(`${this.state.profileURI}`, {
      method: "GET",
      handleResponseAs: "json"
    })
      .then(response => {
        if(response.status == "error") return Promise.reject(response.message)
        else {
          let admin_data = response.data;
          this.setState({
            adminData : {userProfilePic: admin_data.userProfilePic, firstName: admin_data.firstName, lastName: admin_data.lastName},
            posts: admin_data.Posts,
          })
        }
      })
      .catch(error => {
        console.log(
          "An error occurred while trying to read info from the database"
        );
      });
  }

  deletePost(postId) {
    httpFetch(`${this.state.deleteURI}/${postId}`, {
      method: "Post",
      handleResponseAs: "json",
    }).then(response => {
      if (response.status == "success") {
        //reset state to match new data
        let updatedPost = this.state.post.filter(item => {
          return item.postId != postId;
        });
        this.setState({
          post: updatedPost
        });
      } else {
        console.warn("data was not deleted");
      }
    });
  }

  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-xs-12" style={{ height: "100%" }}>
          <Header color={"#fff"} />
          <SubHeader profile={this.state.adminData} />
          <ContainerLayout color="#F4F4EF">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6"
                style={{ backgroundColor: "#F4F4EF" }}
              >
                {this.state.posts.map(data => {
                  return (
                    <Linking to={`/news/${data.id}`}>
                      <MaterialCard data={data} deletePost={this.deletePost} />
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
