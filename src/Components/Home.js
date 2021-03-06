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
        ), 500)
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
        <Blog />
        <div className='contactContainer'>
          <h1>Contact</h1>
          <h2>
            Please feel free to get in contact.<br/>I am eager to hear about speaking engagements, open source projects and work oppurtunities.
          </h2>
          <h3>mcclymont.kieran@gmail.com</h3>
          <a href="https://twitter.com/KieMccl?ref_src=twsrc%5Etfw"><img className='socialButton' src={require('../Images/twit.png')} alt='social'/></a>
          <a href="https://www.linkedin.com/in/kieran-mcclymont-34039b167/"><img className='socialButton' src={require('../Images/linkedin.png')} alt='insta button'/></a>
          <a href='https://github.com/mcclymont-k'><img className='socialButton' src={require('../Images/github.png')} alt='github'/></a>
        </div>
      </div>
    )
  }
}

export default Home
