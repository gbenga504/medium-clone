import React, { PureComponent } from "react";

/**
 * @Component TextRight renders a textual based right component
 */
class TextRight extends PureComponent {
  render() {
    return (
      <div className="row" style={Styles.title}>
        <div style={Styles.rightPositioner}>
          <div
            style={TextStyles.rightPositionerMarker}
            onClick={this.props.onClick}
          >
            {this.props.title}
            &nbsp;
            <img
              src="/images/forward.png"
              alt=""
              style={Styles.backImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * @Component ButtonRight renders a right button based component 
 */
class ButtonRight extends PureComponent {
  render() {
    return (
      <div className="row" style={Styles.title}>
        <div style={Styles.rightPositioner}>
          <div style={ButtonStyles.rightButton}>
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

const Styles = {
  title: {
    fontSize: 14,
    fontFamily: "Raleway",
    marginTop: 35
  },
  rightPositioner: {
    right: 0,
    width: "100%",
    position: "absolute"
  },
  backImage: {
    width: 20,
    height: 20
  }
};

const TextStyles = {
  rightPositionerMarker: {
    right: 0,
    position: "absolute",
    cursor: "pointer"
  }
};

const ButtonStyles = {
  rightButton: {
    right: 0,
    width: "100px",
    borderRadius: "10px",
    position: "absolute",
    textAlign: "center",
    border: "1px solid #2196f3",
    color: "#2196f3"
  }
};

export { TextRight, ButtonRight };
