import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import FarmaceuticaIconWhite from '../assets/static/farm-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import '../assets/styles/components/Riesgos.scss';
import AlRiesgosPA from './FarRiesgosPA';
import AlRiesgosA from './FarRiesgosA';
import AlRiesgosNA from './FarRiesgosNa';

function FarRiesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header back-green'>
            <div className='icon__riegos'>
              <img src={FarmaceuticaIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>
                Riesgos de Farmacéutica y química
              </p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FRPA.png?alt=media&token=09ef02d5-494d-449c-9cfc-752942963a5f' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosA'>
              <AlRiesgosA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FRA.png?alt=media&token=6c35d040-017c-4b90-ba13-3f0869f8618f' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosNA'>
              <AlRiesgosNA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FRNA-1.png?alt=media&token=e8eac3bd-4dc7-4b7e-a65d-d305466f9143' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default FarRiesgos;
