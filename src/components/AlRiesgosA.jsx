import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const AlRiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Interrupción de negocio</h3>
        <p>
          RResponsabilidad como resultado de la emisión, descarga, liberación o escape de cualquier
          contaminante, irritante o contaminante hacia o sobre la tierra, la atmósfera o cualquier
          curso o cause de agua.
        </p>
        <h3>Retiro de producto</h3>
        <p>
          Pérdida de ingresos, costos de retiro de productos del mercado (relaciones públicas,
          reembolsos, costos de almacenamiento, horas extra de empleados, costos de inspección
          y destrucción y costos de retiro de terceros) y daño a la reputación resultante de un
          retiro/contaminación/falla de un producto
        </p>
      </div>
    </div>
  );
};

export default AlRiesgosA;
