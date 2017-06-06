import { combineReducers } from 'redux';

import movies from '../modules/movies/reducers/moviesReducer';
import login from '../modules/login/reducers/loginReducer';
import transactions from '../modules/transactions/reducers/transactionReducer';

const rootReducer = combineReducers({
  movies,
  login,
  transactions
});

export default rootReducer;