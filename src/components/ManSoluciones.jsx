import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const ManSoluciones = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Soluciones</h1>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Soluciones No tradicionales</h3>
          <p>
            Paquete Empresarial (Todo Riesgo)
            <br />
            Responsabilidad Civil
            <br />
            Transportes
            <br />
            Automóviles
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Soluciones No tradicionales</h3>
          <p>
            Terrorismo
            <br />
            RC Productos
            <br />
            Recall (retiro de producto)
            <br />
            Responsabilidad Ambiental
            <br />
            Cyber
            <br />
            D&O
            <br />
            E&O
            <br />
            M&A
            <br />
            Paramétricos
            <br />
            Planes de continuidad
            de negocio
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Garantías</h3>
          <p>
            Fianzas de Crédito
            <br />
            Fianzas Judiciales
            <br />
            Seguro de Fidelidad
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManSoluciones;
