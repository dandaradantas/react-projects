import React, { Component } from 'react';
//the name 'classes' is up to you
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'A01', name: 'Dandara', age: 28 },
      { id: 'A02', name: 'Brenan', age: 32 },
      { id: 'A03', name: 'Luiz', age: 22 },
    ],
    otherState: 'see other value',
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    // slice without params just make a copy of the array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // this way is to create a copy of the object
    const person = {
      ...this.state.persons[personIndex]  
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
     let persons = null;
     let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          
        </div> 
      );

     btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1> Hi, I'm Dandara</h1>
          <p className={assignedClasses.join(' ')}>I'm studying React</p>
          {/* This name 'myAlt' is up to you */}
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>
    
            {persons}    
        </div>
    );
  }
}

// Just when using Radium
//export default Radium(App);

export default App;
