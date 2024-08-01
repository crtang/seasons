import React, { Component } from 'react';
import CalendarBase from './CalendarBase';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      month: today.getMonth(),
      year: today.getFullYear(),
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

    const monthNum = this.state.month;
    const yearToString = this.state.year.toString();

    this.setState({ month: months[monthNum], year: yearToString })
  }

  render() {
    return (
      <CalendarBase month={this.state.month} year={this.state.year} />
    );
  };
};

export default Calendar;
