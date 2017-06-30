import React, { PureComponent } from "react";
import { ContainerLayout } from "../../containers/Layout";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";
import { httpFetch } from "../../containers/Request";

/**
 * @Component Authentication renders login screen of the screen 
 */
class Authentication extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loginURI: "/api/v1/auth/login",
      data: {}
    };
    this.login = this.login.bind(this);
  }

  /**
 * log user into aplication after supplying informATION 
 * @param {Object} param ({email|String, password|String}) 
 */
  login({ email, password }) {
    httpFetch(this.state.loginURI, {
      handleResponseAs: "json",
      method: "post",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (response.status == "success") {
          window.localStorage.setItem(
            "user_details",
            JSON.stringify(response.data)
          );
          this.props.history.push("/loggedIn");
        } else return Promise.reject(response.message);
      })
      .catch(error => {
        console.log("An error occurred while trying to rerieve data");
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <ContainerLayout color="#FBFCFD">
            <div className="row">
              <div className="col-xs-12">
                <AuthenticationForm login={this.login} />
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
  }
}

export default Authentication;
