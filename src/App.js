'use strict';

import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './main';

const now = new Date;
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer 
          date = {now.getFullYear()}
        />
      </div>
    );
  }
}

export default App;
