import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

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
            <div className="App-content">
              <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/work' component={Work} />
                <Route path='/' component={About} />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
