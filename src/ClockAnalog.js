import React from 'react';

const ClockAnalog = () => {
  return (
    <article id="clock">
      {/* edit svg numbers so clock is bigger */}
      <svg id="svg-clock" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 60 60">
        <g id="clock-face">
          <circle id="clock-face" cx="30" cy="30" r="29" />
          
          <g class="numbers">
            <text class="num" x1="21" y1="0">3</text>
            <text class="num" x1="21" y1="0">4</text>
            <text class="num" x1="21" y1="0">5</text>
            <text class="num" x1="21" y1="0">6</text>
            <text class="num" x1="21" y1="0">7</text>
            <text class="num" x1="21" y1="0">8</text>
            <text class="num" x1="21" y1="0">9</text>
            <text class="num" x1="21" y1="0">10</text>
            <text class="num" x1="21" y1="0">11</text>
            <text class="num" x1="21" y1="0">12</text>
            <text class="num" x1="21" y1="0">1</text>
            <text class="num" x1="21" y1="0">2</text>
          </g>
          
          <text x="0" y="0" class="ct">sea tang</text>
        </g>
        
        <path id="hour" d="M30 30V15" />
        <path id="minute" d="M30 30V11" />
        <path id="second" d="M30 30V6" />
        <circle class="pin" cx="30" cy="30" r="0.7" />
      </svg>
    </article>
  );
};

export default ClockAnalog;
