import React, { useState } from 'react';

const CalendarHeader = (props) => {const calculatePrevMonth = () => {
    return props.getPreviousMonth();
  };

  const calculateNextMonth = () => {
    return props.getNextMonth();
  };

  return (
    <div id="cal-header">
      <div class="cal-controls">
        <p id="prev-month" onChange={calculatePrevMonth}>&#10094;</p>
        
        <p>{ props.m + ' ' + props.y }</p>
        
        <p id="next-month" onChange={calculateNextMonth}>&#10095;</p>
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
  );
};

export default CalendarHeader;
