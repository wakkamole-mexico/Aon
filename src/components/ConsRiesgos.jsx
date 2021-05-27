import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import ConsIconWhite from '../assets/static/cons-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import '../assets/styles/components/Riesgos.scss';
import AlRiesgosPA from './ConsRiesgosPA';
import AlRiesgosA from './ConsRiesgosA';
import AlRiesgosNA from './ConsRiesgosNA';

function ConsRiesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header back-red'>
            <div className='icon__riegos'>
              <img src={ConsIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>Riesgos de Construcción</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FRPA-%20(1).png?alt=media&token=fd0d1348-d49d-4204-baa5-0c759b8ebcf7' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosA'>
              <AlRiesgosA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FRA%20(1).png?alt=media&token=c714b108-6f54-4702-a272-db70562f02d1' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosNA'>
              <AlRiesgosNA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FRNA-1%20(1).png?alt=media&token=35466beb-2e2f-448f-9a72-4febe256603a' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default ConsRiesgos;
