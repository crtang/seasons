import { Component, Fragment } from 'react';

/* need:
TYPE (event/reminder)

EVENT TITLE
START TIME
END TIME

REMINDER TITLE
ALARM TIME

SAVE
CANCEL


EDIT
DELETE
color bar on calendar T_T */

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduleType: "",
      scheduleTitle: "",
      time1: 0,
      time2: 0
    }
  }
}

