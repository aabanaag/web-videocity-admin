import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, array, string, bool } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';
import Search from '../../../components/Search';
import MoviesList from '../components/MoviesList';
import Alert from 'sweetalert-react';

import {
  getMovies,
  findMovie,
  logout,
  toggleAlert
} from '../actions/moviesAction';

class MoviesPage extends Component {
  static propTypes = {
    getMovies: func,
    findMovie: func,
    movies: array,
    logout: func,
    toggleAlert: func,
    alertMsg: string,
    alertTitle: string,
    showAlert: bool
  }

  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <Search
            search={this.props.findMovie}
            logout={this.props.logout}
            showTransaction={true}
            showMovies={false} />
          <MoviesList movies={this.props.movies} />
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
  movies: state.movies.movies,
  alertMsg: state.movies.alertMsg,
  alertTitle: state.movies.alertTitle,
  showAlert: state.movies.toggleAlert
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: bindActionCreators(getMovies, dispatch),
  findMovie: bindActionCreators(findMovie, dispatch),
  logout: bindActionCreators(logout, dispatch),
  toggleAlert: bindActionCreators(toggleAlert, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);