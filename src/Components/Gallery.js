import React, { Component } from 'react';

class Gallery extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const digits = Array.from({ length: 50}, () =>
      [this.randomNumber(4), this.randomNumber(4)])
    this.setState({digits: digits})


  }

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
  }




  render () {
    return(
      <div>
        {console.log(this.state.digits)}
        Gallery
      </div>
    )
  }
}

export default Gallery
