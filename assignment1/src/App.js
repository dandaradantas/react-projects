import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
       username: 'World' 
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value 
    })
  }

  render() {
    const style = {
      backgroundColor : '#123456',
      color: 'white'
    }

    return (
      <div className="App" style={style}>
        <UserInput changed={this.changeUsername} currentName={this.state.username}/>
        <UserOutput username={this.state.username} content1='Hello world!' />
        <UserOutput username={this.state.username} content1='Hello Dandara!' />
      </div>
    );  
  }
  
}

export default App;
