import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Row>
    <Col m={12} s={12}> 
      <h1 class="center">404 - Not Found!</h1>
      <Link to="/">
        Volte para Home
      </Link>
    </Col>
  </Row>
);

export default NotFound;