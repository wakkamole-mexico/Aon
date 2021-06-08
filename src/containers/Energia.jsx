import React from 'react';
import Riesgos from '../components/Riesgos';
import Servicios from '../components/Servicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Energia = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <Riesgos />
        <Servicios />
      </div>
    </div>
  );
};

export default Energia;
