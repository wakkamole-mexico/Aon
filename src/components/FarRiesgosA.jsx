import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const FarRiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Falla en la distribución o cadena de suministro</h3>
        <p>
          La distribución o la falla de la cadena de suministro pueden ser un desafío para cualquier industria,
          para la farmacéutica, significaría no poder satisfacer la demanda de los pacientes/clientes.
        </p>
        <h3>Interrupción de negocio </h3>
        <p>
          Resulta de la incapacidad de una empresa para satisfacer la demanda de productos.
        </p>
        <h3>Seguridad y farmacovigilancia</h3>
        <p>
          Para una organización farmacéutica, no solo es esencial desarrollar un producto que satisfaga las demandas
          del cliente, sino también entregar un producto que cumpla con todos los estándares de calidad.
        </p>
      </div>
    </div>
  );
};

export default FarRiesgosA;
