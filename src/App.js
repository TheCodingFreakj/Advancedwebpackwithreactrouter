import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader";

//Components
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
