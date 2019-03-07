import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends';
import Form from './Components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Friends/>
      <Form/>
      </div>
    );
  }
}

export default App;
