import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';

class Calendar extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
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
      m: 'month',
      y: 'year',
    };
  };

  getPreviousMonth = () => {
    const newMonth = 0;

    if (this.state.month >= 1) {
      newMonth = this.state.month - 1;
      const updatedM = this.state.months[newMonth];
      this.setState({ month: newMonth, m: updatedM });
    } else if (this.state.month == 0) {
      newMonth = 11;
      const updatedM = this.state.months[newMonth];
      const newYear = this.state.year - 1;
      const updatedY = newYear.toString();

      this.setState({
        month: newMonth,
        year: newYear,
        m: updatedM,
        y: updatedY 
      });
    }
  };

  getNextMonth = () => {
    const newMonth = 0;

    if (this.state.month < 11) {
      newMonth = this.state.month + 1;
      const updatedM = this.state.months[newMonth];
      this.setState({ month: newMonth, m: updatedM });
    } else if (this.state.month == 11) {
      newMonth = 0;
      const updatedM = this.state.months[newMonth];
      const newYear = this.state.year + 1;
      const updatedY = newYear.toString();

      this.setState({
        month: newMonth,
        year: newYear,
        m: updatedM,
        y: updatedY 
      });
    }
  };
  
  render() {
    return (
      <article id="month-calendar">
        <CalendarHeader month={this.state.m} year={this.state.y} />
      </article>
    );
  };
}

export default Calendar;
