import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { object, func, string } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';
import MovieInfo from '../components/MovieInfo';

import { getMovie, deleteMovie } from '../actions/moviesAction';

class MoviePage extends Component {
  static propTypes = {
    movie: object,
    deleteMovie: func,
    id: string
  }

  componentWillMount() {
    this.props.getMovie(this.props.id);
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MovieInfo movie={this.props.movie} deleteMovie={this.props.deleteMovie} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movies.movie,
  id: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: bindActionCreators(getMovie, dispatch),
  deleteMovie: bindActionCreators(deleteMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);