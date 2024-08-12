import React, { useState } from 'react';

const CalendarHeader = (props) => {
  const displayMonth = props.m + ' ' + props.y;

  const calculatePrevMonth = () => {
    return props.getPreviousMonth();
  };

  const calculateNextMonth = () => {
    return props.getNextMonth();
  };

  return (
    <div id="cal-header">
      <span id="prev-month" onChange={calculatePrevMonth}>&#10094;</span>

      <span>{ displayMonth }</span>

      <span id="next-month" onChange={calculateNextMonth}>&#10095;</span>

      <div>
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
