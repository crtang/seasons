import React, { Fragment } from 'react';

const CalendarHeader = (props) => {
  let currentMonth = props.m + ' ' + props.y;

  const calculatePrevMonth = () => {
    props.getPreviousMonth();
    return currentMonth;
  };

  const calculateNextMonth = () => {
    props.getNextMonth();
    return currentMonth;
  };

  let firstDayOfMonth = new Date(props.year, props.month, 1);
  let totalDays = new Date(props.year, props.month, 0);

  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let numOfWeeks = [];
  let currentDays = [];
  let daysOfMonth = [];

  if (totalDays === 28 && weekdayOfFirstDay === 0) {
    numOfWeeks = [1, 2, 3, 4];
  } else if ((totalDays === 30 && weekdayOfFirstDay === 6) || (totalDays === 31 && weekdayOfFirstDay >= 5)) {
    numOfWeeks = [1, 2, 3, 4, 5, 6];
  } else {
    numOfWeeks = [1, 2, 3, 4, 5];
  }

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      key: day,
      number: firstDayOfMonth.getDate(),
      month: firstDayOfMonth.getMonth(),
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth())
    }

    currentDays.push(calendarDay);
  }

  if (currentDays[35].number === 1) {
    daysOfMonth = currentDays.slice(0, 35);
  } else {
    daysOfMonth = currentDays;
  }

  return (
    <Fragment>
      <div id="cal-header">
        <div className="cal-controls">
          <p id="prev-month" onClick={calculatePrevMonth}>&#10094;</p>
          
          <p className="cal-display">{ currentMonth }</p>
          
          <p id="next-month" onClick={calculateNextMonth}>&#10095;</p>
        </div>

        <div id="weekdays">
          <div className="item wd">sun</div>
          <div className="item wd">mon</div>
          <div className="item wd">tues</div>
          <div className="item wd">wed</div>
          <div className="item wd">thurs</div>
          <div className="item wd">fri</div>
          <div className="item wd">sat</div>
        </div>
      </div>
      <div id="weeks-container">
        {
          numOfWeeks.map((week) => {
            return (
              <div className="weeks" id={week}>
                {
                  daysOfMonth.map((day) => {
                    if (day.key >= (week - 1) * 7 && day.key < week * 7) {
                      return (
                        <div className={"item days" + (day.currentMonth === props.month ? " month" : "") + (day.number === props.day.getDate() ? " selected" : "")} key={day.key} >
                          <p>{ day.number }</p>
                        </div>
                      )
                    }
                  })
                }
              </div>
            );
          })
        }
      </div>
    </Fragment>
  );
};

export default CalendarHeader;
