import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import transporteIconWhite from '../assets/static/truck-white.svg';
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

import AlCadenadeValor from './TraCadenadeValor';
import AlServiciosAon from './TraServiciosAon';
import AlSoluciones from './TraSoluciones';
import GestionIntegral from './GestionIntegral';
import AlCasosdeExito from './TraCasosdeExito';

function TraServicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header back-blue'>
            <div className='icon__servicios'>
              <img src={transporteIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Transporte y logística</p>
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
            <NavLink to='/AlCasosdeExito' className='servicios__op'>   
              <div className='servicios__op--icon'>
                <img src={CasosIcon} alt='' />
              </div>
              <div className='servicios__op--title'>
                <p>Casos de éxito</p>
              </div>
            </NavLink>
          </div>

          <Switch>
            <Route exact path='/AlCadenadevalor'>
              <AlCadenadeValor />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FCadena-de-valor.png?alt=media&token=c22cfe2a-c8d1-4b20-bc86-e0a83f66d57a' alt='' />
              </div>
            </Route>
            <Route exact path='/AlServiciosAon'>
              <AlServiciosAon />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FServicios-Aon-.png?alt=media&token=18457196-5a56-4299-996e-2d47a86d5517' alt='' />
              </div>
            </Route>
            <Route exact path='/AlSoluciones'>
              <AlSoluciones />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FSoluciones.png?alt=media&token=aec32fe8-cb22-4618-b80a-6624cbe1542d' alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FGestio%CC%81n-integral.png?alt=media&token=d97f0376-cfae-4295-b463-5e73cc5d7d3e' alt='' />
              </div>
            </Route>
            <Route exact path='/AlCasosdeExito'>
              <AlCasosdeExito />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Ftransporte%2FCasos-de-e%CC%81xito.png?alt=media&token=d26f7fe3-501b-4bda-affd-e890aba0f227' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default TraServicios;
