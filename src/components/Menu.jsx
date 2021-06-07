import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import energiaOp from '../assets/static/energia-op.svg';
import foodOp from '../assets/static/foodop.svg';
import farmOp from '../assets/static/farmop.svg';
import toolsOp from '../assets/static/toolsop.svg';
import airOp from '../assets/static/airop.svg';
import '../assets/styles/components/Menu.scss';
import Energia from './Energia';
import Alimentos from './Alimentos';

function Menu() {
  return (

    <div className='menu u-wrapper' id='menu'>
      <div className='menu__container'>
        <Link
          to='/energia'
          className='indutry #1'
        >
          <div className='industry__icon'>
            <img src={energiaOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>Energía</p>
          </div>
        </Link>
        <Link
          to='/Alimentos'
          className='indutry #2'
        >
          <div className='industry__icon'>
            <img src={foodOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>
              Alimentos y
              bebidas
            </p>
          </div>
        </Link>
        <Link to='/Alimentos' className='indutry #3'>
          <div className='industry__icon'>
            <img src={farmOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>
              Farmacéutica y
              química
            </p>
          </div>
        </Link>
        <Link to='/Alimentos' className='indutry #4'>
          <div className='industry__icon'>
            <img src={toolsOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>Manufactura</p>
          </div>
        </Link>
        <Link to='/Alimentos' className='indutry #5'>
          <div className='industry__icon'>
            <img src={airOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>
              Transporte y
              logística
            </p>
          </div>
        </Link>
        <Link to='/Alimentos' className='indutry #5'>
          <div className='industry__icon'>
            <img src={airOp} alt='' />
          </div>
          <div className='industry__title'>
            <p>
              Transporte y
              logística
            </p>
          </div>
        </Link>
      </div>
    </div>

  );
};

export default Menu;
