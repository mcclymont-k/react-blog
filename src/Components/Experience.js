import React, { Component } from 'react'
import '../Css/Experience.css'

const jsLogo = require('../Images/javaScriptLogo.png')
const reactLogo = require('../Images/react.png')
const cssLogo = require('../Images/css.png')
const d3Logo = require('../Images/d3.png')
const gitLogo = require('../Images/git.png')
const htmlLogo = require('../Images/html5.png')
const nodeLogo = require('../Images/node.png')
const pytorchLogo = require('../Images/pytorchLogo.png')
const vueLogo = require('../Images/vue.png')
const pythonLogo = require('../Images/python.png')
const oldGrowthImage = require('../Images/oldGrowth.png')
const careyStoreImage = require('../Images/careyStore.png')
const brainstormImage = require('../Images/brainstorm.png')
const d3Project1Image = require('../Images/d3Project1.png')
const d3Project2Image = require('../Images/d3Project2.png')
const laravelLogo = require('../Images/laravelLogo.png')
const meditationAppImage = require('../Images/meditationApp.png')


class Experience extends Component {
  render() {
    return (
      <div className='experienceContainer'>
        <h1>Frameworks and languages I love using</h1>
        <div className='logoContainer'>
          <div className='individualLogo'>
            <img className='techLogo' src={jsLogo} alt='logo'/>
            <h2>JavaScript es8</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={cssLogo} alt='logo'/>
            <h2>CSS</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={htmlLogo} alt='logo'/>
            <h2>HTML</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={d3Logo} alt='logo'/>
            <h2>d3</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={vueLogo} alt='logo'/>
            <h2>Vue.js</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={reactLogo} alt='logo'/>
            <h2>react</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={laravelLogo} alt='logo'/>
            <h2>Laravel</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={nodeLogo} alt='logo'/>
            <h2>node.js</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={pytorchLogo} alt='logo'/>
            <h2>PyTorch</h2>
          </div>
          <div className='individualLogo'>
            <img className='techLogo' src={pythonLogo} alt='logo'/>
            <h2>Python</h2>
          </div>
        </div>
        <div className='projectsContainer'>
          <div className='individualProject' onClick={e => window.location.href = 'https://keen-thompson-275e39.netlify.com'}>
            <img src={d3Project1Image} alt='project'/>
            <h1>d3 data-vistualisation 1</h1>
            <h2>
              This project presents data visulaisation examples using d3. The data
              is being pulled from the random user data api and presented in three
              different ways.<br/><br/>
              This application uses:<br/>
              - JS, React, HTML, CSS<br/>
              - d3 data visualisation
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://carey-store.herokuapp.com'}>
            <img src={careyStoreImage} alt='project'/>
            <h1>Creativity by design</h1>
            <h2>
              Creativity by design is a portfolio website for a minnesota based designer.
              It was a  freelance project I continue to maintain.<br/><br/>
              The project uses:<br/>
              - JS, Vue, HTML, Css<br/>
              - SquareUp backend, Node and express
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://brainstorm-anon-frontend.herokuapp.com'}>
            <img src={brainstormImage} alt='project'/>
            <h1>Brainstorm anon</h1>
            <h2>
              Brainstorm anon is an applciation where people can brainstorm and save their changes to the cloud anonymously.
              The ides is to allow people to give ideas on projects without the fear of peer judgement.<br/><br/>
              The application uses:<br/>
              - JS, Vue.js, HTML, CSS <br/>
              - Node.js with express<br/>
              - MongoDB and mongoose
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://awesome-lalande-485e6e.netlify.com/'}>
            <img src={oldGrowthImage} alt='project'/>
            <h1>old growTh</h1>
            <h2>
              old growTh is a website deidcated to educating people on old growth forests.
              It provides information, educational content and DIY help on building your
              own small scale forest.<br/><br/>
              The project uses:<br/>
              - JS, React, HTML, CSS<br/>
              - Redux for state management<br/>
              - d3 data visulaisation<br/>
              - Firebase as the serverless database
            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://meditation-timer-app.herokuapp.com'}>
            <img src={meditationAppImage} alt='project'/>
            <h1>Meditation Timer</h1>
            <h2>
              Meditation Timer is an application for timing meditation sessions,
              recording your times and recording those times to a database. It has
              A digital timer as well as options for audio reminders in changeable increments.
              The application presents your meditation history in text and graph form. The application
              also has an article section. <br/><br/>
              This application uses:<br/>
              - JS, React, HTML, CSS<br/>
              - Firebase, as a serverless database<br/>

            </h2>
          </div>
          <div className='individualProject' onClick={e => window.location.href = 'https://d3-graphs.herokuapp.com/'}>
            <img src={d3Project2Image} alt='project'/>
            <h1>d3 data-visualisation 2</h1>
            <h2>
              This project presents data visulaisation examples using d3. It uses
              randomly generated data as well as data pulled from APIs for the
              visualisations<br/><br/>
              This application uses:<br/>
              - JS, React, HTML, CSS
              - d3 data visualisation
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
