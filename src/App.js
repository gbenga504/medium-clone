import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Post from './screens/Post';
import News from './screens/News';
import Search from './screens/Search';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Route exact component={Search} />
        </Route>
      </Router>
    );
  }
}

export default App;
