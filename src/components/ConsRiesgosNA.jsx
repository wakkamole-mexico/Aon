import React from 'react';
import '../assets/styles/components/RiesgosNA.scss';

const ConsRiesgosNA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>No Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Riesgo en precio de productos básicos (Commodities)</h3>
        <p>
          Cambios inesperados en los precios del petróleo y sus derivados.
        </p>
        <h3>Tasas aceleradas de cambio en los factores de mercado </h3>
        <p>
          Riesgo asociado con el rápido ritmo en el que cambian los factores del riesgo geopolítico
          y del mercado y como afectan a las empresas para mantener el ritmo. Esto incluye cambios legislativos,
          de gobierno, tratados internacionales, seguridad y desempleo.
        </p>
        <h3>Fluctuación de la tasa de interés </h3>
        <p>
          Cambios inesperados en las tasas de crédito.
        </p>
        <h3>Fluctuación del tipo de cambio</h3>
        <p>
          Cambios inesperados en los tipos de cambio.
        </p>
      </div>
    </div>
  );
};

export default ConsRiesgosNA;
