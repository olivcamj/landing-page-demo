import React from 'react';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers/index';
import { Brand, CTA, Navbar } from './components/index';
import './App.css';

const App = () => {
  return (
    <>
      <section className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </section> 
    </>
  )
}

export default App