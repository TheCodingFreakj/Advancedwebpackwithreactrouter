import React from "react";

//This wrapped component is the user compoenent
const userHOC = (WrappedComponent1, WrappedComponent2, arg1) => {
  //Returns the props passed onto the wrapped component as a function
  //This gets the props as we are rendering this component
  //Here we cab pass the props to the next component
  return (props) => (
    <div>
      <WrappedComponent1 {...props} />
      <WrappedComponent2 {...props} />
      {arg1}
    </div>
  );
};

export default userHOC;
