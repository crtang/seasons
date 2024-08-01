import React from 'react';

const CalendarBase = () => {
  return (
    <article id="calendar">
      <span className="prev">&#10094;</span>
      <span className="next">&#10095;</span>

      <div id="cal-header">
        <div id="month" className="item"></div>

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
