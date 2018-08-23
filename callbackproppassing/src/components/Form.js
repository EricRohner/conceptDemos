import React, { Component } from 'react';

class Form extends Component {

//this.state.data is used as input value, we pass it to the callback handleSubmit()
  constructor() {
    super()
    this.state = { data: '' }
  }

  render() {
    return (

      //Here we pull handleSubmit from props and pass it the input value onSubmit
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

export default Form;