import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, string, bool } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';

import { login } from '../actions/loginAction';

import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  static propTypes = {
    errorMessage: string,
    isLoggedIn: bool,
    login: func
  }

  render() {
    return (
      <Row className="login-page">
        <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={4}>
          <LoginForm
            login={this.props.login}
            errorMessage={this.props.errorMessage}
            isLoggedIn={this.props.isLoggedIn} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  errorMessage: state.login.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
