import React from 'react';
import AlRiesgos from '../components/AlRiesgos';
import AlServicios from '../components/AlServicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Alimentos = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <AlRiesgos />
        <AlServicios />
      </div>
    </div>
  );
};

export default Alimentos;
