import React from 'react';
import FarRiesgos from '../components/FarRiesgos';
import FarServicios from '../components/FarServicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Farmaceutica = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <FarRiesgos />
        <FarServicios />
      </div>
    </div>
  );
};

export default Farmaceutica;
