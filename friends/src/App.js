import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends';
import Login from './Components/Login';
import Form from './Components/Form';
import PrivateRoute from './Components/PrivateRoute';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PrivateRoute path="/friends" component={Friends} />
      <Route path="/Login" component={Login} />
      </div>
    );
  }
}

export default App;
