import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';
import '../assets/styles/components/flexColumn.scss';

const AlServiciosAon = () => {
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
            Evaluación y precalificación a padrón
            de Proveedores
            <br />
            Administración del Líneas de Afianzamiento,
            emisiones, vencimientos, renovaciones,
            cancelaciones y cobranza
            <br />
            Diseño de un Programa
            Personalizado de Fianzas
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

export default AlServiciosAon;
