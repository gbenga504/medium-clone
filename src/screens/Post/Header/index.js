import React from "react";
import { HeaderLayout } from "../../../containers/Layout";
import "./index.css";

/**
 * @Component Header presentational container displays the header of the post screen
 */
const Header = (props) => {
  return (
    <HeaderLayout border={true} color="#fff">
      <div className="col-xs-12">
        <div className="col-sm-4 hidden-xs">
          <img src="" id="logo" alt="logo" />
          &nbsp;
          <span id="saveChanges">Unsaved changes</span>
        </div>
        <div className="col-xs-12 col-sm-offset-2 col-sm-6">
          <div className="section-icon-header-positioner">
            <div id="header-right-section" className="col-xs-3">
              share
            </div>
            <div id="iconHolder" className="col-xs-9">
              <div id="publishBtn" onClick={props.onMakePost}>
                publish
              </div>
              <div id="profileImage">
                <img src="" alt="" id="headerIcons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
