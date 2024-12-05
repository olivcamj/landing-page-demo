import React from 'react';
import possibilityImage from '../../assests/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibilty section__margin" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possiblities are beyond your imagination</h1>
        <p></p>
        <p>Request Early Access to Get Started </p>
      </div>
    </div>
  )
}

export default Possibility
