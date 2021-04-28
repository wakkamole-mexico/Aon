import React from 'react';
import '../assets/styles/components/Servicios.scss';
import EnergiaIconWhite from '../assets/static/energia-white.svg';
import CadenaIcon from '../assets/static/cadena.svg'
import ServiciosIcon from '../assets/static/servicios.svg'
import IdeasIcon from '../assets/static/idea.svg'
import GestionIcon from '../assets/static/gestion.svg'
import CasosIcon from '../assets/static/casos.svg'
import ImgRiesgos from '../assets/static/enegia-imagen-riesgos.png';

const Servicios = () => (
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
        <div className='servicios__op'>
          <div className='servicios__op--icon'>
            <img src={CadenaIcon} alt='' />
          </div>
          <div className='servicios__op--title'>
            <p>Cadena de valor</p>
          </div>
        </div>
        <div className='servicios__op'>
          <div className='servicios__op--icon'>
            <img src={ServiciosIcon} alt='' />
          </div>
          <div className='servicios__op--title'>
            <p>Servicios Aon</p>
          </div>
        </div>
        <div className='servicios__op'>
          <div className='servicios__op--icon'>
            <img src={IdeasIcon} alt='' />
          </div>
          <div className='servicios__op--title'>
            <p>Soluciones</p>
          </div>
        </div>
        <div className='servicios__op'>
          <div className='servicios__op--icon'>
            <img src={GestionIcon} alt='' />
          </div>
          <div className='servicios__op--title'>
            <p>Gestión integral para potenciar resultados</p>
          </div>
        </div>
        <div className='servicios__op'>
          <div className='servicios__op--icon'>
            <img src={CasosIcon} alt='' />
          </div>
          <div className='servicios__op--title'>
            <p>Casos de éxito</p>
          </div>
        </div>
      </div>
      <div className='servicios__imagen'>
        <img src={ImgRiesgos} alt='' />
      </div>
      <div className='servicios__title'>
        <h1>Cadena de valor</h1>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Upstream</h3>
          <p>
            Cambios en la demanda
            <br />
            Cambios regulatorios
            <br />
            Crimen organizado/Actos maliciosos
            <br />
            Daños ambientales/Daños a terceros
            <br />
            Interpretación de regulaciones ASEA
            <br />
            NATCAT
            <br />
            Presión de organizaciones sin fines de lucro
            <br />
            Riesgos operacionales
            <br />
            Transición a energías limpias
            <br />
            Volatilidad en el precio del petróleo y gas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>1. Upstream</h3>
          <p>
            Cambios en la demanda
            <br />
            Cambios regulatorios
            <br />
            Crimen organizado/Actos maliciosos
            <br />
            Daños ambientales/Daños a terceros
            <br />
            Interpretación de regulaciones ASEA
            <br />
            NATCAT
            <br />
            Presión de organizaciones sin fines de lucro
            <br />
            Riesgos operacionales
            <br />
            Transición a energías limpias
            <br />
            Volatilidad en el precio del petróleo y gas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>1. Upstream</h3>
          <p>
            Cambios en la demanda
            <br />
            Cambios regulatorios
            <br />
            Crimen organizado/Actos maliciosos
            <br />
            Daños ambientales/Daños a terceros
            <br />
            Interpretación de regulaciones ASEA
            <br />
            NATCAT
            <br />
            Presión de organizaciones sin fines de lucro
            <br />
            Riesgos operacionales
            <br />
            Transición a energías limpias
            <br />
            Volatilidad en el precio del petróleo y gas
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Servicios;
