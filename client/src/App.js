import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Repack Posts</h1>
        </header>
        <p className="App-intro">
          Click here to post something!
        </p>
      </div>
    );
  }
}

export default App;
