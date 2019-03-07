import React, { Component } from 'react'
import '../Css/About.css'
let tech = require('../Images/tech.gif')

class About extends Component {

  render () {
    return(
      <div className='aboutContainer'>
        <div className='opacityCover' />
        <div className='aboutContent'>
          <h1>Kieran McClymont</h1>
          <h2>
            I am a software developer with a broad set of skills and a wide variety of
            interests. I build functional web applications using javascript, I
            create data visualisations in d3 and I write deep learning models for
            machine learning using PyTorch. Check out my projects below for examples
            of my work or contact me for more details.
          </h2>
          <img id='gif' src={tech} alt='tech gif'></img>
        </div>
      </div>
    )
  }
}

export default About
