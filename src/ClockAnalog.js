import React, { useRef, useEffect } from 'react';
import { Context } from 'svgcanvas';

const ClockAnalog = () => {
  // For passing the data from the child component to the parent component, we have to 
  // create a callback function in the parent component and then pass the callback function 
  // to the child component as a prop. This callback function will retrieve the data from 
  // the child component. The child component calls the parent callback function using props 
  // and passes the data to the parent component.
  let HOURHAND = useRef(null);
  let MINUTEHAND = useRef(null);
  let SECONDHAND = useRef(null);
  let canvas = useRef(null);

  useEffect(() => {
    HOURHAND.current = document.getElementById("hour")[0];
    MINUTEHAND.current = document.getElementById("minute")[0];
    SECONDHAND.current = document.getElementById("second")[0];

    const startClock = () => {
      const now = new Date();
      let hr = now.getHours();
      let min = now.getMinutes();
      let sec = now.getSeconds();

      let secPosition = sec * 360 / 60;
      let minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
      let hrPosition = hr * 360 / 12 + ((min * 360 / 60) / 12);

      SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
      MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
      HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    };

    canvas.current = document.getElementById("analog-clock");

    const ctx = new Context(60, 60);
    let radius = canvas.height / 2;

    ctx.translate(radius, radius);
    radius = radius * 0.90;

    const drawFace = (ctx, radius) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff"; // MAKE VARIABLE
      ctx.fill();

      ctx.imageSmoothingEnabled = true;
      ctx.strokeStyle = "#99b433"; // MAKE VARIABLE;
      ctx.lineWidth = radius * 0.05;
      ctx.stroke();
    };

    const drawNumbers = (ctx, radius) => {
      let ang;
      let num;

      ctx.fillStyle = "#cea52b"; // MAKE VARIABLE
      ctx.font = radius * 0.15 + "px Gotham Light";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;

        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    };

    const drawHand = (ctx, pos, length, width) => {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    };

    const drawTime = (ctx, radius) => {
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      hour = hour % 12;
      hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);

      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      drawHand(ctx, minute, radius * 0.7, radius * 0.07);

      second = (second * Math.PI / 30);
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
    };

    const drawCenter = (ctx, radius) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = "#ce922b"; // MAKE VARIABLE
      ctx.fill();
    };

    const drawClock = () => {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
      drawCenter(ctx, radius);
    };

    const clockstart = setInterval(startClock, 1000);
    const clock = setInterval(drawClock, 1000);

    return () => {
      clearInterval(clockstart);
      clearInterval(clock);
    };
  });



  return (
    <article id="clock">
      <svg id="svg-clock" ref={canvas} xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 60 60">
        <g id="clock-face">
          <circle id="clock-face" cx="30" cy="30" r="29" />
          
          <g className="numbers">
            <text className="num" x1="21" y1="0">3</text>
            <text className="num" x1="21" y1="0">4</text>
            <text className="num" x1="21" y1="0">5</text>
            <text className="num" x1="21" y1="0">6</text>
            <text className="num" x1="21" y1="0">7</text>
            <text className="num" x1="21" y1="0">8</text>
            <text className="num" x1="21" y1="0">9</text>
            <text className="num" x1="21" y1="0">10</text>
            <text className="num" x1="21" y1="0">11</text>
            <text className="num" x1="21" y1="0">12</text>
            <text className="num" x1="21" y1="0">1</text>
            <text className="num" x1="21" y1="0">2</text>
          </g>
          
          <text x="0" y="0" class="ct">sea tang</text>
        </g>
        
        <path id="hour" ref={HOURHAND} d="M30 30V15" />
        <path id="minute" ref={MINUTEHAND} d="M30 30V11" />
        <path id="second" ref={SECONDHAND} d="M30 30V6" />
        
        <circle className="pin" cx="30" cy="30" r="0.7" />
      </svg>
    </article>
  );
};

export default ClockAnalog;
