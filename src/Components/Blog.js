import React, { Component } from 'react';
import '../Css/Blog.css'
import * as firebase from 'firebase'
import fire from '../fire'

const learn = require('../Images/learn.jpg')
const kieran = require('../Images/kieran.jpg')
const database = fire.database()

class Blog extends Component {

  state = {
    centreArticle: {
      title: 'Blog posts',
      article: 'Click on some stuff to read more'
    },
    articles: []
  }

  componentDidMount() {
    const articlesRef = database.ref('Articles')
    articlesRef.on('value', data => {
      let articlesData = data.val()
      let articleKeys = Object.keys(articlesData)
      let articlesArray = []
      articleKeys.forEach(articleKey => {
        articlesArray.push(articlesData[articleKey])
      })
      this.setState({articles: articlesArray})
    })
  }
  render () {
    return(
      <div className='blogContainer'>
        <div className='sideBar'>
          {
            this.state.articles.map(article =>
              <div className='articleBlurb' onClick={e => this.setState({ centreArticle: article})}>
                <img src={eval(article.image1)}></img>
                <h1>
                  {article.title}
                </h1>
              </div>
            )
          }
        </div>
        <div className='articleReader'>
          <h1>{this.state.centreArticle.title}</h1>
          <h2>{this.state.centreArticle.articleSection1}</h2>
          <img src={eval(this.state.centreArticle.image1)} alt=''/>
          <h2>{this.state.centreArticle.articleSection2}</h2>
          <img src={eval(this.state.centreArticle.image2)} alt=''/>
        </div>
      </div>
    )
  }
}

export default Blog
