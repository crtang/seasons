import React from 'react';

const CalendarDays = (props) => {
  let firstDayOfMonth = new Date(props.year, props.month, 1);
  const totalDays = new Date(props.year, props.month, 0);

  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let numOfWeeks = [];
  let currentDays = [];
  let daysOfMonth = [];

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
      month: firstDayOfMonth.getMonth()
    }

    currentDays.push(calendarDay);
  }

  if (currentDays[35].number === 1) {
    daysOfMonth = currentDays.slice(0, 35);
  }

  if (totalDays === 28 && weekdayOfFirstDay === 0) {
    numOfWeeks = [1, 2, 3, 4];
  } else if ((totalDays === 30 && weekdayOfFirstDay === 6) || (totalDays === 31 && weekdayOfFirstDay >= 5)) {
    numOfWeeks = [1, 2, 3, 4, 5, 6];
  } else {
    numOfWeeks = [1, 2, 3, 4, 5];
  }

  return (
    <div id="weeks-container">
      {/*{
        daysOfMonth.map((day) => {
          return (
            <div className={"item days" + (day.month === props.month ? " month" : "") + (day.toDateString() === props.day.toDateString() ? " selected" : "")} key={day.key} >
              <p>{ day.number }</p>
            </div>
          )
        })
      }*/}

      {
        numOfWeeks.map((week) => {
          return (
            <div className="weeks" id={week}>
              {
                daysOfMonth.map((day) => {
                  if (day.key >= (week - 1) * 7 && day.key < week * 7) {
                    return (
                      <div className={"item days" + (day.month === props.month ? " month" : "") + (day.number === props.day.getDate() ? " selected" : "")} key={day.key} >
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
  );
}

export default CalendarDays;
