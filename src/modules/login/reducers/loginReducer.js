import { types } from '../constants/loginActionType';
import initialState from './initialState';
import update from 'immutability-helper';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_LOGIN:
      return update(state, {
        isLoggedIn: { $set: action.payload.isLoggedIn },
        errorMessage: { $set: action.payload.errorMessage }
      });
    default:
      return state;
  }
}