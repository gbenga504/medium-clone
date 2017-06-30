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
      latestURI: "/badoo2.json",
      latestData: []
    };
  }

  //Fetch Latest news information from DB
  componentDidMount() {
    httpFetch(this.state.latestURI, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(response => {
        if (response.status == "success")
          this.setState({
            latestData: response.data,
            latestCount: response.data.length,
            latestLoad: false
          });
        else Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred in fetching information", error);
      });
  }

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
        if (response.status == "success")
          this.setState((prevState, prevProps) => {
            return {
              latestData: response.data,
              latestLoad: false,
              latestCount: prevState.latestCount + response.data.length
            };
          });
        else Promise.reject(response.message);
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
            <Header color="#FBFCFD" />
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
