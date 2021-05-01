import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      );
  }
}

/*

import { Navbar, NavbarBrand } from 'reactstrap'; // If you revert to the below, add this as well.

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Geekhalla</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}
*/

/* Original App code ... just in case.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}
*/

export default App;
