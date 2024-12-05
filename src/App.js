import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Header";
import PageTitle from "./PageTitle";
import ClockAnalog from './ClockAnalog';
import ToDoList from './ToDoList';
import Calendar from './Calendar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <PageTitle />
          <div className="container left">
            <ClockAnalog />
            <ToDoList />
          </div>
          <div className="container right">
            <Calendar />
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  };
}

export default App;
