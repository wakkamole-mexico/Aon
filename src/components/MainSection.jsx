import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import '../assets/styles/components/MainSection.scss';
import '../assets/styles/components/Hero.scss';
import '../assets/styles/components/Nav.scss';

import Nav from './Nav';

import energia from '../assets/static/energia.svg';
import food from '../assets/static/food.svg';
import farm from '../assets/static/farm.svg';
import tools from '../assets/static/tools.svg';
import air from '../assets/static/air.svg';
import construccion from '../assets/static/cons-icon.svg';
import Bot from './Bot';
import Welcome from './Welcome';
import Menu from './Menu';

import Alimentos from './Alimentos';
import Farmaceutica from './Farmaceutica';
import Manufactura from './Manufactura';
import Transporte from './Transporte';
import Construccion from './Construccion';

function MainSection() {
  return (
    <div className='main-section'>
      <Nav />
      <div className='hero'>
        <Welcome />
        <Menu />
      </div>
    </div>
  );
}

export default MainSection;
