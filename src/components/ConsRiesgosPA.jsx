import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const ConsRiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Cambios regulatorios (riesgo político)</h3>
        <p>
          Riesgo que pueden sufrir los activos tangib les e intangibles de una empresa debido
          a la inestabilidad política.
        </p>
        <h3>Riesgo político/incertidumbre</h3>
        <p>
          Riesgo que sufren los activos de una empresa debod a cambios políticos o inestabilidad de un país.
        </p>
        <h3>Riesgo de cash flow/liquidez </h3>
        <p>
          Las organizaciones requieren de una sólida posición de liquidez, ya que el negocio requiere
          de mucho tiempo y recursos, independientemente de la madurez de la organización.
        </p>
        <h3>Daño a reputación/marca</h3>
        <p>
          Cambio inesperado de la opinión pública sobre las percepciones de una empresa por parte
          del público y posiblemente de sus accionistas o incluso empleados. Esto se ha acelerado
          a causa de la tecnología.
        </p>
      </div>
    </div>
  );
};

export default ConsRiesgosPA;
