import React, { Component } from 'react';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';
import reactLogo from './react-logo.svg';

import './App.css';

import FeaturesComponent from './components/Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={menu} className="Menu" alt="menu" />
          </nav>
          <h1>
            Say hello to<br></br>ReactJS
          </h1>
          <p>
            You will learn a Frontend<br></br>framework from scratch, to
            <br></br>become a Ninja Developer.
          </p>
          <button>Awesome!</button>
          <section class="Features-section">
            <FeaturesComponent />
          </section>
          <img src={reactLogo} alt="React-logo" />
        </header>
      </div>
    );
  }
}

export default App;
