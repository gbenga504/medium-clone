import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "../../containers/Header";
import { Headlines, TextRight, ButtonRight } from "./Headlines";
import Section from "./Section";
import { StaticFooter } from "../../containers/Footer";
import { Fetch } from "../../containers/Request";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      latestLoad: false,
      latestCount: 0,
      latestURI: "/badoo2.json",
      latestData: []
    };
    this.loadMore = this.loadMore.bind(this);
    this.callLoadMoreNews = this.callLoadMoreNews.bind(this);
    this.composeFetch = this.composeFetch.bind(this);
  }

  componentDidMount() {
    Fetch(this.state.latestURI, {
      method: "Get",
      handleResponseAs: "json"
    })
      .then(data => {
        this.setState({
          latestData: data,
          latestCount: data.length,
          latestLoad: false
        });
      })
      .catch(error => {
        console.log("An error occurred in fetching information", error);
      });
  }

  loadMore(topic) {
    let URI = null,
        API_FETCH = this.composeFetch(topic);
        
    API_FETCH.then(data => {
        this.setState((prevState, prevProps)=>{
            return {
              latestData : data,
              latestLoad : false,
              latestCount : prevState.latestCount + data.length,
            }
        });  
    })
    .catch(error => {
        this.setState({latestLoad: false})
        console.log("An error occurred in fetching information", error);
    })

    this.setState({
        latestLoad : true,
    })
  }

  composeFetch(topic) {
    let fetch = null,
        extraInfo = {method: "Get",handleResponseAs: "json"};

      if(topic === "latest") return Fetch(`${this.state.latestURI}?start=${this.state.latestCount}`, extraInfo);
  }

  callLoadMoreNews() {
    this.loadMore("latest");
  }

  render() {
    return (
      <ContainerLayout color="#FBFCFD">
        <div className="row">
          <div className="col-xs-12">
            <Header color="#FBFCFD" />
            <Headlines title="Latest News">
              <TextRight title="More" onClick={this.callLoadMoreNews} />
            </Headlines>
            <Section data={this.state.latestData} isDataLoading={this.state.latestLoad} />
          </div>
        </div>
        <StaticFooter />
      </ContainerLayout>
    );
  }
}

export default Home;
