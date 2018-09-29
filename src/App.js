import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';

import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Christopher Diep</h1>
            <h4>software engineer</h4>
            <NavBar />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
