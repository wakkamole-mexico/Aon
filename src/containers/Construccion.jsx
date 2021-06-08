import React from 'react';
import ConsRiesgos from '../components/ConsRiesgos';
import ConsServicios from '../components/ConServicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Transporte = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <ConsRiesgos />
        <ConsServicios />
      </div>
    </div>
  );
};

export default Transporte;
