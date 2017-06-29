import React, { PureComponent } from "react";
import { FlatCard } from "../../../containers/cards";
import Linking from "../../../containers/Linking";
import { CircularLoader } from "../../../containers/Loaders";

/**
 * Section returns a presentational container for the actual post 
 */
class Section extends PureComponent {
  render() {
    return (
      <div className="row" style={Style.Section}>
        <LoaderContainer isDataLoading={this.props.isDataLoading} />
        <div>
          <div className="row" style={Style.CardContainer}>
            {this.props.data.map(data => {
              return (
                <Linking to={`/news/${data.id}`} key={`${data.postId}`}>
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

/**
 * @component LoaderContaoner renders a loader which informs user about an async running operation 
 * @param {*} props 
 */
const LoaderContainer = props => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <CircularLoader isDataLoading={props.isDataLoading} />
      </div>
    </div>
  );
};

const Style = {
  Section: {
    marginTop: 25
  },
  CardContainer: {
    marginTop: 15
  }
};

export default Section;
