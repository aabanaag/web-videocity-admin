import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
dotenv.load({path: '.env'});

const routes = () => (
  <Provider store={store}>
    { renderRoutes() }
  </Provider>
);

render(routes(), document.getElementById('root'));
registerServiceWorker();

