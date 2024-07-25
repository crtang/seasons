import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import ClockAnalog from './ClockAnalog';
import ToDoList from './ToDoList';

class App extends Component {
  // figure out how to integrate with BE (Node.js)
  // LATER - state: users 
  // LATER - state: keep track of widgets user wants in their productivity center

  // LATER - app lifecycle methods to persist user data

  // LATER - function: add widget

  // LATER - function: delete widget

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  };
}

export default App;
