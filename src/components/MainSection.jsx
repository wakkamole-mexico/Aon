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
import Bot from './Bot';
import Home from './Home';
import Menu from './Menu';
import Energia from './Energia';
import Alimentos from './Alimentos';
import Farmaceutica from './Farmaceutica';

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
        </div>
        <div className='hero'>
          <Home />
          <Bot />
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
