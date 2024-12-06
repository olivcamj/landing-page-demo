import React from 'react';
import possibilityImage from '../../assests/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <section className="gpt3__possibility section__margin" id="possibility">
      <div className="gpt3__possibility_image-container">
        <img src={possibilityImage} alt="possibility" className="gpt3__possibility-image"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possiblities are beyond your imagination</h1>
        <p></p>
        <h4>Request Early Access to Get Started </h4>
      </div>
    </section>
  )
}

export default Possibility
