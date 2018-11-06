import React, { Component } from "react";

class ErrorCreator extends Component {
  render() {
    throw new Error("Cats on the keyboard");
    return <p>"this is unreachable code!"</p>;
  }
}
export default ErrorCreator;
