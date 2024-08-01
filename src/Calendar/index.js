import React, { Component } from 'react';
import CalendarBase from './CalendarBase';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      month: today.getMonth(),
      year: today.getFullYear(),
      monthString: '',
      yearString: ''
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

    this.setState({ monthString: months[monthNum].toString(), yearString: yearToString })
  };

  previous = () => {
    // need to temporarily remove .week elements from calendar
    const monthNow = this.state.month;
    const yearNow = this.state.year;

    if (this.state.month >= 1) {
      this.setState({ month: monthNow - 1 })
    } else if (this.state.month == 0) {
      this.setState({ month: 11, year: yearNow - 1 });
    }

    return this.currentMonth();
  };

  next = () => {
    // need to temporarily remove .week elements from calendar

    const monthNow = this.state.month;
    const yearNow = this.state.year;

    if (this.state.month <= 10) {
      this.setState({ month: monthNow + 1});
    } else {
      this.setState({ month: 0, year: yearNow + 1 });
    }

    return this.currentMonth();
  };

  render() {
    return (
      <CalendarBase month={this.state.month} year={this.state.year} />
    );
  };
};

export default Calendar;
