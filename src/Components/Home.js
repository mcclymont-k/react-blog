import React, { Component } from 'react';
import MenuBar from './MenuBar'
import Gallery from './Gallery'
import Blog from './Blog'
import About from './About'
import Experience from './Experience'

class Home extends Component {

  componentDidMount() {
    let scrollTimer

    window.onscroll = function(e) {
      clearTimeout(scrollTimer)
      let targets = document.querySelectorAll('.menuBarButton')
      scrollTimer = window.setTimeout(() =>
        targets.forEach(target =>
          target.style.transform = 'translate(0, 0)'
        ), 1000)
      targets.forEach( target => {
        target.style.transform = 'translate(0, -100px)'
      })


    }
  }
  render () {
    return(
      <div>
        <MenuBar />
        <About />
        <Experience />
        <Gallery />
        <Blog />
        <div className='contactContainer'>
          <h1>Contact</h1>
          <h2>
            Please feel free to get in contact.<br/>I am eager to hear about speaking engagements, open source projects and work oppurtunities.
          </h2>
          <h3>email: mcclymont.kieran@gmail.com </h3>
          <a href="https://twitter.com/KieMccl?ref_src=twsrc%5Etfw"><img className='socialButton' src={require('../Images/twit.png')} /></a>
          <a href=""><img className='socialButton' src={require('../Images/insta.png')} /></a>
        </div>
      </div>
    )
  }
}

export default Home
