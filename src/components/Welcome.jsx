import React from 'react';
import '../assets/styles/components/Home.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import logoAon from '../assets/static/logo-Aon.png';
import HeaderImage from '../assets/static/image-home.png';

const Welcome = () => (
  <div className='home u-wrapper'>
    <div className='home__container'>
      <div className='logo'>
        <div className='logo__container'>
          <img src={logoAon} alt='' />
        </div>
      </div>
      <div className='header'>
        <div className='header__text'>
          <h1>Comprometidos en potenciar las posibilidades económicas y humanas</h1>
          <p>Cuidamos el valor de tu empresa. En Aon, tenemos el conocimiento, la experiencia y el compromiso para poder ofrecer a nuestros clientes un servicio con valor agregado acompañado de un enfoque de especialistas en el tema. Ofrecemos soluciones innovadoras en el mercado. Conoce más.</p>
        </div>
        <div className='header__image'>
          <img src={HeaderImage} alt='' />
        </div>
      </div>
      <div className='cta__container'>
        <Link className='item--cta' to='main' smooth={true} duration={1000}>Empezar</Link>
      </div>
    </div>
  </div>
);

export default Welcome;
