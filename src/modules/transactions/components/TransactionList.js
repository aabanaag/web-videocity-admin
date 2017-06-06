import React from 'react';
import {
  Table,
  Button,
  Label
} from 'react-bootstrap';
import { result } from 'lodash';
import moment from 'moment';

const TransactionList = ({ transactions, movies, returnMovie }) => {
  const findMovieTitle = (id) => {
    const movie = movies.find(m => m._id === id);

    return result(movie, 'title', '');
  }

  const renderReturnButton = (status, type, id, movieId) => {
    if (type !== 'return' && status !== 'returned') {
      return (
        <Button
          bsStyle="info"
          onClick={() => { returnMovie(id, movieId) }}>
          Return Movie
        </Button>
      );
    } else {
      return (
        <Button
          bsStyle="info"
          disabled
          onClick={() => { returnMovie(id, movieId) }}>
          Return Movie
        </Button>
      );
    }
  }

  const renderTransactions = () => {
    const format = 'MMMM DD,YYYY';
    return transactions.map(tx => (
      <tr key={tx._id}>
        <td>{tx._id}</td>
        <td>{findMovieTitle(tx.movieId)}</td>
        <td>{ moment(tx.dueDate).format(format) }</td>
        <td>{ moment(tx.createdAt).format(format) }</td>
        <td className="text-uppercase"><i>{ tx.type }</i></td>
        <td>
          <Label bsStyle="danger" className="text-uppercase">
            {result(tx, 'status', 'N/A')}
          </Label>
        </td>
        <td>{renderReturnButton(tx.status,tx.type, tx._id, tx.movieId)}</td>
      </tr>
    ))
  }
  return (
    <div className="transaction-list-component">
      <Table responsive striped>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { renderTransactions() }
        </tbody>
      </Table>
    </div>
  )
}

export default TransactionList;
