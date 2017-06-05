import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import {
  Row,
  Col,
  PageHeader
} from 'react-bootstrap';

import { createMovie } from '../actions/moviesAction';

import MovieForm from '../components/MovieForm';

class MovieAddPage extends Component {
  static propTypes = {
    createMovie: func
  }

  render() {
    return (
      <Row className="movie-add-page">
        <Col xs={12}>
          <PageHeader>Add new Movie</PageHeader>
          <MovieForm saveForm={this.props.createMovie} />
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createMovie: bindActionCreators(createMovie, dispatch)
});

export default connect(null, mapDispatchToProps)(MovieAddPage);