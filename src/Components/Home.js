import React, { Component } from 'react';
import MenuBar from './MenuBar'
import Gallery from './Gallery'
import Blog from './Blog'
import About from './About'

class Home extends Component {

  render () {
    return(
      <div>
        <MenuBar />
        <About />
        <Gallery />
        <Blog />
        <div className='contactContainer'>
          <h1>Contact details etc.....</h1>
        </div>
      </div>
    )
  }
}

export default Home
