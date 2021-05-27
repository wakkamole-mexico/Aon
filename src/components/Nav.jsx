import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import '../assets/styles/components/Nav.scss';
import energia from '../assets/static/energia.svg';
import food from '../assets/static/food.svg';
import farm from '../assets/static/farm.svg';
import tools from '../assets/static/tools.svg';
import air from '../assets/static/air.svg';
import home from '../assets/static/home.svg';
import Energia from './Energia';
import Alimentos from './Alimentos';


function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href=''><img src={energia} alt='' /></a>
        </li>
        <li>
          <a href=''><img src={food} alt='' /></a>
        </li>
        <li>
          <a href=''><img src={farm} alt='' /></a>
        </li>
        <li>
          <a href=''><img src={tools} alt='' /></a>
        </li>
        <li>
          <a href=''><img src={air} alt='' /></a>
        </li>
        {/* <li>
        <a href=''><img src={home} alt='' /></a>
      </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
