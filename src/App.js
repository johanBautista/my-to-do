import React, { Component } from 'react';
import './App.css';
import List from './List';

// 1. crear constructor con los state de term e items
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
  }
// 2. crear event onChange y onSubmit
  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
