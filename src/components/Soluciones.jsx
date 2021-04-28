import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const Soluciones = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Soluciones</h1>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Soluciones tradicionales</h3>
          <p>
            Paquete Energético
            <br />
            Responsabilidad Civil
            <br />
            Maquinaria y equipo de contratistas
            <br />
            RC Profesional
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Soluciones No tradicionales</h3>
          <p>
            Soluciones de RC Transaccional (TLS)
            <br />
            Terrorismo
            <br />
            RC Proveedores
            <br />
            Responsabilidad Ambiental
            <br />
            Cyber
            <br />
            Paramétricos
            <br />
            Planes de continuidad de negocio
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Garantías</h3>
          <p>
            Fianzas Administrativas
            <br />
            Fianzas de Fidelidad
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soluciones;
