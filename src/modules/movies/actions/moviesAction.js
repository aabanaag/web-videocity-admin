import { types } from '../constants/moviesActionType';
import Client from '../../../client';
import { isEmpty } from 'lodash';

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: { movies }
});

export const getMovies = () => {
  return async dispatch => {
    try {
      const result = await Client.service('movies').find();

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const findMovie = (title) => {
  return async dispatch => {
    try {
      let query = (isEmpty(title)) ? {} : { query: { title } };
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};
