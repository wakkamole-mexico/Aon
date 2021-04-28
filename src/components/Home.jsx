import React from 'react';
import '../assets/styles/components/Home.scss';
import logoAon from '../assets/static/logo-Aon.png';
import HeaderImage from '../assets/static/header.png';

const Home = () => (
  <div className='home u-wrapper'>
    <div className='logo'>
      <div className='logo__container'>
        <img src={logoAon} alt='' />
      </div>
    </div>
    <div className='header'>
      <img src={HeaderImage} alt='' />
      <p>Cuidamos el valor de tu empresa. En Aon, tenemos el conocimiento, la experiencia y el compromiso para poder ofrecer a nuestros clientes un servicio con valor agregado acompañado de un enfoque de especialistas en el tema. Ofrecemos soluciones innovadoras en el mercado. Conoce más.</p>
    </div>
  </div>
);

export default Home;
