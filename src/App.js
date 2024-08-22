import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Header";
import PageTitle from "./PageTitle";
import ClockAnalog from './ClockAnalog';
import ToDoList from './ToDoList';
import Calendar from './Calendar';
import Footer from './Footer';

class App extends Component {
  // LATER - figure out how to integrate with BE (Node.js)
  // LATER - state: users 
  // LATER - state: keep track of widgets user wants in their productivity center

  // LATER - app lifecycle methods to persist user data

  // LATER - function: add widget

  // LATER - function: delete widget

  render() {
    return (
      <Fragment>
        <main>
          <Header />
          <div className="container">
            <PageTitle />
            <ToDoList />
            <Calendar />
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  };
}

export default App;
