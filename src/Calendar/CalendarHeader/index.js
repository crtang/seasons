import React from 'react';

const CalendarBase = (props) => {
  const prevMonth = (props) => {
    return props.previous();
  };

  const nextMonth = (props) => {
    return props.next();
  };

  return (
    <article id="calendar">
      <span className="prev" onClick={prevMonth}>&#10094;</span>
      <span className="next" onClick={nextMonth}>&#10095;</span>

      <div id="cal-header">
        <div id="month" className="item">{props.month} {props.year}</div>

        <div class="item wd">sun</div>
        <div class="item wd">mon</div>
        <div class="item wd">tues</div>
        <div class="item wd">wed</div>
        <div class="item wd">thu</div>
        <div class="item wd">fri</div>
        <div class="item wd">sat</div>
      </div>
    </article>
  );
};

export default CalendarBase;
