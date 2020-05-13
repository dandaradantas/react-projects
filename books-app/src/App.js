import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Books from './components/Books/Books';

import './App.css';

class App extends Component {
  
  state = {
    searchValue: "harry potter",
    foundBooks: [],
    submitted: false
  }

  searchForBook = (value) => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+ value.trim())
      .then(res => {
        const books = res.data.items;
        this.setState({ foundBooks: books, submitted: true });
    })
  
  }

  inputChangeHandler = (event) => {
    this.setState({searchValue: event.target.value, submitted: false, foundBooks: []});
  }

  render () {
    console.log('x');
    setTimeout(() => {
        console.log('y');
    }, 1);
    console.log('z');
    
    return (
      <div className="App">
        <header className="App-header">
          <TextField id="outlined-basic" label="Search a book" variant="outlined" name="search" value={this.state.searchValue} onChange={this.inputChangeHandler} />
          <Button variant="contained" 
                  color="primary" onClick={() => this.searchForBook(this.state.searchValue)}>
                  Search
          </Button>
        </header>
        {(!this.state.foundBooks || this.state.foundBooks.length === 0) && this.state.submitted ?
            'No books found for ' + this.state.searchValue :
            <Grid container spacing={3}>
              <Books booksList={this.state.foundBooks}/>
            </Grid> 
            
        }
        
      </div>
    )}
}

export default App;
