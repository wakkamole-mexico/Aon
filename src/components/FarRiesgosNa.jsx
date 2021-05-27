import React from 'react';
import '../assets/styles/components/RiesgosNA.scss';

const FarRiesgosNA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>No Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Daño a reputación / marca</h3>
        <p>
          La industria cuenta con una variedad de partes interesadas, incluidos proveedores de atención médica,
          pacientes, organismos y entidades reguladoras de los que deben ser socios de confianza.
        </p>
        <h3>Incapacidad para atraer o retener a los mejores talentos </h3>
        <p>
          La aparición constante de nuevas biotecnologías emergentes, nuevos participantes/competidores,
          el surgimiento de nuevas ciencias y la creciente competencia entre las organizaciones de ciencias
          biológicas y tecnológicas por el mismo grupo de talentos, ejercen presión sobre las organizaciones
          dentro de la industria.
        </p>
        <h3>Riesgo de cash flow/liquidez</h3>
        <p>
          Cambios inesperados en las tasas de crédito.
        </p>
      </div>
    </div>
  );
};

export default FarRiesgosNA;
