import React from "react";

//import the userHoc
import userHOC from "../hoc/userhoc";

const User1 = () => {
  return (
    <div>
      <h2>This is User1 Page</h2>
    </div>
  );
};

const User2 = () => {
  return (
    <div>
      <h2>This is User2 Page</h2>
    </div>
  );
};

//we are not exporting user but userhoc
//This export make userhoc to render when we click the user navlink
export default userHOC(User1, User2, "Hello");

//we get props from react router from app.js page
