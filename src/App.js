import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Post from './screens/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Route exact component={Post} />
        </Route>
      </Router>
    );
  }
}

export default App;
