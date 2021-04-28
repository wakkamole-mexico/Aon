import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const CasosdeExito = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Casos</h1>
        <h2>de éxito</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <p>Empresa de Energía (Midstream) desarrollando una terminal de almacenamiento de combustible en Tuxpan, Veracruz. El proyecto tiene un CAPEX (Capital Expenditure) de 225 millones de dólares. Aon gestiona todo la consultoría de riesgos del proyecto, desde la revisión de los Lender´s Requirements, hasta la emisión de las pólizas de Construcción Todo Riesgo, Responsabilidad Civil, Responsabilidad Ambiental y Marine Cargo. Programa OCIP (Owner´s Controlled Insurance Program) donde el dueño del programa gestiona y contrata las pólizas de Seguro, asegurándose que los programas estén colocados con mercados con buena seguridad financiera, un buen asesor de seguros y la posible de gestión de siniestros a través del mismo dueño del proyecto. Se incluyen a contratistas y subcontratistas del proyecto.</p>
        </div>
        <div className='bullets__container'>
          <p>
            Empresa creada a raíz de la Reforma Energética en México en 2013. Enfocada
            en Upstream de la cadena de valor de Energy (la extracción y producción de hidrocarburo)
            El nuevo operador fue ganador de cuatro campos onshore en las rondas energéticas.
            Aon asesora al cliente, desde la interpretación de las disposiciones de la ASEA, hasta
            la exitosa colocación en el mercado internacional de los programas de Control de Pozos
            y Responsabilidad Civil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CasosdeExito;
