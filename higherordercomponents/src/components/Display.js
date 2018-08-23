import React, { Component } from 'react'
import DataPasser from './DataPasser'

class Display extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Display data on form submit:</h2>
        <p>{this.props.data}</p>
      </div>
    )
  }
}

export default DataPasser(Display)