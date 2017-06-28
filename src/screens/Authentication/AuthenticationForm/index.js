import React, { PureComponent } from "react";
import SubContainer from "../SubContainer";
import "./index.css";

class AuthenticationForm extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.updateInputDetails = this.updateInputDetails.bind(this);
    this.login = this.login.bind(this);
  }

  login(){
    this.props.login(this.state);
  }

  updateInputDetails({type,value}){
    type == 'email' ? this.setState({email:value}) : this.setState({password: value});
  }
  
  render() {
    return (
      <SubContainer>
        <FormHeader />
        <TagLine />
        <LoginForm onKeyUp={this.updateInputDetails}/>
        <LoginBtn onClick={this.login}/>
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
        Click Login to continue
      </div>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <div className="row">
      <input
        ref = {(ref) => this.email = ref}
        type="email"
        placeholder="Enter your email"
        className="col-xs-12 col-sm-offset-1 col-sm-10 formElContainer inputEl"
        onKeyUp={()=> {props.onKeyUp({type:'email', value: this.email.value})}}
      />
      <input
        ref = {(ref) => this.password = ref}
        type="password"
        placeholder="Enter your password"
        className="col-xs-12 col-sm-offset-1 col-sm-10 formElContainer inputEl"
        onKeyUp={()=> {props.onKeyUp({type:'password', value: this.password.value})}}
      />
    </div>
  );
};

const LoginBtn = (props) => {
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
