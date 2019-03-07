import React, { Component } from 'react';
import '../Css/Blog.css'
import fire from '../fire'

const database = fire.database()

class Blog extends Component {

  state = {
    centreArticle: {
      title: 'Blog posts',
      articleSection1: 'Select blog posts from the sidebar'
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
      this.setState({articles: articlesArray.reverse()})
    })
  }
  render () {
    return(
      <div className='blogContainer'>
        <div className='sideBar'>
          {this.state.articles.length < 1
            ? []
            : this.state.articles.map((article, i) =>
                <div className='articleBlurb' key={i} onClick={e => this.setState({ centreArticle: article})}>
                  <img src={article.image1} alt='article img'></img>
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
          {this.state.centreArticle.link
          ? <a href={this.state.centreArticle.link}><img src={this.state.centreArticle.image1} alt=''/></a>
          : <img src={this.state.centreArticle.image1} alt=''/>}
          <h2>{this.state.centreArticle.articleSection2}</h2>
          <img src={this.state.centreArticle.image2} alt=''/>
          <h2>{this.state.centreArticle.articleSection3}</h2>
          <h2>{this.state.centreArticle.suggestions}</h2>
        </div>
      </div>
    )
  }
}

export default Blog
