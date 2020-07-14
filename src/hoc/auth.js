import React from "react";

//This auth compoenent returns children
//Auth checks if the password is correct

const Auth = (props) => {
  const pass = "password123"; //This is the password user entered while registering
  if (pass != "password1232") {
    return <h3>You are not authorized to enter the page</h3>;
  } else {
    return props.children; // else move forward with the tree
  }
};
export default Auth;
