import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch,
  Link,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import { hot } from "react-hot-loader";

//Components
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostsItem from "./components/post_item";
import Life from "./components/lifecycle";
import Conditionals from "./components/conditionals";
import User from "./components/user";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink
              to={{
                pathname: "/profile",
                // hash: "#pallavi",
                // search: "?profile=true",
              }}
            >
              Profile
            </NavLink>
            <NavLink to="/life">Life</NavLink>
            <NavLink to="/conditionals">Conditionals</NavLink>
            <NavLink to="/user">User</NavLink>
          </header>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/posts/:id" component={PostsItem} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/life" exact component={Life} />
            <Route path="/conditionals" exact component={Conditionals} />
            <Route path="/user" exact component={User} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
