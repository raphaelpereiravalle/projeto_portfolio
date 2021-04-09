'use strict';

import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
// Importando o avatar da empresa
import company_avatar from '../../images/company1.png';
import company_avatar2 from '../../images/company2.png';
import company_avatar3 from '../../images/company3.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
        <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre mim</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <br/>
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <br />
        <h5 className="subtitle">Em destaque</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <br />
        <h5 className="subtitle">Experiências</h5>
        <Experience title="Ruby Developer"
                    company="Soundcloud"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar}  
                    data_inicio="Jul. de 2006 - Nov. 2010 4 anos" />
        <Experience title="React Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar2}  />
        <Experience title="Facebook Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar3}  />
    </Col>
  </Row>
);

export default Home;