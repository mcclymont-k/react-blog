import React, { Component } from 'react';

class About extends Component {
  render () {
    return(
      <div className='aboutContainer'>
        <div className='aboutTitle'>
          <img className='aboutImage' src={require("../Images/kieran.jpg" )} />
          <div className='aboutText'>
            <h1>Hi, my name is <h3>Kieran</h3><br/><br/>I <h3>design</h3> and <h3>develop</h3> applications for the web.</h1><br/><br/>
            Please check out my <h3>projects</h3>, personal photography <h3>gallery</h3> and <h3>blog</h3> posts
            below.<br/><br/> Use the contact section to get in
            contact regarding work or talking oppurtunities.
          </div>
        </div>
        <div className='projectContainer'>
          <div>
            <h1>Meditation Timer</h1>
            <h2>This application allows you to time your daily meditations and save the information.
            It gives you audio reminders at selected intervals and helps you to track and maintain a regular practice.
            Check it out <a href="https://meditation-timer-app.herokuapp.com/">here</a>
            </h2>
          </div>
          <div>
            <a href="https://meditation-timer-app.herokuapp.com/"><img className='projectImage' src={require('../Images/meditation.jpg')} /></a>
          </div>
          <div>
            <h1>Brainstorm-anon</h1>
            <h2>This application helps encourage people to collaborate through anonymous brainstorming.
            The idea is to relieve the pressure of peer judgement and allow the free flow of ideas in a team.
            Each collaborator can add ideas to the brainstorm tree without identification allowing for the wildest
             and wackiest flow of thoughts. Check it out <a href="https://brainstorm-anon.herokuapp.com/">here</a>
            </h2>
          </div>
          <div>
            <a href='https://brainstorm-anon.herokuapp.com/'><img className='projectImage' src={require('../Images/brainstorming.png')} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default About
