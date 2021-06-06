import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Energia from '../containers/Energia';
import Alimentos from '../containers/Alimentos';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/energia' component={Energia} />
    <Route exact path='/alimentos' component={Alimentos} />
  </BrowserRouter>
);

export default App;
