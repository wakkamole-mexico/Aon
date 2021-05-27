import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import ManufacturaIconWhite from '../assets/static/manufactura-white.svg';
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

import AlCadenadeValor from './ManCadenadevalor';
import AlServiciosAon from './ManServiciosAon';
import AlSoluciones from './ManSoluciones';
import GestionIntegral from './GestionIntegral';
import AlCasosdeExito from './ManCasosdeExito';

function ManServicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header back-purple'>
            <div className='icon__servicios'>
              <img src={ManufacturaIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Manufactura</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FCadena-de-valor.png?alt=media&token=53dc023d-25d5-4a6e-ba2b-ac899a507db1' alt='' />
              </div>
            </Route>
            <Route exact path='/AlServiciosAon'>
              <AlServiciosAon />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FServicios-Aon-.png?alt=media&token=001a8b85-62e0-41ef-ac08-d096e2db8e30' alt='' />
              </div>
            </Route>
            <Route exact path='/AlSoluciones'>
              <AlSoluciones />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FSoluciones.png?alt=media&token=f6af9ffa-8219-4a94-a864-290be9ac39d0' alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FGestio%CC%81n-integral-.png?alt=media&token=2c314378-10e3-4039-988a-7078ddd6ba9e' alt='' />
              </div>
            </Route>
            <Route exact path='/AlCasosdeExito'>
              <AlCasosdeExito />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2FManufactura%2FCasos-de-e%CC%81xito.png?alt=media&token=e739b0e3-2728-4ba1-b9c1-a442880d9239' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ManServicios;
