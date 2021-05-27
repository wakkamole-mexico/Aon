import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const ManCadenadeValor = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Cadena de valor</h1>
        <h2>y sus riesgos</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>1. Materia prima</h3>
          <p>
            Seguro Agrícola (solo si aplica)
            <br />
            RC Proveedores/ Contratistas
            <br />
            RC General con RC Productos del tercero.
            <br />
            Pérdida Consecuencial
            (contingente/interdependencia)
            <br />
          </p>
        </div>
        <div className='bullets__container'>
          <h3>2. Fabricación</h3>
          <p>
            Incendio y Riesgos Aliados
            <br />
            RC General
            <br />
            RC Ambiental Predios
            <br />
            Ganancias Brutas
            <br />
            Crime
            <br />
            Cyber
            <br />
            RC Contratistas
            <br />
            Terrorismo
          </p>
        </div>
        <div className='bullets__container'>
          <h3>3. Almac/Distrib</h3>
          <p>
            Incendio y Riesgos Aliados
            <br />
            RC General
            <br />
            RC Ambiental Predios
            <br />
            Ganancias Brutas
            <br />
            Transportes
            <br />
            Crime
            <br />
            Robo
            <br />
            Cyber
            <br />
            RC Contratistas
            <br />
            Terrorismo
          </p>
        </div>
        <div className='bullets__container'>
          <h3>4. Punto Venta</h3>
          <p>
            Incendio y Riesgos Aliados
            <br />
            RC General con RC Productos
            <br />
            Pérdida de Utilidades Comerciales
            <br />
            Cyber
            <br />
            Crime
            <br />
            Robo
            <br />
            RC Contratistas
            <br />
            Terrorismo
          </p>
        </div>
        <div className='bullets__container'>
          <h3>5. Cliente</h3>
          <p>
            RC General con RC Productos
            <br />
            Recall
            <br />
            Cyber
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManCadenadeValor;
