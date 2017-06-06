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

export const getMovies = () => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const result = await Client.service('movies').find();

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
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
      console.log(err);
    }
  };
};

export const findMovie = (title) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      let query = (isEmpty(title)) ? {} : { query: { title } };
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await Client.logout();

      dispatch(push('/'));
    } catch (err) {
      console.log(err);
    }
  };
};