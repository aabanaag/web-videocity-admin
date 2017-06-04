import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(browserHistory);

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reactRouterMiddleware, thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}