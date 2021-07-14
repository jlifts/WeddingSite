/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { REGISTRY_ADMIN } from '../key';

const Admin = () => {
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
      <span className='mx-2'>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <section className='h-screen p-12 bg-bg2 font-body'>
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
        <h4 className=' text-5xl'>
          Hello{' '}
          {currentUser.displayName === 'Josh Burgess'
            ? 'Groom'
            : currentUser.displayName === 'Josh'
            ? 'Groom'
            : currentUser.displayName === 'Olivia'
            ? 'My Beautiful Bride'
            : currentUser.displayName === 'Olivia Blakeslee'
            ? 'My Beautiful Bride'
            : 'Hmmmm... Wrong Dashboard!'}
          !
        </h4>
        <div className='flex'>
          <Link to='/' className=''>
            Home
          </Link>
          <Link to='/profile' className='mx-4'>
            Profile
          </Link>
          <button onClick={handleLogOut} className=''>
            Log Out
          </button>
        </div>
      </nav>
      <div className='flex mt-12 justify-center flex-col'>
        <div>
          <h5 className='flex justify-center text-4xl'>Coutdown to The Kiss</h5>
          <div className='flex justify-center text-6xl py-6'>
            {timerComponents.length ? (
              timerComponents
            ) : (
              <span>I love You!</span>
            )}
          </div>
        </div>
        <div className='flex justify-evenly mt-24'>
          <Link
            to={{ pathname: REGISTRY_ADMIN }}
            className='px-4 py-3 bg-primary hover:bg-primaryAccent w-40 rounded'
            target='_blank'
          >
            Manage Registry
          </Link>
          <div className='flex flex-col'>
            <div>Who RSVP'd!</div>
            <div>{}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;

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
