import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import EnergiaIconWhite from '../assets/static/energia-white.svg';
import CadenaIcon from '../assets/static/cadena.svg';
import ServiciosIcon from '../assets/static/servicios.svg';
import IdeasIcon from '../assets/static/idea.svg';
import GestionIcon from '../assets/static/gestion.svg';
import CasosIcon from '../assets/static/casos.svg';
import ImgCadena from '../assets/static/cadenadevalorimg.png';
import ImgSoluciones from '../assets/static/solucionesimg.png';
import ImgServicions from '../assets/static/serviciosaonimg.png';
import ImgGestion from '../assets/static/gestionimg.png';
import ImgCasos from '../assets/static/casosimg.png';


import CadenadeValor from './CadenadeValor';
import ServiciosAon from './ServiciosAon';
import Soluciones from './Soluciones';
import GestionIntegral from './GestionIntegral';
import CasosdeExito from './CasosdeExito';

function Servicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header'>
            <div className='icon__servicios'>
              <img src={EnergiaIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Energía </p>
            </div>
          </div>
          <div className='servicios__menu'>
            <NavLink to='/Cadenadevalor' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={CadenaIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Cadena de valor</p>
              </div>
            </NavLink>
            <NavLink to='/ServiciosAon' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={ServiciosIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Servicios Aon</p>
              </div>
            </NavLink>
            <NavLink to='/Soluciones' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={IdeasIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Soluciones</p>
              </div>
            </NavLink>
            <NavLink to='/GestionIntegral' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={GestionIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Gestión integral para potenciar resultados</p>
              </div>
            </NavLink>
            <NavLink to='/CasosdeExito' className='servicios__op'>   
              <div className='servicios__op--icon'>
                <img src={CasosIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Casos de éxito</p>
              </div>
            </NavLink>
          </div>

          <Switch>
            <Route exact path='/Cadenadevalor'>
              <CadenadeValor />
              <div className='servicios__imagen'>
                <img src={ImgCadena} alt='' />
              </div>
            </Route>
            <Route exact path='/ServiciosAon'>
              <ServiciosAon />
              <div className='servicios__imagen'>
                <img src={ImgServicions} alt='' />
              </div>
            </Route>
            <Route exact path='/Soluciones'>
              <Soluciones />
              <div className='servicios__imagen'>
                <img src={ImgSoluciones} alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src={ImgGestion} alt='' />
              </div>
            </Route>
            <Route exact path='/CasosdeExito'>
              <CasosdeExito />
              <div className='servicios__imagen'>
                <img src={ImgCasos} alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Servicios;
