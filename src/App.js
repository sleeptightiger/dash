import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NMQG from './components/NMQG';
import ServiceDirect from './components/ServiceDirect';
import UtopiaFest from './components/UtopiaFest';
import Chakradojo from './components/Chakradojo';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/nmqg" component={NMQG} />
          <Route path="/sd" component={ServiceDirect} />
          <Route path="/uf" component={UtopiaFest} />
          <Route path="/cd" component={Chakradojo} />
          <Route path="/calendar" component={Calendar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
