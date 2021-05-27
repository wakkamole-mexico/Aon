import React from 'react';
import '../assets/styles/components/RiesgosNA.scss';

const AlRiesgosNA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>No Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Daño a reputación / marca</h3>
        <p>
          Cambio inesperado de la opinión pública sobre las percepciones de una empresa por
          parte del público y posiblemente de sus accionistas o incluso empleados. Esto se ha
          acelerado a causa de la tecnología.
        </p>
        <h3>Riesgo de cash flow / liquidez</h3>
        <p>
          Cambios inesperados en la liquidez (por ejemplo, la capacidad de vender activos como
          se espera en el mercado) o la capacidad de transferir dinero dentro y fuera de una
          empresa. Esto impacta la capacidad y forma de pago de los clientes, prefiriendo pagos
          fraccionados.
        </p>
      </div>
    </div>
  );
};

export default AlRiesgosNA;
