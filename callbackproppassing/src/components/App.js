import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import Display from './Display'

//The callback/prop passing pattern is nice to use when your component tree is relatively flat and you don't expect to
//need the data being passed in too many places.

class App extends Component {

//Use constructor to initialize state. this.state.data will be set by handleSubmit and passed in props to Display.js
  constructor() {
    super()
    this.state = { data: '' }
  }

//handleSubmit is passed in props to Form.js so that Form.js can manipulate the state of App.js, its parent component
  handleSubmit = (event, data) => {
    event.preventDefault()
    this.setState({ data: data })
  }

  render() {
    return (
      <div className="App">
        <h1>The form and display are child components</h1>
        <p>handlesubmit() and data are passed in props</p>
        <p>while state stays in the top level component</p>

{/*Here we instantiate our child components and pass their props as appropriate*/}
        <Form handleSubmit={this.handleSubmit} />
        <Display data={this.state.data} />
      </div>
    )
  }
}

export default App
