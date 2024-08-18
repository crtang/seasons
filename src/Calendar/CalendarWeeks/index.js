import React, { useState } from 'react';
import Week from './Week';

const CalendarWeeks = (props) => {
  const [w, setW] = useState(1);

  const calculateWeeks = () => {
    let firstDay = new Date(props.year, props.month, 1);
    const lastDay = new Date(props.year, props.month, 0);
    const daysInMonth = lastDay.getDate();
    const dayOfWeekNum = firstDay.getDay();

    const secondWeekSundayDate = (7 - dayOfWeekNum) + 1;
    const daysRemaining = (daysInMonth - secondWeekSundayDate) + 1;
    const numOfFullWeeks = daysRemaining / 7;
    const remainder = daysRemaining % 7;

    if (dayOfWeekNum !== 0) {
      setW(w + 1);
    }

    setW(w + numOfFullWeeks);

    if (remainder !== 0) {
      setW(w + 1);
    }
  };

  const renderWeek = () => <Week />;



  return <div id="weeks-container"></div>;
}

export default CalendarWeeks;
