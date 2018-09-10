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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </HashRouter>
    );
  }
}

export default App;
