import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar_man from '../../images/avatar_man.png';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar_man} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5>Raphael Pereira Valle</h5>
        <div class="endereco"><i class="tiny material-icons">location_on</i>Brasília, DF - Brasil</div>
        <br />
        <div class="chip red lighten-5">HTML</div>
        <div class="chip blue lighten-5">CSS</div>
        <div class="chip lime lighten-5">JavaScript</div>
        <div class="chip amber lighten-4">C#</div>
        <div class="chip teal lighten-5">MVC</div>
        <div class="chip teal lighten-5">React</div>
        <div class="chip blue lighten-5">PHP</div>
      </Row>
  </Card>
);

export default UserProfile;