import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
  };

  getPreviousMonth = () => {
    return (
      this.state.today
    );
  };

  getNextMonth = () => {
    return (
      this.state.today
    );
  };
  
  render() {
    return (
      <article id="month-calendar"></article>
    );
  };
}

export default Calendar;
