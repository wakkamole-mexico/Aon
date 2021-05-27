import React from 'react';
import '../assets/styles/components/RiesgosNA.scss';

const ManRiesgosNA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>No Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Daño a reputación / marca</h3>
        <p>
          La industria cuenta con una variedad de partes interesadas, incluidos proveedores
          de atención médica, pacientes y diversos organismos y entidades reguladoras
          de los que deben ser socios de confianza.
        </p>
        <h3>Riesgo de cash flow / liquidez</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio
          suele requerir de mucho tiempo y recursos, independientemente de la madurez
          e la organización.
        </p>
      </div>
    </div>
  );
};

export default ManRiesgosNA;
