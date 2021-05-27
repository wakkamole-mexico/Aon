import React from 'react';
import '../assets/styles/components/Bot.scss';
import BotIcon from '../assets/static/bot.svg'

const Bot = () => (
  <div className='bot u-wrapper' id='bot'>
    <div className='bot__container'>
      <div className='bot__img'>
        <img src={BotIcon} alt='' />
      </div>
      <div className='bot__text'>
        <p className="default">¡Hola! Soy Aonio, te daré un vistazo por este lugar; de tu lado <b>izquierdo</b> podrás encontrar el <b>menú principal</b> donde podrás navegar en cada una de nuestras industrias. Selecciona la que mas te interese y podrás obtener más información.</p>
        <p className="responsive">¡Hola! Soy Aonio, te daré un vistazo por este lugar; en la parte <b>inferior</b> podrás encontrar el <b> menú principal </b> donde podrás navegar en cada una de nuestras industrias. Selecciona la que mas te interese y podrás obtener más información.</p>
      </div>
    </div>
  </div>
);

export default Bot;
