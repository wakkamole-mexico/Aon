import React from 'react';
import '../assets/styles/components/Hero.scss';
import Bot from './Bot';
import Home from './Home';
import Menu from './Menu';
import Riesgos from './Riesgos';
import Servicios from './Servicios';
import Energia from './Energia';

const Hero = () => (
  <div className='hero'>
    <Home />
    <Menu />
    <Energia />
  </div>
);

export default Hero;
