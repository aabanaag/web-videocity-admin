import React from 'react';
import { Link } from 'react-router';
import {
  Image,
  Label,
  Col
} from 'react-bootstrap';

const Tile = ({title, year, status, img, id}) => {

  const renderStatus = () => {
    return (
      <Label bsStyle="danger" className="text-uppercase">{status}</Label>
    )
  }
  
  return (
  <Col xs={6} sm={4} md={4} lg={2} className="tile-component">
    <Link to={ `/${id}` }>
      <Image
        src={img} thumbnail responsive>
      </Image>
      <h5>{title}</h5>
      <span className="hidden-xs">
        <Label>{year}</Label>
        { renderStatus() }
      </span>
    </Link>
  </Col>
  )
}

export default Tile;