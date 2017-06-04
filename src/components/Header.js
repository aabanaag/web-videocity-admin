import React from 'react';
import {
  Navbar
} from 'react-bootstrap';

const Header = ({title}) => (
  <Navbar inverse fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{title}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

export default Header;