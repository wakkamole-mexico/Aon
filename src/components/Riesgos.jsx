import React from 'react';
import EnergiaIconWhite from '../assets/static/energia-white.svg';
import EcoIcon from '../assets/static/eco.svg';
import IconCash from '../assets/static/cash.svg';
import IconBars from '../assets/static/bars.svg';
import ImgRiesgos from '../assets/static/enegia-imagen-riesgos.png';
import '../assets/styles/components/Riesgos.scss';

const Riesgos = () => (
  <div className='riesgos u-wrapper'>
    <div className='riesgos__container'>
      <div className='riesgos__header'>
        <div className='icon__riegos'>
          <img src={EnergiaIconWhite} alt='' />
        </div>
        <div className='riesgos__header--title'>
          <p>Riesgos de Energía </p>
        </div>
      </div>
      <div className='riesgos__menu'>
        <div className='riesgo__op'>
          <div className='riesgo__op--icon'>
            <img src={EcoIcon} alt='' />
          </div>
          <div className='riesgo__op--title'>
            <p>Riesgos Parcialmente Asegurables</p>
          </div>
        </div>
        <div className='riesgo__op'>
          <div className='riesgo__op--icon'>
            <img src={IconCash} alt='' />
          </div>
          <div className='riesgo__op--title'>
            <p>Riesgos Asegurables</p>
          </div>
        </div>
        <div className='riesgo__op'>
          <div className='riesgo__op--icon'>
            <img src={IconBars} alt='' />
          </div>
          <div className='riesgo__op--title'>
            <p>Riesgos No Asegurables</p>
          </div>
        </div>
      </div>
      <div className='riesgos__bot'>
        <p />
        <img src='' alt='' />
      </div>
      <div className='riesgos__img'>
        <img src={ImgRiesgos} alt='' />
      </div>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Riesgo político / incertidumbre</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio suele requerir de
          mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
        <h3>Riesgo político / incertidumbre</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio suele requerir de
          mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
        <h3>Riesgo político / incertidumbre</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio suele requerir de
          mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
        <h3>Riesgo político / incertidumbre</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio suele requerir de
          mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
      </div>
    </div>
  </div>
);

export default Riesgos;
