import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "../../containers/Header";
import { Headlines, TextRight, ButtonRight } from "./Headlines";
import Section from "./Section";
import { StaticFooter } from "../../containers/Footer";
import { httpFetch } from "../../containers/Request";

/**
 * @Component Home renders the home of the blog 
 */
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      latestLoad: false,
      latestCount: 0,
      latestURI: "http://blog-stuff.herokuapp.com/api/v1/post",
      latestData: [],
      makePostLinkVisible: false
    };
  }

  //Fetch Latest news information from DB
  componentDidMount = () => {
    let shouldMakeVisible = window.localStorage.getItem("user_details")
      ? true
      : false;
    this.setState({
      makePostLinkVisible: shouldMakeVisible
    });

    httpFetch(this.state.latestURI, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "success") {
          this.setState({
            latestData: response.data,
            latestCount: response.data.length,
            latestLoad: false
          });
        } else return Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred in fetching information", error);
      });
  };

  /**
   * @function takes topic as params and loads more data based on the topic
   * @param {*} topic 
   * 
   */
  loadMore = topic => {
    let URI = null;

    httpFetch(`${this.state.latestURI}?start=${this.state.latestCount}`, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "success" && response.data.length >= 1)
          this.setState((prevState, prevProps) => {
            return {
              latestData: response.data,
              latestLoad: false,
              latestCount: prevState.latestCount + response.data.length
            };
          });
        else if (response.data.length < 1)
          this.setState({
            latestLoad: false
          });
        else return Promise.reject(response.message);
      })
      .catch(error => {
        this.setState({ latestLoad: false });
        console.log("An error occurred in fetching information", error);
      });

    this.setState({
      latestLoad: true
    });
  };

  render() {
    return (
      <ContainerLayout color="#FBFCFD">
        <div className="row">
          <div className="col-xs-12">
            <Header
              color="#FBFCFD"
              makePostLinkVisible={this.state.makePostLinkVisible}
            />
            <Headlines title="Latest News">
              <TextRight title="More" onClick={this.loadMore} />
            </Headlines>
            <Section
              data={this.state.latestData}
              isDataLoading={this.state.latestLoad}
            />
          </div>
        </div>
        <StaticFooter />
      </ContainerLayout>
    );
  }
}

export default Home;
