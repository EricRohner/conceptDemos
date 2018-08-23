import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import Display from './Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Display />
      </div>
    )
  }
}

export default App
