import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const ConsSoluciones = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Soluciones</h1>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Soluciones tradicionales</h3>
          <p>
            CAR/EAR
            <br />
            ALoP / DSU (Pérdida Anticipada
            de Beneficios
            <br />
            Retraso en la puesta en marcha)
            <br />
            Obra civil terminada
            <br />
            Responsabilidad Civil
            <br />
            Maquinaria y equipo de contratistas
            <br />
            Errores de diseño
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Soluciones No tradicionales</h3>
          <p>
            Soluciones de RC Transaccional (TLS)
            <br />
            Terrorismo con crimen organizado
            incluyendo ALoP/DSU
            <br />
            RC Proveedores
            <br />
            Responsabilidad ambiental
            <br />
            Cyber
            <br />
            Paramétricos
            <br />
            Seguro decenal/vicios ocultos
            <br />
            Planes de continuidad de negocio
            <br />
            Riesgo político
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Garantías</h3>
          <p>
            Fianzas de anticipo
            (para garantizar liquidez
            al inicio de los proyectos)
            <br />
            Fianzas de buena calidad
            <br />
            Fianzas de fidelidad
            <br />
            Fianzas de crédito
            <br />
            Fianzas de cumplimiento
            <br />
            Fianzas de contingencias
            laborales
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsSoluciones;
