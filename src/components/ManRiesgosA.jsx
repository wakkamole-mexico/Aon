import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const ManRiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Interrupción de negocio</h3>
        <p>
          Una interrupción significativa del negocio puede resultar en la incapacidad de una
          empresa para satisfacer la demanda de productos.
        </p>
        <h3>Falla en la distribución o cadena de suministro </h3>
        <p>
          La distribución o la falla de la cadena de suministro pueden ser un desafío para cualquier
          industria: para la industria farmacéutica, un impacto significativo puede resultar de la
          importancia de satisfacer la demanda de los pacientes/clientes.
        </p>
      </div>
    </div>
  );
};

export default ManRiesgosA;
