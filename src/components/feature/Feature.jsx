import React from 'react'
import './feature.css';

const Feature = ({ title, text }) => (
    <section className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
       <div />
        <h1 className="gpt3__features-container_feature-heading">{ title }</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p className="gpt3__features-container_subtext">{text}</p> 
      </div>
    </section>
  )

export default Feature;
