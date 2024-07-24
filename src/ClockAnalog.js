import React, { useEffect, useLayoutEffect } from 'react';

const ClockAnalog = () => {
  useEffect(() => {
    const interval = setInterval(() => { drawClock(); }, 1000);
    
    return () => clearInterval(interval);
  });
  
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let radius = canvas.height / 2;

  ctx.translate(radius, radius);
  radius = radius * 0.90;
  // setInterval(drawClock, 1000);

  const drawFace = (ctx, radius) => {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff"; // MAKE VARIABLE
    ctx.fill();

    ctx.imageSmooothingEnabled = true;
    ctx.strokeStyle = "#99b433";
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();
  };

  const drawNumbers = (ctx, radius) => {
    let ang;
    let num;

    // SVG TEXT ON CLOCK FACE
    // ctx.fillStyle = "#cea52b";
    // ctx.font = radius * 0.15 + "px Gotham Light";
    // ctx.textBaseline = "middle";
    // ctx.textAlign = "center";

    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;

      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radus * 0.85);
      ctx.rotate(-ang);
    }
  };

  const drawTime = (ctx, radius) => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.7, radius * 0.07);

    ctx.strokeStyle = "#f4c842";

    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
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

  const drawCenter = (ctx, radius) => {
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#ce922b";
    ctx.fill();
  };

  const drawClock = () => {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    drawCenter(ctx, radius);
  };


  return (
    <article id="clock">
      <svg id="svg-clock" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 60 60">
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
        
        <path id="hour" d="M30 30V15" />
        <path id="minute" d="M30 30V11" />
        <path id="second" d="M30 30V6" />
        <circle className="pin" cx="30" cy="30" r="0.7" />
      </svg>
    </article>
  );
};

export default ClockAnalog;
