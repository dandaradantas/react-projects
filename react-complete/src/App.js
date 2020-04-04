import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm Dandara</h1>
        <Person name="Dandara" age="28"/>
        <Person name="Brenan" age="32"/>
        <Person name="Luiz" age="22">My hobbies: Sleep</Person>
      </div>
    );
  }
}

export default App;
