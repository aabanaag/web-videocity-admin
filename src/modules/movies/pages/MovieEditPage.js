import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, string, object } from 'prop-types';
import {
  Row,
  Col,
  PageHeader
} from 'react-bootstrap';

import {
  editMovie,
  getMovie
} from '../actions/moviesAction';

import MovieForm from '../components/MovieForm';

class MovieEditPage extends Component {
  static propTypes = {
    editMovie: func,
    getMovie: func,
    movie: object,
    id: string
  }

  componentWillMount() {
    this.props.getMovie(this.props.id);
  }

  render() {
    return (
      <Row className="movie-add-page">
        <Col xs={12}>
          <PageHeader>Edit Movie</PageHeader>
          <MovieForm movie={this.props.movie} saveForm={this.props.editMovie} />
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
  editMovie: bindActionCreators(editMovie, dispatch),
  getMovie: bindActionCreators(getMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);