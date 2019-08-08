import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Login} exact />
    <Route path="/dev/:id" component={Main} />
  </BrowserRouter>
);
