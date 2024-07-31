import React, { Component, useState } from 'react';
import { Context } from 'svgcanvas';
import ClockFace from './ClockFace';

class ClockAnalog extends Component {
  // store time as state
  constructor(props) {
    super(props);

    this.state = {
      hrPosition: 0,
      minPosition: 0,
      secPosition: 0,
    }
  };

  

  /* hrPosition = hr * 30 + ((min * 6) / 12) */
  /* transform={`rotate(${hrPosition}deg)`} */
  /* minPosition = (min * 6) + (sec * 6) / 60 */
  /* transform={`rotate(${minPosition}deg)`} */
  /* secPosition = sec * 6 */
  /* transform={`rotate(${secPostion}deg)`} */

  render() {
    return (
      <article id="clock">
        <ClockFace />
      </article>
    );
  };
};

export default ClockAnalog;
