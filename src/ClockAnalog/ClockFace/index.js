import React from 'react';

const ClockFace = (props) => {
  return (
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
          
      <line id="hour" x1="100" y1="100" x2="100" y2="45" transform={`rotate(${props.hourHand})`} />
      <line id="minute" x1="100" y1="100" x2="100" y2="30" transform={`rotate(${props.minHand})`} />
      <line id="second" x1="100" y1="100" x2="100" y2="20" transform={`rotate(${props.secHand})`} />
          
      <circle className="pin" cx="100" cy="100" r="1.5" />
    </svg>
  );
};

export default ClockFace;