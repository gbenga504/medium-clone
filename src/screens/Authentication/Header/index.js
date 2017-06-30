import React, { PureComponent } from "react";
import { HeaderLayout } from "../../../containers/Layout";
import "./index.css";

/**
 * @Component Header renders the header of the login screen  
 */
class Header extends PureComponent {
  render() {
    return (
      <HeaderLayout border={true} color={"fff"}>
        <div className="col-xs-offset-4 col-xs-4 text-center">
          <img src="" alt="" />
        </div>
      </HeaderLayout>
    );
  }
}

export default Header;
