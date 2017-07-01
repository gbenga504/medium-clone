import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component SearchInput renders the html search input 
 */
class SearchInput extends PureComponent {
  /**
   * @param {Object} ev 
   */
  keyPress(ev) {
    let searchValue = this.inputRef.value;
    this.props.onKeyPress(ev, searchValue);
  }

  render() {
    return (
      <div className="row search">
        <input
          autoFocus
          type="text"
          ref={ref => {
            this.inputRef = ref;
          }}
          placeholder="Enter a search item"
          id="searchInput"
          onKeyPress={ev => this.keyPress(ev)}
        />
      </div>
    );
  }
}

export default SearchInput;
