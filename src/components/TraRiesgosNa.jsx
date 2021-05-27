import React from 'react';
import '../assets/styles/components/RiesgosNA.scss';

const TraRiesgosNA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>No Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Escasez de mano de obra </h3>
        <p>
          Pérdida de ingresos y costos adicionales incurridos debido a la falta
          de disponibilidad de trabajadores.
        </p>
        <h3>Riesgo de concentración (producto, personas, geografía, etc.) </h3>
        <p>
          El riesgo de concentración puede surgir de una distribución desigual
          de las exposiciones con respecto a productos, personas o geografías,
          lo que deja a la empresa vulnerable y puede provocar daños comerciales.
        </p>
      </div>
    </div>
  );
};

export default TraRiesgosNA;
