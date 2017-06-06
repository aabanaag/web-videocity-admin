import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';
import Search from '../../../components/Search';
import TransactionList from '../components/TransactionList';

import {
  getTransactions,
  findTransaction,
  returnMovie
} from '../actions/transactionAction';

class TransactionPage extends Component {
  static propTypes = {
    getTransactions: func,
    findTransaction: func,
    transactions: array,
    movies: array,
    returnMovie: func
  }

  componentWillMount() {
    this.props.getTransactions();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }

  render() {
    return (
      <Row className="transactions-page">
        <Col xs={12}>
          <Search
            search={this.props.findTransaction}
            showTransaction={false}
            showMovies={true} />
          <TransactionList
            transactions={this.props.transactions}
            movies={this.props.movies}
            returnMovie={this.props.returnMovie} />
        </Col>
      </Row>
    )
  }
};

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  movies: state.transactions.movies
});

const mapDispatchToProps = (dispatch) => ({
  getTransactions: bindActionCreators(getTransactions, dispatch),
  findTransaction: bindActionCreators(findTransaction, dispatch),
  returnMovie: bindActionCreators(returnMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
