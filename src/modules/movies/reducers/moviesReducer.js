import { types } from '../constants/moviesActionType';
import initialState from './initialState';
import update from 'immutability-helper';

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_MOVIES:
      return update(state, {
        movies: { $set: action.payload.movies }
      });
    case types.SET_MOVIE:
      return update(state, {
        movie: { $set: action.payload.movie }
      });
    case types.TOGGLE_ALERT:
      return update(state, {
        alertMsg: { $set: action.payload.msg },
        alertTitle: { $set: action.payload.title },
        toggleAlert: { $set: action.payload.show }
      });
    default:
      return state;
  }
}