import { Component } from 'react';
import CalendarBody from './CalendarBody';

class Calendar extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      month: today.getMonth(), // index in array
      year: today.getFullYear(), // integer
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
      m: 'month', // name of month to string
      y: 'year', // year to string
      currentDay: new Date()
    };
  };

  componentDidMount = () => {
    return this.getCurrentMonth();
  };

  getCurrentMonth = () => {
    const currentMonth = this.state.months[this.state.month];
    const currentYear = this.state.year.toString();
    this.setState({ m: currentMonth, y: currentYear });
  };

  getPreviousMonth = () => {
    let newMonth = 0;

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
    let newMonth = 0;

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

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };
  
  render() {
    return (
      <article id="month-calendar">
        <CalendarBody
          m={this.state.m}
          y={this.state.y}
          month={this.state.month}
          year={this.state.year}
          day={this.state.currentDay}
          getPreviousMonth={this.getPreviousMonth}
          getNextMonth={this.getNextMonth}
        />
      </article>
    );
  };
}

export default Calendar;
