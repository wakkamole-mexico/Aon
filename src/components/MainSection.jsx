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
import Hero from './Hero';
import energia from '../assets/static/energia.svg';
import food from '../assets/static/food.svg';
import farm from '../assets/static/farm.svg';
import tools from '../assets/static/tools.svg';
import air from '../assets/static/air.svg';
import construccion from '../assets/static/cons-icon.svg';
import Bot from './Bot';
import Home from './Home';
import Menu from './Menu';
import Energia from './Energia';
import Alimentos from './Alimentos';
import Farmaceutica from './Farmaceutica';
import Manufactura from './Manufactura';
import Transporte from './Transporte';
import Construccion from './Construccion';


function MainSection() {
  return (
    <Router>
      <div className='main-section'>
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
              {/* <li>
        <a href=''><img src={home} alt='' /></a>
      </li> */}
            </ul>
          </nav>
        </div>
        <div className='hero'>
          <Home />
          {/* <Bot /> */}
          <Switch>
            <Route exact path='/Energia'>
              <Energia />
            </Route>
            <Route exact path='/Alimentos'>
              <Alimentos />
            </Route>
            <Route exact path='/Farmaceutica'>
              <Farmaceutica />
            </Route>
            <Route exact path='/Manufactura'>
              <Manufactura />
            </Route>
            <Route exact path='/Transporte'>
              <Transporte />
            </Route>
            <Route exact path='/Construccion'>
              <Construccion />
            </Route>
            <Route exact path='/'>
              <Energia />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainSection;
