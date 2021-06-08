import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import transporteIconWhite from '../assets/static/truck-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import '../assets/styles/components/Riesgos.scss';
import AlRiesgosPA from './TraRiesgoPA';
import AlRiesgosA from './TraRiesgosA';
import AlRiesgosNA from './TraRiesgosNa';

function TraRiesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header back-blue'>
            <div className='icon__riegos'>
              <img src={transporteIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>Riesgos de Transporte y logística</p>
            </div>
          </div>
          <div className='riesgos__menu'>
            <NavLink to='/AlRiesgosPA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={EcoIcon} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos Parcialmente Asegurables</p>
              </div>
            </NavLink>
            <NavLink to='/AlRiesgosA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={IconCash} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos Asegurables</p>
              </div>
            </NavLink>
            <NavLink to='/AlRiesgosNA' className='riesgo__op' activeClassName='active'>
              <div className='riesgo__op--icon'>
                <img src={IconBars} alt='' />
              </div>
              <div className='riesgo__op--title'>
                <p>Riesgos No Asegurables</p>
              </div>
            </NavLink>
          </div>
          {/* <div className='riesgos__bot'>
            <p />
            <img src='' alt='' />
          </div> */}

          <Switch>
            <Route exact path='/AlRiesgosPA'>
              <AlRiesgosPA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FPA%20(1).png?alt=media&token=b3e271ab-3c4e-4221-8cf1-3cabacc31b5e' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosA'>
              <AlRiesgosA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FA%20(1).png?alt=media&token=287abb08-3178-4712-b3c7-e2508e9ca454' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosNA'>
              <AlRiesgosNA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FNA%20(1).png?alt=media&token=9bccffa8-c5dc-448f-acf8-4118b208415e' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default TraRiesgos;
