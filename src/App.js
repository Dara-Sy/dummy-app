import React, { Component } from 'react';
import Users from './users/Users'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello!</p>
        <Users />
      </div>
    );
  }
}

export default App;
