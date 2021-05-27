import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const ConsCadenadeValor = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Cadena de valor</h1>
        <h2>y sus riesgos</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Concurso / Licitación</h3>
          <h2>Garantías:</h2>
          <p>
            Fianzas de anticipo (para garantizar
            liquidez al inicio de los proyectos)
            <br />
            Fianzas de buena calidad
            <br />
            Fianzas de fidelidad
            <br />
            Fianzas de crédito
            <br />
            Fianzas de cumplimiento
            <br />
            Fianzas de contingencias laborales
            <br />
            Responsabilidad ambiental
          </p>
        </div>
        <div className='bullets__container'>
          <h3>Diseño y Planeación</h3>
          <p>
            RC Profesional – Ingenieros y Arquitectos
            <br />
          </p>
        </div>
        <div className='bullets__container'>
          <h3>Ejecución / Construcción</h3>
          <p>
            CAR/EAR
            <br />
            ALoP/DSU (Pérdida anticipada de
            beneficios/Retraso en la puesta en
            marcha)
            <br />
            Maquinaria y equipo de contratistas
            <br />
            Errores de diseño
            <br />
            Terrorismo con crimen organizado
            incluyendo ALoP/DSU
            <br />
            Paramétricos
            <br />
            Riesgo político
            <br />
            Seguro decenal/vicios oculto
            <br />
            Cyber
            <br />
          </p>
        </div>
        <div className='bullets__container'>
          <h3>Cierre y entrada de operación</h3>
          <p>
            RC Profesional (dependerá del tipo de
            proyecto, e.g. hospitales)
            <br />
            Obra civil terminada
            <br />
            Responsabilidad Civil General
            <br />
            Paramétricos
            <br />
            Riesgo político
            <br />
            Planes de continuidad de negocio
            <br />
            Cyber
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsCadenadeValor;
