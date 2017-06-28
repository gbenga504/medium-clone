import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";
import {httpFetch} from '../../containers/Request';
import {withRouter} from 'react-router-dom';

class Authentication extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      loginURI : '',
      data : {},
    }
    this.login = this.login.bind(this);
  }

  login({email, password}){
    httpFetch(this.state.loginURI, {
      handleResponseAs: "json",
      method: "post",
      body: JSON.stringify({
        email,
        password
      })
    }).then (data => {
        if(data.status == "success"){
          window.localStorage.setItem('user_details', JSON.stringify(data.data));
          this.props.history.push('/loggedIn');
        }
        else return Promise.reject(data.message);
    }).catch(error => {
        console.log("An error occurred while trying to rerieve data");
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <ContainerLayout color="#FBFCFD">
            <div className="row">
              <div className="col-xs-12">
                <AuthenticationForm login={this.login}/>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
  }
}

export default withRouter(Authentication);
