import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import EnergiaIconWhite from '../assets/static/energia-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import ImgRiesgosPA from '../assets/static/RiesgosPAImg.png';
import ImgRiesgoA from '../assets/static/RiesgosAImg.png';
import ImgRiesgoNA from '../assets/static/RiesgosNAImg.png';
import '../assets/styles/components/Riesgos.scss';
import RiesgosPA from './RiesgosPA';
import RiesgosA from './RiesgosA';
import RiesgosNA from './RiesgosNA';

function Riesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header'>
            <div className='icon__riegos'>
              <img src={EnergiaIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>Riesgos de Energía </p>
            </div>
          </div>
          <div className='riesgos__menu'>
            <NavLink to='/RiesgosPA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={EcoIcon} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos Parcialmente Asegurables</p>
              </div>
            </NavLink>
            <NavLink to='/RiesgosA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={IconCash} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos Asegurables</p>
              </div>
            </NavLink>
            <NavLink to='/RiesgosNA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={IconBars} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos No Asegurables</p>
              </div>
            </NavLink>
          </div>
          <div className='riesgos__bot'>
            <p />
            <img src='' alt='' />
          </div>

          <Switch>
            <Route exact path='/RiesgosPA'>
              <RiesgosPA />
              <div className='riesgos__img'>
                <img src={ImgRiesgosPA} alt='' />
              </div>
            </Route>
            <Route exact path='/RiesgosA'>
              <RiesgosA />
              <div className='riesgos__img'>
                <img src={ImgRiesgoA} alt='' />
              </div>
            </Route>
            <Route exact path='/RiesgosNA'>
              <RiesgosNA />
              <div className='riesgos__img'>
                <img src={ImgRiesgoNA} alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Riesgos;
