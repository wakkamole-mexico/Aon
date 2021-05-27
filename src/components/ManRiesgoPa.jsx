import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const ManRiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Desaceleración económica / recuperación lenta</h3>
        <p>
          Cambios inesperados en la economía, como la capacidad de los clientes para comprar productos o
          servicios de la empresa, cambio en las tasas de inflación, costo de bienes o servicios, cambio en la
          oferta/demanda de empleo.
        </p>
        <h3>Riesgo en precio de productos básicos (Commodities) </h3>
        <p>
          Cambios inesperados en los precios de insumos, por ejemplo: el petróleo, materias primas, etc.
        </p>
        <h3>Tasas aceleradas de cambio en los factores de mercado y el riesgo geopolítico existente</h3>
        <p>
          El entorno del mercado externo para esta industria es extremadamente dinámico: nuevos jugadores
          ingresan al mercado, competencia de precios con genéricos y similares u otros productos de
          sustitución que ingresan al mercado, cambios en reformas en el cuidado de la salud, la digitalización y
          los avances científicos cambian los modelos comerciales existentes
        </p>
        <h3>Aumento de la competencia a</h3>
        <p>
          El panorama competitivo está cambiando como resultado de las consolidaciones de grandes
          corporaciones en los últimos años.
        </p>
        <h3>Fracaso para innovar / satisfacer las necesidades del cliente</h3>
        <p>
          La innovación y la satisfacción de las necesidades de los clientes es el objetivo estratégico de las
          organizaciones de esta industria. Por lo tanto, si una empresa no cumple con este objetivo, la
          continuidad de la empresa puede estar en riesgo
        </p>
        <h3>Fluctuación del tipo de cambio</h3>
        <p>
          Cambios inesperados en los tipos de cambio.
        </p>
      </div>
    </div>
  );
};

export default ManRiesgosPA;
