import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: ''
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputValueLength: event.target.value.length,
      inputValue: event.target.value
    });
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.inputValue.split('')];
    chars.splice(index, 1);
    const newInputValue = chars.join('');
    this.setState({inputValue: newInputValue});
  }
  
  render() {
    const style = {
      color: 'green'
    }

    let charArray = null;

    if (this.state.inputValue) {
      charArray =  this.state.inputValue.split('').map((elem, index) => {
              return <Char char={elem} 
                click={() => this.deleteCharHandler(index)} 
                key={index}/>
    })
  }


    return (
      <div className="App">
        <ol>
          <li style={style}>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li style={style}>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li style={style}>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li style={style}>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li style={style}>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li style={style}>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input 
          type="text" 
          onChange={(event) => this.inputChangeHandler(event)} 
          value={this.state.inputValue}
        />
        <p>The input length is: {this.state.inputValue ? this.state.inputValue.length : 0}</p>

        <Validation textLength={this.state.inputValue ? this.state.inputValue.length : 0}/>

        {charArray}
      </div>
    );
  }
}

export default App;
