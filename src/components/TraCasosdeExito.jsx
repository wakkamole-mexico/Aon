import React from 'react';
import '../assets/styles/components/CadenadeValor.scss';

const TraCasosdeExito = () => {
  return (
    <div className='serviciosItem'>
      <div className='servicios__title'>
        <h1>Casos</h1>
        <h2>de éxito</h2>
      </div>
      <div className='servicios__bullets'>
        <div className='bullets__container'>
          <h3>Operador logístico</h3>
          <p>
            Un Operador Logístico buscó asesoría de Aon, pues tenía algunas dudas sobre su programa
            adquirido con otro asesor, durante una convención de su industria. Al analizarlo Aon se percató
            que el programa era no operable para México, pues había sido emitido por una aseguradora en
            Argentina, no registrada en México y con cláusulas no aplicables localmente (seguro no admitido,
            ilegal en el país). Aon asesoró a la empresa para ofrecer un programa de cobertura adecuada y
            colocar un programa local para sus Operaciones Logísticas
          </p>
        </div>
        <div className='bullets__container'>
          <h3>Transporte de bienes de alto valor</h3>
          <p>
            La nueva normalidad obligó a compradores y vendedores a modificar sus esquemas de venta,
            favoreciendo las ventas en línea y entregas a domicilio, en ocasiones de bienes de muy alto
            valor. Ante esta necesidad, Aon trabajó con los mercados para poder adaptar los esquemas de
            aseguramiento en transportes, existentes, a cubrir adecuadamente estas nuevas necesidades.
            El objetivo: Que nuestros clientes puedan continuar evolucionando en sus procesos mientras
            Aon los asesora en la protección de los nuevos riesgos que estos procesos generan
          </p>
        </div>
        <div className='bullets__container'>
          <h3>Operador portuario</h3>
          <p>
            Aon creó un programa para las empresas/terceros que ingresan al puerto, para cubrir posibles
            daños que pudieran generarle durante sus operaciones. Esto por un lado, protege al operador
            portuario, y por otro beneficia a sus usuarios con una cobertura a la medida, a costos competitivos.
            Adicionalmente, Aon negoció una UDI para generar ingresos al Operador Portuario, que le
            ayudaron a solventar costos operativos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TraCasosdeExito;
