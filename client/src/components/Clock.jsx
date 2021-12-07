/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';

const Clock = (text) => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  const timerComponents = [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span
        className="mx-2"
        //Throw away keys
        key={Math.random().toString(36).substr(2, 9)}
      >
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });
  return (
    <div className="flex justify-center py-6">
      {timerComponents.length ? timerComponents : <span>{text}</span>}
    </div>
  );
};

export default Clock;

function calcTimeLeft() {
  // const year = new Date().getFullYear();
  const difference = +new Date(`07/30/2022`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}
