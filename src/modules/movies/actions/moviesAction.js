import { types } from '../constants/moviesActionType';
import { push } from 'react-router-redux';
import Client from '../../../client';
import { isEmpty } from 'lodash';

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: { movies }
});

export const setMovie = (movie) => ({
  type: types.SET_MOVIE,
  payload: { movie }
});

export const toggleAlert = (show, title, msg) => ({
  type: types.TOGGLE_ALERT,
  payload: { show, title, msg }
});

export const getMovies = () => {
  return async dispatch => {
    try {
      await Client.authenticate();
      let query = {
        query: {
          $limit: 40
        }
      };

      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const getMovie = (id) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const result = await Client.service('movies').get(id);

      dispatch(setMovie(result));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const findMovie = (title) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      let query = (isEmpty(title)) ? {} : { query: {
        title: { $regex: title }
      }};
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const createMovie = (payload) => {
  return async dispatch => {
    try {
      delete payload._id;
      await Client.authenticate();
      await Client.service('movies').create(payload);
      
      dispatch(push('/movies'));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const editMovie = (payload) => {
  return async dispatch => {
    try {
      const id = payload._id;
      delete payload._id;
      await Client.authenticate();
      await Client.service('movies').patch(id, payload);
      
      dispatch(push('/movies'));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const deleteMovie = (id) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      await Client.service('movies').remove(id);
      
      dispatch(push('/movies'));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await Client.logout();

      dispatch(push('/'));
    } catch (err) {
      dispatch(toggleAlert(true, err.name, err.message));
    }
  };
};