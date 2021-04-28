import React from 'react';
import '../assets/styles/components/Bot.scss';
import BotIcon from '../assets/static/bot.svg'

const Bot = () => (
  <div className='bot u-wrapper'>
    <div className='bot__container'>
      <div className='bot__img'>
        <img src={BotIcon} alt='' />
      </div>
      <div className='bot__text'>
        <p>¡Hola! Soy Aonio, ¿te gustaría dar un recorrido conmigo por este lugar?  Te daré un vistazo en nuestra especialidad; las industrias de energía. Selecciona el que más te interese y podrás obtener más información.</p>
      </div>
    </div>
  </div>
);

export default Bot;
