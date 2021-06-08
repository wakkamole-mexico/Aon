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
import TruckIcon from '../assets/static/truck-icon.svg';
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
              to='/energia'
              className='navbar--item red'
              activeClassName='opacity'
            >
              <img src={energia} alt='' />
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/alimentos'
              className='navbar--item yellow'
              activeClassName='opacity'
            >
              <img src={food} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/farmaceutica'
              className='navbar--item green'
              activeClassName='opacity'
            >
              <img src={farm} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/manufactura'
              className='navbar--item purple'
              activeClassName='opacity'
            >
              <img src={tools} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/transporte'
              className='navbar--item blue'
              activeClassName='opacity'
            >
              <img src={TruckIcon} alt='' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/construccion'
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
