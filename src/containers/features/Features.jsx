import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';


const featuresData = [
  {
    title: 'Harness the Power of AI Today',
    info: 'GPT-3 is revolutionizing industries with its advanced natural language processing capabilities—empower your business, creativity, or productivity instantly.',
  },
  {
    title: 'Unlock Limitless Possibilities',
    info: 'From chatbots to content generation, GPT-3 can transform your workflows, enhancing automation and accelerating innovation.',
  },
  {
    title: 'Experience Tomorrow’s Technology Now',
    info: 'With early access to GPT-3, you’ll be among the first to integrate cutting-edge AI into your projects, gaining a competitive edge in your field.',
  },
  {
    title: 'Shape the Future of Your Industry',
    info: 'By adopting GPT-3 today, you’re positioning yourself to be at the forefront of AI-driven solutions—seize the opportunity to lead and innovate.',
  },
]

const Features = () => {
  return (
    <section className="gpt3__features section__margin" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now & You Just Need to Realize It. Step into the Future Today & Make it Happen.</h1>
        <p className="gpt3__features-heading_subheading">Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {
          featuresData.map((item, index) => 
            <Feature title={item.title} text={item.info} index={item.title + index} />
          )
        }
      </div>
    </section>
  )
}

export default Features
