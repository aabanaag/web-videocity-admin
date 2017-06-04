import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';
import Search from '../../../components/Search';
import MoviesList from '../components/MoviesList';

import {
  getMovies,
  findMovie,
  logout
} from '../actions/moviesAction';

class MoviesPage extends Component {
  static propTypes = {
    getMovies: func,
    findMovie: func,
    movies: array,
    logout: func
  }

  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <Search search={this.props.findMovie} logout={this.props.logout} />
          <MoviesList movies={this.props.movies} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: bindActionCreators(getMovies, dispatch),
  findMovie: bindActionCreators(findMovie, dispatch),
  logout: bindActionCreators(logout, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);