import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './scss/Styles.scss'

import Home from './Components/Home';
import Shop from './Components/Shop';
import Culture from './Components/Culture';
import Contact from './Components/Contact';

const Routes = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/culture" component={Culture} />
      <Route path="/contact" component={Contact} />
  </Router>
);

export default Routes;
