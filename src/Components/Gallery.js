import React, { Component } from 'react';


class Gallery extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const digits = Array.from({ length: 50}, () =>
      [this.randomNumber(4), this.randomNumber(4)]).concat([[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]])
    this.setState({digits: digits})
  }

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
  }




  render () {
    return(
      <div className='galleryContainer'>
        {
          this.state.digits
          ? this.state.digits.map(([h, v]) =>
            <div className= {`item  h${h} v${v}`}>
              <img src={require(`../Images/${this.randomNumber(8)}.jpg`)} />
              <div className='itemOverlay'>
                <button>View ></button>
              </div>
            </div>
          ): ""
        }
      </div>
    )
  }
}

export default Gallery
