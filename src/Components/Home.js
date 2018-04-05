import React, { Component } from 'react';
import MenuBar from './MenuBar'
import Gallery from './Gallery'


class Home extends Component {
  render () {
    return(
      <div>
        <MenuBar />
        Kieran McClymont
        <Gallery />
      </div>
    )
  }
}

export default Home
