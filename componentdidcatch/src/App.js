import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorHandler from "./ErrorHandler";
import ErrorCreator from "./ErrorCreator";

class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <ErrorCreator />
      </ErrorHandler>
    );
  }
}

export default App;
