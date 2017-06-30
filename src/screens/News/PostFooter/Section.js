import React, { PureComponent } from "react";
import { FlatCard } from "../../../containers/cards";
import Linking from "../../../containers/Linking";

/**
 * @Component Section renders a container Layout component to layout the bottom cards fro other posts 
 */
class Section extends PureComponent {
  render() {
    return (
      <div className="row" style={{ marginTop: 50 }}>
        <div className="col-xs-12">
          <div className="row">
            {this.props.data.map(data => {
              return (
                <Linking to={`/news/${data.id}`}>
                  <FlatCard data={data} />
                </Linking>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
