// Importantando o React
import React from 'react';
// Importantando o component Home
import Home from './components/home/home';
// Importantando o component Contact
import Contact from './components/contact/contact';
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
//
import NotFound from './components/error/notFound';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </main>  
);

export default Main;