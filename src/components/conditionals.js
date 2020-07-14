import React from "react";

const Conditionals = () => {
  const value = false;

  const returnValue = () => {
    //All Logic
    return true;
  };

  const showIt = () => {
    return (
      <div>
        {returnValue() ? (
          <div>Hello,it's true</div>
        ) : (
          <div>Hello it's false</div>
        )}
      </div>
    );
  };
  return (
    <div>
      <h2>This is Conditionals Page</h2>
      <div>
        {value ? <div>Hello,it's true</div> : <div>Hello it's false</div>}
      </div>

      {/* <div>
        {returnValue() ? (
          <div>Hello,it's true</div>
        ) : (
          <div>Hello it's false</div>
        )}
      </div> */}

      <div>{showIt()}</div>
    </div>
  );
};

export default Conditionals;
