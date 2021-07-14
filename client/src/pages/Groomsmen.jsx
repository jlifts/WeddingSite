/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Groomsmen = () => {
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const timerComponents = [];

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

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
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <section className='bg-black h-screen p-7 font-items'>
      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
          role='alert'
        >
          <p className='font-bold'>Error</p>
          <p>{error}</p>
        </div>
      )}
      <nav className='flex items-end w-full justify-between'>
        <h4 className='bg-black text-white text-5xl'>
          Hi {currentUser.displayName}!
        </h4>
        <div className='flex'>
          <Link to='/' className='text-white'>
            Home
          </Link>
          <Link to='/profile' className='text-white mx-4'>
            Profile
          </Link>
          <button onClick={handleLogOut} className='text-white'>
            Log Out
          </button>
        </div>
      </nav>
      <div className='flex flex-row mt-48'>
        <div>
          <h5 className='text-white text-4xl'>Important Dates</h5>
          <div>{}</div>
          <div className='mt-48'>
            <Link to='#' className='text-white text-4xl hover:text-blue-400'>
              Men's Warehouse
            </Link>
          </div>
        </div>
        <div className='ml-96'>
          <div>
            <h5 className='text-white text-4xl'>The Big Day</h5>
            <div className='text-white text-4xl py-6'>
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>It's Here!</span>
              )}
            </div>
            <div className='mt-24'>
              <Link to='#' className='text-white text-4xl hover:text-blue-400'>
                Bachelor Party &#128526;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Groomsmen;

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
