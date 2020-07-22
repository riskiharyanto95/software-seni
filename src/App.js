import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Github Repo</h2>
        </div>
        <div className="Container">
          <Search/>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
