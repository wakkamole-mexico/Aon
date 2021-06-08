import React from 'react';
import TraRiesgos from '../components/TraRiesgos';
import TraServicios from '../components/TraServicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Transporte = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <TraRiesgos />
        <TraServicios />
      </div>
    </div>
  );
};

export default Transporte;
