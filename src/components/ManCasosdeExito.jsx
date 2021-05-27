import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const ManCasosdeExito = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Casos</h1>
        <h2>de éxito</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <p>
            Una empresa de manufactura de productos de muy alto riesgo, que pueden ser
            utilizados para operaciones bélicas, no encontraba aseguradoras que aceptaran su
            riesgo, al estar excluido por cuestiones de Responsabilidad Social. Adicionalmente
            esta empresa había tenido siniestros por cientos de millones de pesos. Aon utilizó su
            experiencia técnica y poder de negociación en los mercados nacional y extranjero para
            colocar el riesgo
          </p>
        </div>
        <div className='bullets__container'>
          <p>
            Una armadora europea depende de un número muy reducido de proveedores para
            producir un componente de alta especialidad para sus automóviles (proveedor
            contingente). Su cobertura de Interrupción de Negocio era parte de su programa
            mundial de Property. Debido a una catástrofe natural en Asia, a la renovación, su
            programa mundial excluyó a la mayoría de sus proveedores contingentes. Aon buscó
            alternativas con los mercados locales y mundiales, para separar a esta armadora en
            México del programa mundial, logrando cubrir a sus proveedores contingentes, críticos
            para el negocio, a un precio mucho menor del programa mundial. Ante esto, el Equipo
            Global de Administración de Riesgos en Europa buscó replicar este mismo ejercicio
            en muchos otros países, logrando coberturas locales adecuadas y generando nuevas
            oportunidades para varias operaciones de Aon alrededor del mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManCasosdeExito;
