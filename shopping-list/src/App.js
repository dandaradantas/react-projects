import React, {Component} from 'react';
import './App.css';
import Items from './Items/Items';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentItemAdd: '',
      itemsList: []
    };

    this.itemNameChange = this.itemNameChange.bind(this);
  }

  deleteItemHandler = (itemIndex) => {
    const items = [...this.state.itemsList];
    items.splice(itemIndex, 1);
    this.setState({itemsList: items});
  }

  addItemHandler = (item) => {
    const items = [...this.state.itemsList];
    if(item.length > 0) {
      items.push(item);
    }
    
    this.setState({itemsList: items, currentItemAdd: ''});
  }

  itemNameChange(event) {
    this.setState({currentItemAdd: event.target.value});
  }
  
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { 
      this.addItemHandler(event.target.value);
    } 
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List App</h1>
            <div>
              <label>
                New item: 
                <input value={this.state.currentItemAdd} 
                       onChange={this.itemNameChange} 
                       onKeyPress={this.enterPressed.bind(this)}></input>
              </label>
              <button onClick={() => this.addItemHandler(this.state.currentItemAdd)}>Add to Shopping list</button>
            </div>
        </header>
        <h1>Shopping List</h1>
        <p>{this.state.itemsList.length} {this.state.itemsList.length > 1 ? 'items' : 'item'}</p>
        <Items itemsList={this.state.itemsList} delete={this.deleteItemHandler}/>
      </div>
    );
  }
}

export default App;
