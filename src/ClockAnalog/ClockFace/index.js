import React from 'reactz';

const ClockFace = () => {
  return (
    <svg id="svg-clock" width="100" height="100">
      <g id="clock-face">
        <circle id="clock-face" cx="50" cy="50" r="49" />
            
        <g className="numbers">
          <text className="num" x1="0" y1="35">12</text>
          <text className="num" x1="35" y1="0">1</text>
          <text className="num" x1="35" y1="0">2</text>
          <text className="num" x1="35" y1="0">3</text>
          <text className="num" x1="35" y1="0">4</text>
          <text className="num" x1="35" y1="0">5</text>
          <text className="num" x1="0" y1="-35">6</text>
          <text className="num" x1="35" y1="0">7</text>
          <text className="num" x1="35" y1="0">8</text>
          <text className="num" x1="-35" y1="0">9</text>
          <text className="num" x1="35" y1="0">10</text>
          <text className="num" x1="35" y1="0">11</text>
          
        </g>
            
        <text x="0" y="0" class="ct">sea tang</text>
      </g>
          
      <line id="hour" d="M30 30V15" />
      <line id="minute" d="M30 30V11" />
      <line id="second" d="M30 30V6" />
          
      <circle className="pin" cx="30" cy="30" r="0.7" />
    </svg>
  );
};

export default ClockFace;