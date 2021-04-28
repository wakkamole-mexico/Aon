import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const RiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Riesgo ambiental</h3>
        <p>
          Responsabilidad como resultado de la emisión, descarga, liberación o escape de cualquier contaminante,
          irritante o contaminante hacia o sobre la tierra, la atmósfera o cualquier curso o cause de agua.
        </p>
        <h3>Interrupción de Negocio</h3>
        <p>
          Una interrupción significativa o total del negocio puede resultar en la incapacidad de una empresa para
          satisfacer la demanda de productos y/o servicios.
        </p>
      </div>
    </div>
  );
};

export default RiesgosA;
