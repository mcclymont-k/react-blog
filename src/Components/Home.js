import React, { Component } from 'react';
import MenuBar from './MenuBar'
import Gallery from './Gallery'
import Blog from './Blog'

class Home extends Component {

  render () {
    return(
      <div>
        <MenuBar />
        <section className='aboutContainer'>About</section>
        <Gallery />
        <Blog className='blogContainer' />
      </div>
    )
  }
}

export default Home
