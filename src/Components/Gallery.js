import React, { Component } from 'react';


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
    console.log(overlay)
    console.log(overlay.classList)
    overlay.classList.remove('mainOverlayOpen')
  }

  render () {
    return(
      <div>
        <div className='mainOverlay' onClick={this.close}>
          <button onClick={this.close} className='imageCloseButton'>Close x</button>
          <img className='overlayImage' />
        </div>
        <div className='galleryContainer' >
          {
            this.state.digits
            ? this.state.digits.map(([h, v]) =>
              <div className= {`item  h${h} v${v}`} onClick={this.handleClick}>
                <img src={require(`../Images/${this.randomNumber(12)}.jpg`)} />
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
