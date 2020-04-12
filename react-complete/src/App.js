import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Dandara', age: 28 },
      { name: 'Brenan', age: 32 },
      { name: 'Luiz', age: 22 },
    ]
  }
  
  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Brenan', age: 32 },
      { name: 'Luiz', age: 20 },
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dandara', age: 28 },
        { name: event.target.value, age: 32 },
        { name: 'Luiz', age: 20 },
    ]
  })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi, I'm Dandara</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Dandara!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Cesar')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>My hobbies: Sleep
        </Person>
      </div>
    );
  }
}

export default App;
