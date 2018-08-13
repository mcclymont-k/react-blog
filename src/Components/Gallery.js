import React, { Component } from 'react';
import '../Css/Gallery.css'


class Gallery extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const digits = Array.from({ length: 50}, () =>
      [this.randomNumber(4), this.randomNumber(4)]).concat([[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]])
    this.setState({digits: digits})
  }

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
  }

  handleClick(e) {
    let currentImage = e.currentTarget.querySelector('img').src
    let overlay = document.querySelector('.mainOverlay')
    let overlayImage = overlay.querySelector('img')
    overlayImage.src = currentImage
    overlay.classList.add('mainOverlayOpen')
  }

  close() {
    let overlay = document.querySelector('.mainOverlay')
    overlay.classList.remove('mainOverlayOpen')
  }

  render () {
    return(
      <div>
        <div className='mainOverlay' onClick={this.close}>
          <button onClick={this.close} className='imageCloseButton'>Close x</button>
          <img className='overlayImage' alt='overlay'/>
        </div>
        <div className='galleryContainer' >
          {
            // Checking that state has been updated before iterating through the images
            this.state.digits
            ? this.state.digits.map(([h, v], i) =>
              <div className= {`item  h${h} v${v}`} key={i} onClick={this.handleClick}>
                <img src={require(`../Images/${this.randomNumber(12)}.jpg`)} alt='gallery'/>
                <div className='itemOverlay'>
                  <button className="itemOverlayButton">VIEW -></button>
                </div>
            </div>
          ): ""
        }
        </div>
      </div>
    )
  }
}

export default Gallery
