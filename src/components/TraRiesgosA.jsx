import React from 'react';
import '../assets/styles/components/RiesgosA.scss';

const TraRiesgosA = () => {
  return (
    <div className='riesgo__item'>
      <div className='riesgos__title'>
        <h1>Riesgos</h1>
        <h2>Asegurables</h2>
      </div>
      <div className='riesgos__bullets'>
        <h3>Robo</h3>
        <p>
          Pérdida de activos relacionada con el robo de autotransporte y mercancías.
        </p>
        <h3>Seguridad y farmacovigilancia </h3>
        <p>
          Responsabilidad relacionada con los efectos adversos de los productos
          farmacéuticos u otras sustancias.
        </p>
        <h3>SResponsabilidad frente a terceros (por ejemplo, E&O) </h3>
        <p>
          Responsabilidad que surge como resultado de su local, productos o servicios.
        </p>
        <h3>Daños a la propiedad  </h3>
        <p>
          Daños físicos y/o pérdida de ingresos derivados de incendios, explosiones, corriente
          eléctrica o averías mecánicas.
        </p>
        <h3>Clima / Desastres naturales </h3>
        <p>
          Daño físico a la propiedad o la interrupción del negocio como resultado de peligros
          naturales / clima (por ejemplo, terremoto, inundación, huracán).
        </p>
      </div>
    </div>
  );
};

export default TraRiesgosA;
