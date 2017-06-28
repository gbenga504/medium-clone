import React, { PureComponent } from "react";
import "./index.css";

class MaterialCard extends PureComponent {
  render() {
    return (
      <div className="row materialCard">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12 adminPostTitle">
              {this.props.data.title}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 post_image">
              <img
                src={this.props.data.postImage}
                alt="new post image"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 post_message_holder">
              <span className="post_message">{this.props.data.body}</span>
            </div>
          </div>
          <div className="row" style={{ height: "30px" }}>
            <div className="col-xs-12">
              <div className="recommend_btn">
                <span className="recommended_tag">23 recommended</span>
                <img
                  src="/images/recommend.png"
                  alt="recommend"
                  className="recommend_img"
                />
              </div>
              <div className="admin_core_btn">
                <img
                  src="/images/edit.png"
                  onClick={() => {
                    this.props.deletePost(`${this.props.data.id}`);
                  }}
                  alt="edit_btn"
                  className="recommend_img"
                />
                <img
                  src="/images/remove.png"
                  alt="delete_btn"
                  className="recommend_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaterialCard;
