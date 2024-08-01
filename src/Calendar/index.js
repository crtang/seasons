import React, { Component } from 'react';
import CalendarBase from './CalendarBase';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      year: today.getFullYear(),
      month: today.getMonth(),
    };
  };

  currentMonth = () => {
    const months = [
      'january',
      'februrary',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ];
  }

  render() {
    return (
      <CalendarBase />
    );
  };
};

export default Calendar;
