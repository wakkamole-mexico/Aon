import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const TraRiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Cambios legislativos </h3>
        <p>
          Riesgo de que un cambio en las leyes afecte al mercado o sector. Un cambio en las leyes
          o regulaciones realizadas por el gobierno o un organismo regulador puede aumentar los
          costos de operación de una empresa y/o cambiar el panorama competitivo.
        </p>
        <h3>Fuerza laboral que envejece y problemas de salud relacionados</h3>
        <h3>Cambio climático </h3>
        <p>
          Pérdida de ingresos y gastos adicionales derivados del calentamiento global (por ejemplo,
          mayor potencial de clima impredecible, impactos en la salud y regulaciones).
        </p>
      </div>
    </div>
  );
};

export default TraRiesgosPA;
