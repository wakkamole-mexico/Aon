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
import construccion from '../assets/static/cons-icon.svg';
import home from '../assets/static/home.svg';
import Energia from './Energia';
import Alimentos from './Alimentos';

function Nav() {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <ul>

          <li>
            <NavLink
              to='/Energia'
              className='navbar--item red'
              activeClassName='opacity'
            >
              <img src={energia} alt='' />
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/Alimentos'
              className='navbar--item yellow'
              activeClassName='opacity'
            >
              <img src={food} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Farmaceutica'
              className='navbar--item green'
              activeClassName='opacity'
            >
              <img src={farm} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Manufactura'
              className='navbar--item purple'
              activeClassName='opacity'
            >
              <img src={tools} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Transporte'
              className='navbar--item blue'
              activeClassName='opacity'
            >
              <img src={air} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Construccion'
              className='navbar--item red'
              activeClassName='opacity'
            >
              <img src={construccion} alt='' />
            </NavLink>
          </li>
          <p>Energía</p>
          <p>Alimentos</p>
          <p>Farmacéutica</p>
          <p>Manufactura</p>
          <p>Transporte</p>
          <p>Construcción</p>

        </ul>
      </nav>
    </div>
  );
};

export default Nav;
