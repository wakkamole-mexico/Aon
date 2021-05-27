import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import AlimentosIconWhite from '../assets/static/alimentos-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import '../assets/styles/components/Riesgos.scss';
import AlRiesgosPA from './AlRiesgosPA';
import AlRiesgosA from './AlRiesgosA';
import AlRiesgosNA from './AlRiesgosNa';

function AlRiesgos() {
  return (
    <Router>
      <div className='riesgos u-wrapper'>
        <div className='riesgos__container'>
          <div className='riesgos__header back-yellow'>
            <div className='icon__riegos'>
              <img src={AlimentosIconWhite} alt='' />
            </div>
            <div className='riesgos__header--title'>
              <p>Riesgos de Alimentos y Bebidas</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2Frp%20(1).png?alt=media&token=bbe82ece-db8b-4b4a-be75-3de0eb297ff1' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosA'>
              <AlRiesgosA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2Ffarm2%20(1).png?alt=media&token=d082f19d-781c-4784-b0c9-fba426e2826a' alt='' />
              </div>
            </Route>
            <Route exact path='/AlRiesgosNA'>
              <AlRiesgosNA />
              <div className='riesgos__img'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2Frna.png?alt=media&token=e2c87af7-ea5a-4b23-8bf3-b862fe6ef8e7' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AlRiesgos;
