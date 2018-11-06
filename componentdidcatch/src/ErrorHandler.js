import React, { Component } from "react";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    if (this.state.error) {
      return (
        <p>
          {this.state.error.toString()} Stack:
          {this.state.info.componentStack.toString()}
        </p>
      );
    }
    return this.props.children;
  }
}
export default ErrorHandler;
