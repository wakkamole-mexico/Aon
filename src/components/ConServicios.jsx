import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import ConsIconWhite from '../assets/static/cons-white.svg';
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

import AlCadenadeValor from './ConsCadenadeValor';
import AlServiciosAon from './ConsServiciosAon';
import AlSoluciones from './ConsSoluciones';
import GestionIntegral from './GestionIntegral';
import AlCasosdeExito from './AlCasosdeExito';

function AlServicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header back-red'>
            <div className='icon__servicios'>
              <img src={ConsIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Construcción</p>
            </div>
          </div>
          <div className='servicios__menu'>
            <NavLink to='/AlCadenadevalor' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={CadenaIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Cadena de valor</p>
              </div>
            </NavLink>
            <NavLink to='/AlServiciosAon' className='servicios__op'>
              <div className='servicios__op--icon'>
                <img src={ServiciosIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Servicios Aon</p>
              </div>
            </NavLink>
            <NavLink to='/AlSoluciones' className='servicios__op'>
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

          </div>

          <Switch>
            <Route exact path='/AlCadenadevalor'>
              <AlCadenadeValor />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FCadena-de-valor.png?alt=media&token=608f7d4b-e13e-443e-93e0-7d22204ec5e4' alt='' />
              </div>
            </Route>
            <Route exact path='/AlServiciosAon'>
              <AlServiciosAon />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FServicios-Aon.png?alt=media&token=7b984c72-830f-421a-8ae0-8ede1d6587d2' alt='' />
              </div>
            </Route>
            <Route exact path='/AlSoluciones'>
              <AlSoluciones />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FSoluciones.png?alt=media&token=7279c1a4-d700-4217-8dcf-d9c7b1c409b8' alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FCONSTRUCCION%2FGestio%CC%81n-integral.png?alt=media&token=e4b29107-949d-4921-ae41-df9f169e793a' alt='' />
              </div>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AlServicios;
