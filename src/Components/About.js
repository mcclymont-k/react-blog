import React, { Component } from 'react'
import '../Css/About.css'
let kieran = require('../Images/kieran.jpg')
let giphy = require('../Images/giphy.gif')
let tech = require('../Images/tech.gif')

class About extends Component {

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('#gif').src = giphy
    }, 10000)
  }
  render () {
    return(
      <div className='aboutContainer'>
        <div className='opacityCover' />
        <div className='aboutContent'>
          <h1>Kieran McClymont</h1>
          <h2>
            I am a software developer with a broad set of skills and a wide variety of
            interests. I build functional web applications in React and Vue, I
            create data visualisations in d3 and I write deep learning models for
            machine learning using TensorFlow. Check out my projects below for examples
            of my work.
          </h2>
          <img id='gif' src={tech}></img>
        </div>
      </div>
    )
  }
}

export default About
