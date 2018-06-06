import React, { Component } from 'react'
import '../Css/Experience.css'

const reactLogo = require('../Images/react.png')
const cssLogo = require('../Images/css.png')
const d3Logo = require('../Images/d3.png')
const gitLogo = require('../Images/git.png')
const htmlLogo = require('../Images/html5.png')
const nodeLogo = require('../Images/node.png')
const tfLogo = require('../Images/tensorflow.png')
const vueLogo = require('../Images/vue.png')

class Experience extends Component {
  render() {
    return (
      <div className='experienceContainer'>
        <h1>Frameworks I use regularly</h1>
        <div className='logoContainer'>
          <div className='individualLogo'>
            <img className='techLogo' src={reactLogo}/>
            <h2>React</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={cssLogo}/>
            <h2>CSS</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={htmlLogo}/>
            <h2>HTML</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={d3Logo}/>
            <h2>d3</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={vueLogo}/>
            <h2>Vue.js</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={nodeLogo}/>
            <h2>node.js</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={gitLogo}/>
            <h2>Git</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={tfLogo}/>
            <h2>TensorFlow</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
