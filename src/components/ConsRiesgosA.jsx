import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const ConsRiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Interrupción de negocio</h3>
        <p>
          Resulta de la incapacidad de una empresa para satisfacer la demanda de sus productos o servicios.
        </p>
        <h3>Riesgo ambiental</h3>
        <p>
          Responsabilidad como resultado de la emisión, descarga, liberación o escape de cualquier
          contaminante o irritante hacia o sobre la tierra, atmósfera o cualquier curso o cauce de agua.
        </p>
      </div>
    </div>
  );
};

export default ConsRiesgosA;
