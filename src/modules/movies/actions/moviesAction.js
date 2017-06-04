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

      console.log(result);
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
      await Client.authenticate();
      await Client.service('movies').create(payload);
      
      dispatch(push('/movies'));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editMovie = (id, payload) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      await Client.service('movies').update(id, payload);
      
      dispatch(push('/movies'));
    } catch (err) {
      console.log(err);
    }
  };
};
