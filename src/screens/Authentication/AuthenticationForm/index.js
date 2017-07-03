import React, { PureComponent } from "react";
import SubContainer from "../SubContainer";
import "./index.css";

/**
 * @Component AuthenticationForm renders the main form for the login screen
 */
class AuthenticationForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updateInputDetails = this.updateInputDetails.bind(this);
    this.login = this.login.bind(this);
  }

  //handles loging in of the application
  login() {
    this.props.login(this.state);
  }

  /**
 * updates the state of the input element using its value to set state 
 * @param {*} ({type|String, value|String})
 */
  updateInputDetails({ type, value }) {
    type == "email"
      ? this.setState({ email: value })
      : this.setState({ password: value });
  }

  render() {
    return (
      <SubContainer>
        <FormHeader />
        <TagLine />
        <LoginForm onKeyUp={this.updateInputDetails} />
        <LoginBtn onClick={this.login} />
      </SubContainer>
    );
  }
}

/**
 * @Functional Component renders the header of the login form 
 */
const FormHeader = () => {
  return (
    <div className="row">
      <div className="col-xs-12 formHeader" />
    </div>
  );
};

/**
 * @Functional Component renders the tagline of the login form 
 */
const TagLine = () => {
  return (
    <div className="row tagMainHeader">
      <div className="col-xs-12 text-center tagHeadLine">
        Click Login to continue
      </div>
    </div>
  );
};

/**
 * @Functional component renders the login form of the login screen 
 * @param {Object} props 
 */
const LoginForm = props => {
  return (
    <div className="row">
      <input
        ref={ref => (this.email = ref)}
        type="email"
        placeholder="Enter your email"
        className="col-xs-12 col-sm-offset-1 col-sm-10 formElContainer inputEl"
        onKeyUp={() => {
          props.onKeyUp({ type: "email", value: this.email.value });
        }}
        onChange={() => {
          console.log(this.email.value);
          props.onKeyUp({ type: "email", value: this.email.value });
        }}
      />
      <input
        ref={ref => (this.password = ref)}
        type="password"
        placeholder="Enter your password"
        className="col-xs-12 col-sm-offset-1 col-sm-10 formElContainer inputEl"
        onKeyUp={() => {
          props.onKeyUp({ type: "password", value: this.password.value });
        }}
        onChange={() => {
          props.onKeyUp({ type: "password", value: this.password.value });
        }}
      />
    </div>
  );
};

/**
 * @Functional Component renders the login button of the form
 * @param {Object} props 
 */
const LoginBtn = props => {
  return (
    <div className="row formElContainer">
      <input
        type="button"
        value="Login"
        onClick={props.onClick}
        className="col-xs-12 col-sm-offset-1 col-sm-10 formElContainer loginBtn"
      />
    </div>
  );
};

export default AuthenticationForm;
