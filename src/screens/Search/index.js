import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "../../containers/Header";
import SearchInput from "./SearchInput";
import Result from "./Result";
import { httpFetch } from "../../containers/Request";

/**
 * @Component Search is a serach based container component 
 */
class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchURI: "http://blog-stuff.herokuapp.com/api/v1/search/post",
      searchData: [],
      startData: 0,
      isDataLoading: false,
      makePostLinkVisible: false
    };
    this.scrollToBottom();
  }

  componentDidMount() {
    let shouldMakeVisible = window.localStorage.getItem("user_details")
      ? true
      : false;
    this.setState({
      makePostLinkVisible: shouldMakeVisible
    });
  }

  /**
   * 
   * @param {Object} ev (contains the event representing the object of the preformed action)
   * @param {String} searchValue (This a string containing the search value)
   */
  handleSearchRequest = (ev, searchValue) => {
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
          if (response.status == "success")
            this.setState((prevState, prevProps) => {
              return {
                searchData: [...prevState.searchData, ...response.data],
                isDataLoading: false,
                startData: prevState.startData + response.data.length
              };
            });
          else {
          }
        })
        .catch(error => {
          this.setState({ isDataLoading: false });
        });
    }
  };

  /**
   * Request more information when the user scolls to the bottom of the page 
   */
  scrollToBottom = () => {
    window.onscroll = ev => {
      const GLOBAL_CONTAINER = document.getElementsByTagName("div")[0];
      if (
        window.scrollY + window.innerHeight >=
        GLOBAL_CONTAINER.scrollHeight
      ) {
        this.handleSearchRequest(ev);
      }
    };
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header
            color="#fff"
            makePostLinkVisible={this.state.makePostLinkVisible}
          />
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
