import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'tokenfield/dist/tokenfield.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

const routes = () => (
  <Provider store={store}>
    { renderRoutes() }
  </Provider>
);

render(routes(), document.getElementById('root'));
registerServiceWorker();

