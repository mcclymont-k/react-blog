import React, { Component } from 'react';
import '../Css/Blog.css'
const learn = require('../Images/learn.jpg')

class Blog extends Component {

  state = {
    centreArticle: {
      title: 'Blog posts',
      article: 'Click on some stuff to read more'
    },
    articles: [
      {
        index: 0,
        title: 'Before you start learning, take a second to consider how best to learn',
        articleSection1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        articleSection2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image: learn
      }
    ]
  }
  render () {
    return(
      <div className='blogContainer'>
        <div className='sideBar'>
          <div className='articleBlurb' onClick={e => this.setState({ centreArticle: this.state.articles[0]})}>
            <img src={learn}></img>
            <h1>
              Before you start learning, take a moment to think about
              how you might learn.
            </h1>
          </div>
          <div className='articleBlurb' onClick={e => this.setState({ centreArticle: this.state.articles[1]})}>
            <img src={learn}></img>
            <h1>
              Before you start learning, take a moment to think about
              how you might learn.
            </h1>
          </div>
          <div className='articleBlurb' onClick={e => this.setState({ centreArticle: this.state.articles[2]})}>
            <img src={learn}></img>
            <h1>
              Before you start learning, take a moment to think about
              how you might learn.
            </h1>
          </div>
          <div className='articleBlurb' onClick={e => this.setState({ centreArticle: this.state.articles[3]})}>
            <img src={learn}></img>
            <h1>
              Before you start learning, take a moment to think about
              how you might learn.
            </h1>
          </div>
        </div>
        <div className='articleReader'>
          <h1>{this.state.centreArticle.title}</h1>
          <h2>{this.state.centreArticle.articleSection1}</h2>
          <img src={this.state.centreArticle.image} alt=''/>
          <h2>{this.state.centreArticle.articleSection2}</h2>
        </div>
      </div>
    )
  }
}

export default Blog
