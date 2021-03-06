/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import { calcTimeLeft } from '../../helpers/functions';

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
