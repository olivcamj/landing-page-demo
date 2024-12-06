import React from 'react';
import { Article } from '../../components/';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <section className=" gpt3__blog section__margin"id="blog">
      <div className="gpt3__heading">
        <h1 className="gradient__text"></h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-group-a">
          <Article imgUrl={blog1} title="GPT-3 and Open AI is the future. Let's explore how?" date="Sept 26, 2021" />
        </div>
        <div className="gpt3__blog-group-b">
        <Article imgUrl={blog2} title="GPT-3 and Open AI is the future. Let's explore how?"date="Sept 26, 2021" />
        <Article imgUrl={blog3} title="GPT-3 and Open AI is the future. Let's explore how?" date="Sept 26, 2021" />
        <Article imgUrl={blog4} title="GPT-3 and Open AI is the future. Let's explore how?" date="Sept 26, 2021" />
        <Article imgUrl={blog5} title="GPT-3 and Open AI is the future. Let's explore how?"date="Sept 26, 2021" />
        </div>
      </div>
    </section>
  )
}

export default Blog
