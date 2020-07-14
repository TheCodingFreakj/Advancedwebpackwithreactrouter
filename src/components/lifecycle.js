import React from "react";

class Life extends React.Component {
  //get default props

  //set the default state

  state = {
    title: "Lifecycle",
  };

  //before render

  //access to builtin mehods
  componentWillMount() {
    console.log("before render");
  }

  // render jxs
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    );
  }

  //after render jxs

  componentDidMount() {
    console.log("after render");
  }
}
export default Life;
