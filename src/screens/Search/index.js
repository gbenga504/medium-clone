import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "../../containers/Header";
import SearchInput from "./SearchInput";
import Result from "./Result";
import { httpFetch } from "../../containers/Request";

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchURI: "/badoo2.json",
      searchData: [],
      startData: 0,
      isDataLoading: false
    };
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
    this.scrollToBottom();
  }

  handleSearchRequest(ev, searchValue) {
    if (
      (ev.which === 13 && /keypress/i.test(ev.type)) ||
      /scroll/i.test(ev.type)
    ) {
      this.setState({
        isDataLoading: true
      });
      httpFetch(
        `${this.state.searchURI}?q=${searchValue}&start=${this.state.startData}&len=7`,
        {
          method: "Get",
          handleResponseAs: "json"
        }
      )
        .then(response => {
          if(response.status == 'success')
            this.setState((prevState, prevProps) => {
              return {
                searchData: response.data,
                isDataLoading: false,
                startData: prevState.startData + response.data.length,
              };
            });
          else {
            
          }
        })
        .catch(error => {
          this.setState({ isDataLoading: false });
          console.log("An error occurred while trying to get data");
        });
    }
  }

  scrollToBottom() {
    window.onscroll = ev => {
      const GLOBAL_CONTAINER = document.getElementsByTagName("div")[0];
      if (
        window.scrollY + window.innerHeight >=
        GLOBAL_CONTAINER.scrollHeight
      ) {
        this.handleSearchRequest(ev);
      }
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header color="#fff" />
          <ContainerLayout color="#fff">
            <div className="row">
              <div className="col-xs-12">
                <SearchInput onKeyPress={this.handleSearchRequest} />
                <Result
                  data={this.state.searchData}
                  isDataLoading={this.state.isDataLoading}
                />
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
  }
}

export default Search;
