import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import ManufacturaIconWhite from '../assets/static/manufactura-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import '../assets/styles/components/Riesgos.scss';
import AlRiesgosPA from './ManRiesgoPa';
import AlRiesgosA from './ManRiesgosA';
import AlRiesgosNA from './ManRiesgosNa';

function ManRiesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header back-purple'>
            <div className='icon__riegos'>
              <img src={ManufacturaIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>Riesgos de Manufactura</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FPA%20(1).png?alt=media&token=bf3b2bdb-fb9b-44f2-82e8-02b1e095de4c' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosA'>
              <AlRiesgosA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FA%20(1).png?alt=media&token=23106c11-6600-40a1-b68f-6febfbd4dffc' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosNA'>
              <AlRiesgosNA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FRNA-1%20(1).png?alt=media&token=6db67db6-b2ee-4cf8-8b94-36c57c71a5d5' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default ManRiesgos;
