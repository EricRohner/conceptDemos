import React, { Component } from 'react';
import DataPasser from './DataPasser'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = { data: '' }
  }

  render() {
    console.log(this.props)
    return (

      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.data)}>
        <input
          value={this.state.data}
          onChange={event => this.setState({ data: event.target.value })}
          type="text"
          placeholder="input"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default DataPasser(Form);