import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const FarRiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Tasas aceleradas de cambio en los factores de mercado y el riesgo geopolítico existente</h3>
        <p>
          El entorno del mercado externo para esta industria es extremadamente dinámico: nuevos jugadores
          ingresan al mercado, competencia de precios con genéricos y similares u otros productos
          de sustitución que se integran, cambios en reformas en el cuidado de la salud,
          la digitalización y los avances científicos, cambian los modelos comerciales existentes
        </p>
        <h3>Cambios regulatorios (riesgo político)</h3>
        <p>
          Riesgo que pueden sufrir los activos tangibles e intangibles de una empresa debido a cambios
          o inestabilidad política.
        </p>
        <h3>Aumento de la competencia</h3>
        <p>
          El panorama competitivo está cambiando como resultado de las consolidaciones de grandes
          corporaciones en los últimos años.
        </p>
        <h3>Fracaso para innovar/satisfacer las necesidades del cliente</h3>
        <p>
          La innovación y la satisfacción de las necesidades de los clientes es el objetivo estratégico
          de las organizaciones de esta industria. Por lo tanto, si una empresa no cumple con este
          propósito, su continuidad puede estar en riesgo
        </p>
      </div>
    </div>
  );
};

export default FarRiesgosPA;
