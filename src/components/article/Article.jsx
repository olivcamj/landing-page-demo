import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <section className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-conteinaer_article-content">
        <div>
          <p>{ date} </p>
          <h3>{ title}</h3>
        </div>
      </div>
      <p>Read Full Article</p>
    </section>
  )
}

export default Article