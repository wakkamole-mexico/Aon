import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const RiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Riesgo político / incertidumbre</h3>
        <h3>Riesgo de cash flow / liquidez</h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio suele requerir de
          mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
        <h3>Cambios regulatorios (riesgo político) </h3>
        <p>
          Riesgo de que los activos tangibles e intangibles de una empresa puedan sufrir como resultado de
          cambios o inestabilidad política.
        </p>
        <h3>Daño a reputación / marca</h3>
        <p>
          Cambio inesperado de la opinión pública sobre las percepciones de una empresa por parte del público y
          posiblemente de sus accionistas o incluso empleados. Esto se ha acelerado a causa de la tecnología.
        </p>
      </div>
    </div>
  );
};

export default RiesgosPA;
