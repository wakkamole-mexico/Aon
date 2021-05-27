import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import FarmaceuticaIconWhite from '../assets/static/farm-white.svg';
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

import AlCadenadeValor from './FarCadenadeValor';
import AlServiciosAon from './FarServiciosAon';
import AlSoluciones from './FarSoluciones';
import GestionIntegral from './GestionIntegral';
import AlCasosdeExito from './FarCasosdeExito';

function FarServicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header back-green'>
            <div className='icon__servicios'>
              <img src={FarmaceuticaIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Farmacéutica y química</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FCadena-de-valor.png?alt=media&token=6a2b5777-02af-4dc7-815c-1cbb3634a0cf' alt='' />
              </div>
            </Route>
            <Route exact path='/AlServiciosAon'>
              <AlServiciosAon />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FServicios-Aon-.png?alt=media&token=65d0e059-d6f2-4672-a3d9-95a0c2cb8e6a' alt='' />
              </div>
            </Route>
            <Route exact path='/AlSoluciones'>
              <AlSoluciones />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FSoluciones.png?alt=media&token=240c708c-f8ee-4d41-af46-e954660979bf' alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FGestio%CC%81n-integral-.png?alt=media&token=5f166541-84c9-4260-942e-1f8650d74c7e' alt='' />
              </div>
            </Route>
            <Route exact path='/AlCasosdeExito'>
              <AlCasosdeExito />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FFarmaceutica%2FCasos-de-e%CC%81xito.png?alt=media&token=5f0b5d02-597d-4669-b7dc-5473f58b2249' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default FarServicios;
