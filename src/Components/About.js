import React, { Component } from 'react'
import '../Css/About.css'
let kieran = require('../Images/kieran.jpg')

class About extends Component {
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
          <img src={kieran}></img>
        </div>
      </div>
    )
  }
}

export default About
