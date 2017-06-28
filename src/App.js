import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Post from "./screens/Post";
import News from "./screens/News";
import Search from "./screens/Search";
import Authentication from "./screens/Authentication";
import Admin from "./screens/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Post} path="/post" />
          <Route component={News} path="/news/:id" />
          <Route component={Search} path="/search" />
          <Route component={Authentication} path="/admin"/>
          <Route component={Admin} path="/loggedIn" />
        </Switch>
      </Router>
    );
  }
}

export default App;
