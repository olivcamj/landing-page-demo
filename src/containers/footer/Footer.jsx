import React from 'react';
import gpt3Logo from '../../assests/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__heading gradient__text">Do you want to step into the future before others?</h1>
      <button className="footer__button">Request Early Access</button>
      <div className='footer__link-container' role='presentation'>
        <div className="footer__logo-container" >
          <img className="footer__logo" src={gpt3Logo} alt='gpt-3'/>
          <p>Experience Tomorrow’s Technology Now</p>
        </div>
        <nav className="footer__nav">
          <div>
        <h4 className='footer__nav-heading'>Links</h4>
          <ul className="footer__links">
            <li className='footer__link'>Overseas</li> 
            <li className='footer__link'>Social Media</li> 
            <li className='footer__link'>Counters</li> 
            <li className='footer__link'>Contact</li> 
          </ul>
          </div>
          </nav>
          <nav className="footer__nav">
          <div>
          <h4 className='footer__nav-heading'>Company</h4>
          <ul className="footer__links">
            <li className='footer__link'>Terms & Conditions</li> 
            <li className='footer__link'>Privacy Policy</li> 
            <li className='footer__link'>Contact</li> 
          </ul>
          </div>
      </nav>
      <div>
        <h4 className='footer__nav-heading'>Get in touch</h4>
        <ul className="footer__contact-info">
          <li className='footer__link'>123 Abc Road, Someplace US</li>
          <li className='footer__link'>000 - 7891</li>
          <li className='footer__link'>info@gpt3startnow.net</li>
        </ul>
        </div>
      </div>
      <p className="footer__copyright">2024 GPT-3 All rights reserved</p>
    </footer>
  )
}

export default Footer
