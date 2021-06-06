import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Energia from '../containers/Energia';
import Alimentos from '../containers/Alimentos';
import Farmaceutica from '../containers/Farmaceutica';
import Manufactura from '../containers/Manufactura';
import Transporte from '../containers/Transporte';
import Construccion from '../containers/Construccion';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/energia' component={Energia} />
    <Route exact path='/alimentos' component={Alimentos} />
    <Route exact path='/farmaceutica' component={Farmaceutica} />
    <Route exact path='/manufactura' component={Manufactura} />
    <Route exact path='/transporte' component={Transporte} />
    <Route exact path='/construccion' component={Construccion} />
  </BrowserRouter>
);

export default App;
