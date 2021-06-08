import React from 'react';
import '../assets/styles/components/ReturnHome.scss';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import HomeIcon from '../assets/static/home-icon.svg';

const ReturnHome = () => {
  return (
    <Link to='/'>
      <div className='return__container'>
        <img src={HomeIcon} alt='' />
        <p>Volver al Home</p>
      </div>
    </Link>
  );
};

export default ReturnHome;
