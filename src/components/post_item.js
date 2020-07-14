import React from "react";
import { Link } from "react-router-dom";

const PostsItem = (props) => {
  return (
    <div>
      <h2>This is Invd Post Page</h2>
      {props.match.params.id}
    </div>
  );
};

export default PostsItem;
