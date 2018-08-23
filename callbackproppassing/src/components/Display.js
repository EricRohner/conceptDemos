import React, { Component } from 'react'

class Display extends Component {

//This component should be relatively self explanatory. It pulls data from props as passed by App.js
  render() {
    return (
      <div>
        <h2>Display data on form submit:</h2>
        <p>{this.props.data}</p>
      </div>
    )
  }
}

export default Display