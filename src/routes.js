import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//LAYOUT
import MainLayout from './layouts/main';

//PAGE
import LoginPage from './modules/login/pages/LoginPage';
import MoviesPage from './modules/movies/pages/MoviesPage';
import MoviePage from './modules/movies/pages/MoviePage';
import MovieAddPage from './modules/movies/pages/MovieAddPage';
import MovieEditPage from './modules/movies/pages/MovieEditPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={LoginPage}></IndexRoute>
    </Route>
    <Route path='/movies' component={MainLayout}>
      <IndexRoute component={MoviesPage}></IndexRoute>
      <Route path='/movies/add' component={MovieAddPage}></Route>
      <Route path='/movies/:id' component={MoviePage}></Route>
      <Route path='/movies/:id/edit' component={MovieEditPage}></Route>
    </Route>
  </Router>
)