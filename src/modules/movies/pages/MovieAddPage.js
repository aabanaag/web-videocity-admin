import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, string, bool } from 'prop-types';
import {
  Row,
  Col,
  PageHeader
} from 'react-bootstrap';

import { createMovie, toggleAlert } from '../actions/moviesAction';

import MovieForm from '../components/MovieForm';
import Alert from 'sweetalert-react';

class MovieAddPage extends Component {
  static propTypes = {
    createMovie: func,
    toggleAlert: func,
    alertMsg: string,
    alertTitle: string,
    showAlert: bool
  }

  render() {
    return (
      <Row className="movie-add-page">
        <Col xs={12}>
          <PageHeader>Add new Movie</PageHeader>
          <MovieForm saveForm={this.props.createMovie} />
        </Col>
        <Alert
          show={this.props.showAlert}
          title={this.props.alertTitle}
          text={this.props.alertMsg}
          onConfirm={() => {this.props.toggleAlert(false, '', '')}} />
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  alertMsg: state.movies.alertMsg,
  alertTitle: state.movies.alertTitle,
  showAlert: state.movies.toggleAlert
});

const mapDispatchToProps = (dispatch) => ({
  createMovie: bindActionCreators(createMovie, dispatch),
  toggleAlert: bindActionCreators(toggleAlert, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieAddPage);