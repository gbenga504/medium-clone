import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Controller from './Controller';
import Home from './screens/Home';
import Post from './screens/Post';
import News from './screens/News';
import Search from './screens/Search';
import Authentication from './screens/Authentication';
import Admin from './screens/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Route exact component={Admin}/>
        </Route>
      </Router>
    );
  }
}


          // <Route component={Post} path="/post"/>
          // <Route component={News} path="/news"/>
          // <Route component={Search} path="/search"/>
          // <Route component={Authentication} path="/admin"/>
          // <Route component={Admin} path="/panel"/>
export default App;
