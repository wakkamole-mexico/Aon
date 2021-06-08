import React from 'react';
import ManRiesgos from '../components/ManRiesgos';
import ManServicios from '../components/ManServicios';
import Nav from '../components/Nav';
import ReturnHome from '../components/ReturnHome';

const Manufactura = () => {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero fadeIn'>
        <ReturnHome />
        <ManRiesgos />
        <ManServicios />
      </div>
    </div>
  );
};

export default Manufactura;
