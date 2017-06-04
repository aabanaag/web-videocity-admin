import React from 'react';
import {
  Row,
  Col,
  Image,
  Label,
  PageHeader,
  Button
} from 'react-bootstrap';

import { Link } from 'react-router';
import { result, isEmpty } from 'lodash';

import UserInfo from '../../../components/UserInfo';

const MovieInfo = ({ movie }) => {
  const renderStatus = () => {
    let status = result(movie, 'status', '');
    if (!isEmpty(status)) {
      return (
        <Label bsStyle="info" className="text-uppercase">{status}</Label>
      );
    } else return null;
  }

  const renderCast = () => {
    const { cast } = movie;

    return cast.map((obj, i) => (
      <UserInfo key={i} name={obj.name} sub={obj.role} />
    ));
  }

  const renderGenre = () => {
    const { genre } = movie;

    return genre.map((obj, i) => (
      <Label key={i}>{obj}</Label>
    ));
  }

  return (
    <div className="movies-info">
      <Row className="controls">
        <Col xs={12}>
          <Link to={`/movies/${movie._id}/edit`} className="btn btn-info btn-lg">Edit</Link>
          <Button bsStyle="danger" bsSize="lg">Delete</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={2} lg={2}>
          <Image
            src={movie.poster} thumbnail responsive />
          { renderStatus() }
        </Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <PageHeader>{movie.title} <small><Label>{movie.year}</Label></small></PageHeader>
          <h3>{ renderGenre() }</h3>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Director</h2>
            <div>
              <UserInfo name={movie.director} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Cast</h2>
            <div>{ renderCast() }</div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="details">
          <h3>Synopsis</h3>
          <p>{movie.plot}</p>
        </Col>
      </Row>
    </div>
  )
}

export default MovieInfo;