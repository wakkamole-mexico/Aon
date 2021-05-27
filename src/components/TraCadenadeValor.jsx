import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const TraCadenadeValor = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Cadena de valor</h1>
        <h2>y sus riesgos</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Transporte de mercancía</h3>
          <p>
            Riesgos de tránsito
            <br />
            Robo
            <br />
            Recintos fiscales
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Medio de Transporte</h3>
          <p>
            Tractocamión
            <br />
            Aviones
            <br />
            Barcos
          </p>
        </div>
        <div className='bullets__container'>
          <h3>
            3. Centro de Distribución o
            Almacenaje
          </h3>
          <p>
            Múltiple Empresarial
            <br />
            Terrorismo
            <br />
            Montacargas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>4. Responsabilidad del cliente</h3>
          <p>
            Profesionales por Operación
            <br />
            Logística
            <br />
            Daños Ambientales
            <br />
            Por el medio de transporte
            <br />
            Por daños en predios de otros
          </p>
        </div>
        <div className='bullets__container'>
          <h3>5. Otros</h3>
          <p>
            Cyber
            <br />
            Recall
            <br />
            Programas de Prevención de Riesgos
          </p>
        </div>
      </div>
    </div>
  );
};

export default TraCadenadeValor;
