import React from 'react';
import '../assets/styles/components/Hero.scss';
import Bot from './Bot';
import Home from './Home';
import Menu from './Menu';
import Riesgos from './Riesgos';

const Hero = () => (
  <div className='hero'>
    <Home />
    <Bot />
    <Menu />
    <Riesgos />
  </div>
);

export default Hero;
