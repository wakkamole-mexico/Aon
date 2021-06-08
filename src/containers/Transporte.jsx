import React from 'react';
import TraRiesgos from '../components/TraRiesgos';
import TraServicios from '../components/TraServicios';
import Nav from '../components/Nav';

const Transporte = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <TraRiesgos />
        <TraServicios />
      </div>
    </div>
  );
};

export default Transporte;
