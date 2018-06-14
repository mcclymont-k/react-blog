import React, { Component } from 'react'
import '../Css/Experience.css'

const jsLogo = require('../Images/javaScriptLogo.png')
const reactLogo = require('../Images/react.png')
const cssLogo = require('../Images/css.png')
const d3Logo = require('../Images/d3.png')
const gitLogo = require('../Images/git.png')
const htmlLogo = require('../Images/html5.png')
const nodeLogo = require('../Images/node.png')
const tfLogo = require('../Images/tensorflow.png')
const vueLogo = require('../Images/vue.png')
const pythonLogo = require('../Images/python.png')
const oldGrowthImage = require('../Images/oldGrowth.png')
const careyStoreImage = require('../Images/careyStore.png')
const brainstormImage = require('../Images/brainstorm.png')
const d3Project1Image = require('../Images/d3Project1.png')
const d3Project2Image = require('../Images/d3Project2.png')
const meditationAppImage = require('../Images/meditationApp.png')


class Experience extends Component {
  render() {
    return (
      <div className='experienceContainer'>
        <h1>Frameworks and languages I love using</h1>
        <div className='logoContainer'>
          <div className='individualLogo'>
            <img className='techLogo' src={jsLogo}/>
            <h2>JavaScript es8</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={reactLogo}/>
            <h2>react</h2>
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
          <div className='individualLogo'>
            <img className='techLogo' src={pythonLogo}/>
            <h2>Python</h2>
          </div>
        </div>
        <div className='projectsContainer'>
          <div className='individualProject' onClick={e => window.location.href = 'https://awesome-lalande-485e6e.netlify.com/'}>
            <img src={oldGrowthImage} alt='project image'/>
            <h1>old growTh</h1>
            <h2>
              old growTh is a website deidcated to educating people on old growth forests.
              It provides information, educational content and DIY help on building your
              own small scale forest.<br/>
              The project uses:<br/>
              - JS, React, HTML, CSS<br/>
              - Redux for state management<br/>
              - d3 data visulaisation<br/>
              - Firebase as the serverless database
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://carey-store.herokuapp.com'}>
            <img src={careyStoreImage} alt='project image'/>
            <h1>Creativity by design</h1>
            <h2>
              Project info and other stuff blah blah blah
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://brainstorm-anon-frontend.herokuapp.com'}>
            <img src={brainstormImage} alt='project image'/>
            <h1>Brainstorm anon</h1>
            <h2>
              Project info and other stuff blah blah blah
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://keen-thompson-275e39.netlify.com'}>
            <img src={d3Project1Image} alt='project image'/>
            <h1>d3 data-vistualisation 1</h1>
            <h2>
              Project info and other stuff blah blah blah
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://meditation-timer-app.herokuapp.com'}>
            <img src={meditationAppImage} alt='project image'/>
            <h1>Meditation Timer</h1>
            <h2>
              Project info and other stuff blah blah blah
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://d3-graphs.herokuapp.com/'}>
            <img src={d3Project2Image} alt='project image'/>
            <h1>d3 data-visualisation 2</h1>
            <h2>
              Project info and other stuff blah blah blah
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
