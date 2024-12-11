import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <article className="article">
      <div className="article__image-container">
        <img src={imgUrl} alt="blog"  className="article__image"/>
      </div>
      <div className="article__content">
        <div>
          <p className="article__text">{ date} </p>
          <h3 className="article__title">{ title}</h3>
        </div>
        <p className="article__text">Read Full Article</p>
      </div>
    </article>
  )
}

export default Article