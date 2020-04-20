import React, { Component } from 'react';
//the name 'classes' is up to you
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/> ;
    }

    return (
        <div className={classes.App}>
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons} 
              clicked={this.togglePersonsHandler}
            />
            {persons}    
        </div>
    );
  }
}

export default App;
