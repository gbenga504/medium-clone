import React, { PureComponent } from "react";
import { PlainCard } from "../../../containers/cards";
import Linking from "../../../containers/Linking";
import { CircularLoader } from "../../../containers/Loaders";

/**
 * @Component Result renders container around the result displayed after the search 
 */
class Result extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div className="row" style={Styles.ResultContainer}>
        <div className="col-xs-12 col-sm-6">
          {this.props.data.map(data => {
            return (
              <Linking to={`/news/${data.id}`} key={data.postId}>
                <PlainCard data={data} />
              </Linking>
            );
          })}
          <div className="row">
            <CircularLoader isDataLoading={this.props.isDataLoading} />
          </div>
        </div>
      </div>
    );
  }
}

const Styles = {
  ResultContainer: {
    marginTop: 20
  }
};

export default Result;
