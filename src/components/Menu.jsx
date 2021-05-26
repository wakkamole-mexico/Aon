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
    <Router>
      <div className='menu u-wrapper' id='menu'>
        <div className='menu__container'>
          <NavLink to='/Energia' className='indutry #1'>
            <div className='industry__icon'>
              <img src={energiaOp} alt='' />
            </div>
            <div className='industry__title title__focus'>
              <p>Energía</p>
            </div>
          </NavLink>
          <NavLink to='/Alimentos' className='indutry #2'>
            <div className='industry__icon'>
              <img src={foodOp} alt='' />
            </div>
            <div className='industry__title'>
              <p>
                Alimentos y
                bebidas
              </p>
            </div>
          </NavLink>
          <div className='indutry #3'>
            <div className='industry__icon'>
              <img src={farmOp} alt='' />
            </div>
            <div className='industry__title'>
              <p>
                Farmacéutica y
                química
              </p>
            </div>
          </div>
          <div className='indutry #4'>
            <div className='industry__icon'>
              <img src={toolsOp} alt='' />
            </div>
            <div className='industry__title'>
              <p>Manufactura</p>
            </div>
          </div>
          <div className='indutry #5'>
            <div className='industry__icon'>
              <img src={airOp} alt='' />
            </div>
            <div className='industry__title'>
              <p>
                Transporte y
                logística
              </p>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path='/Energia'>
          <Energia />
        </Route>
        <Route exact path='/Alimentos'>
          <Alimentos />
        </Route>
      </Switch>

    </Router>

  );
};

export default Menu;
