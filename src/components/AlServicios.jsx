import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import '../assets/styles/components/Servicios.scss';
import AlimentosIconWhite from '../assets/static/alimentos-white.svg';
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

import AlCadenadeValor from './AlCadenadeValor';
import AlServiciosAon from './AlServiciosAon';
import AlSoluciones from './AlSoluciones';
import GestionIntegral from './GestionIntegral';
import AlCasosdeExito from './AlCasosdeExito';

function AlServicios() {
  return (
    <Router>
      <div className='servicios u-wrapper'>
        <div className='servicios__container'>
          <div className='servicios__header back-yellow'>
            <div className='icon__servicios'>
              <img src={AlimentosIconWhite} alt='' />
            </div>
            <div className='servicios__header--title'>
              <p>Servicios de Alimentos y Bebidas</p>
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
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2FCadena-de-valor.png?alt=media&token=6c4ed5b7-15ba-484e-8d73-ad31333856ee' alt='' />
              </div>
            </Route>
            <Route exact path='/AlServiciosAon'>
              <AlServiciosAon />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2FServicios-Aon-.png?alt=media&token=20fc9259-12e2-4030-9065-3b69fe24690d' alt='' />
              </div>
            </Route>
            <Route exact path='/AlSoluciones'>
              <AlSoluciones />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2FServicios-Aon-.png?alt=media&token=20fc9259-12e2-4030-9065-3b69fe24690d' alt='' />
              </div>
            </Route>
            <Route exact path='/GestionIntegral'>
              <GestionIntegral />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2FGestio%CC%81n-integral-para-potenciar-.png?alt=media&token=1fa5bc90-9e97-4d27-bc90-fa589969549b' alt='' />
              </div>
            </Route>
            <Route exact path='/AlCasosdeExito'>
              <AlCasosdeExito />
              <div className='servicios__imagen'>
                <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/Aon%2Falimentos%2FCasos-de-e%CC%81xito.png?alt=media&token=49b298f3-bde8-4ef6-b66f-510e7cea983d' alt='' />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AlServicios;
