import React from 'react';
import '../assets/styles/components/Hero.scss';
import Bot from './Bot';
import Welcome from './Welcome';
import Menu from './Menu';
import Energia from './Energia';

const Hero = () => (
  <div className='hero'>
    <Welcome />
    <Bot />
    <Menu />

  </div>
);

export default Hero;
