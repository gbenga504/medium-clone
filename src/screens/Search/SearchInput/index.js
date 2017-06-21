import React, { PureComponent } from "react";
import "./index.css";

class SearchInput extends PureComponent {
  render() {
    return (
      <div className="row search">
        <input
          autofocus
          type="text"
          placeholder="Enter a search item"
          id="searchInput"
        />
      </div>
    );
  }
}

export default SearchInput;
