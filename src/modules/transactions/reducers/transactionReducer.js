import { types } from '../constants/transactionActionType';
import initialState from './initialState';
import update from 'immutability-helper';

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_TRANSACTIONS:
      return update(state, {
        transactions: { $set: action.payload.transactions },
        movies: { $set: action.payload.movies }
      });
    case types.SET_TRANSACTION:
      return update(state, {
        transaction: { $set: action.payload.transaction }
      });
    default:
      return state;
  }
}