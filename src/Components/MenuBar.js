import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../Css/MenuBar.css'
class MenuBar extends Component {

  smoothScroll(e) {
    let selector = e.currentTarget.id
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
        <div id='about' className='menuBarButton' onClick={this.smoothScroll}>ABOUT</div>
        <div id='gallery' className='menuBarButton' onClick={this.smoothScroll}>GALLERY</div>
        <div id='blog' className='menuBarButton' onClick={this.smoothScroll}>BLOG</div>
        <div id='contact' className='menuBarButton' onClick={this.smoothScroll}>CONTACT</div>
      </div>
    )
  }
}

export default MenuBar
