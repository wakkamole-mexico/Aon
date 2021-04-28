import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const CadenadeValor = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Cadena de valor</h1>
        <h2>y sus riesgos</h2>
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
          <h3>2. Midstream</h3>
          <p>
            Crimen organizado/Actos maliciosos
            <br />
            Daños Ambientales/Daños a Terceros
            <br />
            Riesgos operacionales
            <br />
            Riesgos sociales (ejidatarios)
            <br />
            Sindicatos
            <br />
            Volatilidad en el precio del petróleo y gas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Downstream</h3>
          <p>
            Antigüedad de Plantas Existentes
            <br />
            Crimen organizado/Actos maliciosos
            <br />
            Daños ambientales/Daños a terceros
            <br />
            NATCAT
            <br />
            Riesgos operacionales
            <br />
            NATCAT
            <br />
            Transición a energías limpias
            <br />
            Volatilidad en el precio del petróleo y gas
          </p>
        </div>
      </div>
    </div>
  );
};

export default CadenadeValor;
