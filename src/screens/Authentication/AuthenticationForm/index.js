import React, { PureComponent } from "react";
import SubContainer from "../SubContainer";
import "./index.css";

class AuthenticationForm extends PureComponent {
  render() {
    return (
      <SubContainer>
        <FormHeader />
        <TagLine />
        <SocialRegistrationBtn />
        <SocialRegistrationBtn />
      </SubContainer>
    );
  }
}

const FormHeader = () => {
  return (
    <div className="row">
      <div className="col-xs-12 formHeader" />
    </div>
  );
};

const TagLine = () => {
  return (
    <div className="row tagMainHeader">
      <div className="col-xs-12 text-center tagHeadLine">
        Continue with social authentication to have access to update and make posts
        {" "}
      </div>
    </div>
  );
};

const SocialRegistrationBtn = props => {
  return (
    <div className="row btnContainer">
      <div className="col-xs-12 col-sm-offset-1 col-sm-10 socialBtn" />
    </div>
  );
};

export default AuthenticationForm;
