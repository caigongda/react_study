import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Header/>
      </div>
      </HashRouter>
    );
  }
}

export default App;
