import React, { Component } from 'react';
//the name 'classes' is up to you
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'A01', name: 'Dandara', age: 28 },
      { id: 'A02', name: 'Brenan', age: 32 },
      { id: 'A03', name: 'Luiz', age: 22 },
    ],
    otherState: 'see other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  } 

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1}
    });
    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] ...rendering');

     let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}/> ;
    }

    return (
        <Aux>
          <button 
            onClick={()=>{
              this.setState({showCockpit: false})
            }}>
              Remove Cockpit
            </button>
            <AuthContext.Provider 
              value={{
                authenticated: this.state.authenticated, 
                login: this.loginHandler
              }}>
              {this.state.showCockpit ? (
              <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length} 
                clicked={this.togglePersonsHandler}
              />
              ) : null}
              
              {persons} 
            </AuthContext.Provider>   
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
