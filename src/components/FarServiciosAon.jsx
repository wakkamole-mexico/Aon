import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';
import '../assets/styles/components/flexColumn.scss';

const FarServiciosAon = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Servicios</h1>
        <h2>Aon</h2>
      </div>
      <div className='servicios__bullets column'>
        <div className='bullets__container'>
          <h3>1. Daños</h3>
          <p>
            Mapeo de Riesgos
            <br />
            Práctica Global
            <br />
            Cautivas
            <br />
            Benchmarks de sus programas
            <br />
            Tendencias de mercado y de la industria
            <br />
            Encuesta Global de Administración
            de Riesgos (GRMS)
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Fianzas</h3>
          <p>
            Matriz de riesgos afianzables
            <br />
            Evaluación y precalificación a padrón de proveedores
            <br />
            Administración de líneas de afianzamiento,
            emisiones, vencimientos, renovaciones,
            cancelaciones y cobranza
            <br />
            Auditoría y apoyo en planes de transición en caso de
            cambio de conducto
            <br />
            Diseño de un programa personalizado de fianzas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Beneficios y Salud</h3>
        </div>
        <div className='bullets__container'>
          <h3>4. Capital Humano</h3>
        </div>
      </div>
    </div>
  );
};

export default FarServiciosAon;
