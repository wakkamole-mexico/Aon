import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';
import '../assets/styles/components/flexColumn.scss';

const ServiciosAon = () => {
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
            Asesoría Due Dilligence
            <br />
            Asesoría con requerimientos de Autoridades y Gobierno
            <br />
            Cautivas
            <br />
            Mapeo de Riesgos
            <br />
            Práctica Global de Energía LATAM
            <br />
            Benchmarks de sus programas
            <br />
            Tendencias de mercado y de la industria
            <br />
            Facilidad Alpha (Terrorismo/Riesgo Político)
            <br />
            Aon Energy Risk Engineering (AERE)
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Fianzas</h3>
          <p>
            Matriz de riesgos Afianzables
            <br />
            Soluciones con firmas de abogados, consultores, lenders
            <br />
            Evaluación y precalificación a padrón de Proveedores
            <br />
            Administración del Líneas de Afianzamiento, emisiones, vencimientos, renovaciones, cancelaciones y cobranza
            <br />
            Auditoría y apoyo en Planes de Transición en caso de cambio de conducto
            <br />
            Diseño de un Programa Personalizado de Fianzas
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

export default ServiciosAon;
