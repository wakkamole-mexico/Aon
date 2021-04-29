import React from 'react';
import '../assets/styles/components/Hero.scss';
import Bot from './Bot';
import Home from './Home';
import Menu from './Menu';
import Riesgos from './Riesgos';
import Servicios from './Servicios';

const Hero = () => (
  <div className='hero'>
    <Home />
    <Menu />
    <Riesgos />
    <Servicios />
  </div>
);

export default Hero;
