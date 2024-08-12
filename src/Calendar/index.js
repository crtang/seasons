import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      month: today.getMonth(),
      year: today.getFullYear(),
      months: [
        'january',
        'february',
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
      ],
      m: months[month].toString(),
      y: year.toString(),
    };
  };

  getPreviousMonth = () => {
    const newMonth = 0;

    if (month >= 1) {
      newMonth = month - 1;
      this.setState({ month: newMonth });
    } else if (month == 0) {
      newMonth = 11;
      const newYear = year - 1;

      this.setState({ month: newMonth, year: newYear });
    }
  };

  getNextMonth = () => {
    const newMonth = 0;

    if (month < 11) {
      newMonth = month + 1;
      this.setState({ month: newMonth });
    } else if (month == 11) {
      newMonth = 0;
      const newYear = year + 1;

      this.setState({ month: newMonth, year: newYear });
    }
  };
  
  render() {
    return (
      <article id="month-calendar">
        <CalendarHeader />
      </article>
    );
  };
}

export default Calendar;
