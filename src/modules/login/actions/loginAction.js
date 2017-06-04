import { types } from '../constants/loginActionType';
import { push } from 'react-router-redux';
import Client from '../../../client';

export const toggleLogin = (isLoggedIn, errorMessage, token) => ({
  type: types.TOGGLE_LOGIN,
  payload: {
    isLoggedIn,
    errorMessage,
    token
  }
});

export const login = ({email, password}) => {
  return async dispatch => {
    try {
      const type = 'local';
      const result = await Client.authenticate({
        strategy: type,
        email,
        password
      });
      dispatch(toggleLogin(true, '', result));
      dispatch(push('/movies'));
    } catch(err) {
      dispatch(toggleLogin(false, err.message, ''));
    }
  }
};