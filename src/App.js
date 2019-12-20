import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Game from './components/Game.jsx'

function App() {
  const [game, setGame] = useState(0);
  
  if(window.location.pathname === "/game") {
    return (
      <>
        <Game />
      </>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/game" onClick={() => setGame(1)}> <img src={logo} className="App-logo" alt="logo"  /> </Link>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
