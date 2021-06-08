import React from 'react';
import Riesgos from './Riesgos';
import Servicios from './Servicios';
import Nav from './Nav';
import '../assets/styles/components/MainSection.scss';
import '../assets/styles/components/Hero.scss';

const Energia = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero'>
        <Riesgos />
        <Servicios />
      </div>
    </div>
  );
};

export default Energia;
