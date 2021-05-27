import React from 'react';
import '../assets/styles/components/RiesgosPA.scss';

const AlRiesgosPA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Parcialmente Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Riesgo en precio de productos básicos (Commodities)</h3>
        <p>
          Cambios inesperados en los precios de insumos, por ejemplo: el petróleo, materias primas, etc.
        </p>
        <h3>Cambio climático</h3>
        <p>
          Pérdida de ingresos y gastos adicionales derivados de fenómenos hidrometeorológicos cuya
          severidad se ha incrementado por el calentamiento global (huracanes, inundaciones, incendios,
          entre otros).
        </p>
        <h3>Aumento de la competencia</h3>
        <p>
          Riesgo asociado con un entorno empresarial categorizado por un número cada vez mayor de rivales
          o una competencia muy agresiva por las ventas, las ganancias y la participación de mercado
          al ofrecer la mejor combinación posible de precio, calidad y servicio.
        </p>
        <h3>Desaceleración económica / recuperación lenta</h3>
        <p>
          Cambios inesperados en la economía, como la capacidad de los clientes para comprar productos
          o servicios de la empresa, cambio en las tasas de inflación, costo de bienes o servicios, cambio
          en la oferta/demanda de empleo. Muy posiblemente y a raíz de la pandemia este sea el principal
          riesgo que se verá reflejado en la encuesta 2021.
        </p>
        <h3>Tasas aceleradas de cambio en los factores de mercado y el riesgo geopolítico existente </h3>
        <p>
          Riesgo de que los activos tangibles e intangibles de una empresa puedan sufrir como resultado
          de cambios o inestabilidad política.
        </p>
        <h3>Fluctuación del tipo de cambio</h3>
        <p>
          Cambios inesperados en los tipos de cambio.
        </p>
      </div>
    </div>
  );
};

export default AlRiesgosPA;
