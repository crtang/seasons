import React from 'react';

const CalendarBase = (props) => {
  const prevMonth = (props) => {
    return props.previous();
  };

  const nextMonth = (props) => {
    return props.next();
  };

  return (
    <div id="calendar-header">
      <span className="prev" onClick={prevMonth}>&#10094;</span>
      <span className="next" onClick={nextMonth}>&#10095;</span>

      <div id="cal-header">
        <h2 id="month" className="item">{props.month} {props.year}</h2>

        <h3 class="item wd">sun</h3>
        <h3 class="item wd">mon</h3>
        <h3 class="item wd">tues</h3>
        <h3 class="item wd">wed</h3>
        <h3 class="item wd">thu</h3>
        <h3 class="item wd">fri</h3>
        <h3 class="item wd">sat</h3>
      </div>
    </div>
  );
};

export default CalendarBase;
