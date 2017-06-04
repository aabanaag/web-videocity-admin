import { combineReducers } from 'redux';

import movies from '../modules/movies/reducers/moviesReducer';
import login from '../modules/login/reducers/loginReducer';

const rootReducer = combineReducers({
  movies,
  login
});

export default rootReducer;