import React from 'react';
import '../assets/styles/components/Directioncolumn.scss';
import '../assets/styles/components/CadenadeValor.scss';


const GestionIntegral = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Gestión integral</h1>
        <h2>para potenciar resultados</h2>
      </div>
      <div className='servicios__bullets column'>
        <div className='bullets__container'>
          <h3>1. Tecnología</h3>
        </div>
        <div className='bullets__container'>
          <h3>2. Siniestros</h3>
        </div>
        <div className='bullets__container'>
          <h3>3. Capacidad de Negociación</h3>
        </div>
        <div className='bullets__container'>
          <h3>4. Estructura de Atención</h3>
        </div>
        <div className='bullets__container'>
          <h3>5. Medición de Desempeño</h3>
        </div>
      </div>
    </div>
  );
};

export default GestionIntegral;
