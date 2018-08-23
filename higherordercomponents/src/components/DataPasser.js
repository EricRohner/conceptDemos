import React, { Component } from 'react';

const withData = (WrappedComponent) => {
  class DataPasser extends Component {

    constructor(props) {
      super(props)
      this.state = {
        data: ''
      }
    }

    handleSubmit = (event, data) => {
      event.preventDefault()
      this.setState({ data: data })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          data={this.state.data}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  return DataPasser;
};

export default withData;