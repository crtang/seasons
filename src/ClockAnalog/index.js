import React, { Component, useState } from 'react';

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

  update = () => {
    console.log(this.state.hrPosition, this.state.minPosition, this.state.secPosition);
    let now = new Date();

    let hours = now.getHours() % 12;
    let minutes = now.getMinutes(0);
    let seconds = now.getSeconds();

    let secAngle = seconds * 6;
    let minAngle = (minutes * 6) + (seconds / 10);
    let hourAngle = (hours * 30) + (minutes / 2);

    this.setState({
      hrPosition: hourAngle + 180,
      minPosition: minAngle + 180,
      secPosition: secAngle + 180
    });
  };

  componentDidMount = () => {
    setInterval(() => {this.update()}, 1000);
  };

  render() {
    let middle = 100;

    return (
      <article id="clock">
        <svg id="svg-clock" width="200" height="200">
        <g id="clock-face">
          <circle id="clock-face" cx="100" cy="100" r="95" />
              
          <g id="numbers">
            <text className="num" x1="100" y1="100">12</text>
            <text className="num" x1="100" y1="100">1</text>
            <text className="num" x1="100" y1="100">2</text>
            <text className="num" x1="100" y1="100">3</text>
            <text className="num" x1="100" y1="100">4</text>
            <text className="num" x1="100" y1="100">5</text>
            <text className="num" x1="100" y1="100">6</text>
            <text className="num" x1="100" y1="100">7</text>
            <text className="num" x1="100" y1="100">8</text>
            <text className="num" x1="100" y1="100">9</text>
            <text className="num" x1="100" y1="100">10</text>
            <text className="num" x1="100" y1="100">11</text>
            
          </g>
              
          <text x="78" y="150" className="ct">sea tang</text>
        </g>
            
        <line id="hour" x1="100" y1="100" x2="100" y2={1.55 * middle} transform={`rotate(${this.state.hrPosition})`} />
        <line id="minute" x1="100" y1="100" x2="100" y2={1.75 * middle} transform={`rotate(${this.state.minPosition})`} />
        <line id="second" x1="100" y1="100" x2="100" y2={1.8 * middle} transform={`rotate(${this.state.secPosition})`} />
            
        <circle className="pin" cx="100" cy="100" r="1.5" />
      </svg>
      </article>
    );
  };
};

export default ClockAnalog;
