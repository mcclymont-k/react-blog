import React, { Component } from 'react';
import {animateScroll as scroll, scroller } from 'react-scroll'
import '../Css/MenuBar.css'

const logo = require('../Images/logo.png')

class MenuBar extends Component {

  smoothScroll(e) {
  // This is allowing for the use of the logo to return to page top
    let selector
    e.currentTarget.id
    ? selector = e.currentTarget.id
    : selector = 'about'
  // Uses id to locate the scroll location no matter the screen height
    let classSelector = '.' + selector + 'Container'
    let destination = document.querySelector(classSelector).offsetTop
    scroll.scrollTo(destination - 100)
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
      })
    }

  render () {
    return(
      <div className='menuBarContainer'>
        <div className='logo' onClick={this.smoothScroll}>
          <img src={logo} alt='logo'/>
          <h1>K_McC</h1>
        </div>
        <div id='about' className='menuBarButton' onClick={this.smoothScroll}>ABOUT</div>
        <div id='experience' className='menuBarButton' onClick={this.smoothScroll}>WORK</div>
        <div id='blog' className='menuBarButton' onClick={this.smoothScroll}>BLOG</div>
        <div id='contact' className='menuBarButton' onClick={this.smoothScroll}>CONTACT</div>
      </div>
    )
  }
}

export default MenuBar
