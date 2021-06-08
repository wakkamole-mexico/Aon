import React from 'react';
import Riesgos from '../components/Riesgos';
import Servicios from '../components/Servicios';
import Nav from '../components/Nav';

const Energia = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <Riesgos />
        <Servicios />
      </div>
    </div>
  );
};

export default Energia;
