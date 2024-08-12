import React, { useState } from 'react';

const CalendarHeader = (props) => {
  let currentMonth = props.m + ' ' + props.y;

  const calculatePrevMonth = () => {
    props.getPreviousMonth();
    currentMonth = props.m + ' ' + props.y;
    return currentMonth;
  };

  const calculateNextMonth = () => {
    props.getNextMonth();
    currentMonth = props.m + ' ' + props.y;
    return currentMonth;
  };

  return (
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
  );
};

export default CalendarHeader;
