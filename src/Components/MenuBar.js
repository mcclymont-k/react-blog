import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class MenuBar extends Component {

  smoothScroll(e) {
    let selector = e.currentTarget.className
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
        <div className='logo'>LOGO</div>
        <div className='about' onClick={this.smoothScroll}>About</div>
        <div className='gallery' onClick={this.smoothScroll}>Gallery</div>
        <div className='blog' onClick={this.smoothScroll}>BLOG</div>
        <div>Contact</div>
      </div>
    )
  }
}

export default MenuBar
