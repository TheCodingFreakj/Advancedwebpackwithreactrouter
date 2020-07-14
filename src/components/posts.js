import React from "react";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Post Page</h2>
        <ul>
          <li>
            <Link to="/posts/1">post1</Link>
            <br></br>
          </li>
          <li>
            <Link to="/posts/2">post2</Link>
            <br></br>
          </li>
          <li>
            <Link to="/posts/3">post3</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Posts;
