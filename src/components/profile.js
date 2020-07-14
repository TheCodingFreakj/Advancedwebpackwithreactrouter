import React from "react";
import { Link } from "react-router-dom";

//Import the auth page
import Auth from "../hoc/auth";

const Profile = (props) => {
  return (
    <div>
      <h2>This is Profile Page</h2>
      <Auth>
        <Link
          to={{
            pathname: `${props.match.url}/posts`,
          }}
        >
          Take me to /profile/posts
        </Link>
      </Auth>
    </div>
  );
};

//use props in class component https://www.robinwieruch.de/react-pass-props-to-component

export default Profile;
