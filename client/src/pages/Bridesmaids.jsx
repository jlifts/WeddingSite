/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Clock from '../components/Clock';
import { useAuth } from '../utils/AuthContext';

const Bridesmaids = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  return (
    <section className=' h-full sm:h-screen p-7 font-body overflow-none w-screen'>
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
        <h4 className='text-2xl sm:text-5xl'>Hi {currentUser.displayName}!</h4>
        <div className='flex'>
          <Link to='/' className=''>
            Home
          </Link>
          <Link to='/profile' className='mx-4'>
            Profile
          </Link>
          <button onClick={handleLogOut} className='' aria-label='Log Out'>
            Log Out
          </button>
        </div>
      </nav>
      <div className='flex flex-col sm:flex-row mt-12 sm:mt-48 space-y-12 sm:space-y-0'>
        <div>
          <h5 className='text-4xl'>Important Dates</h5>
          <div>{}</div>
          <div className='mt-12 sm:mt-48'>
            <Link to='#' className='text-4xl hover:text-blue-400'>
              Gown's Warehouse
            </Link>
          </div>
        </div>
        <div className='sm:ml-96'>
          <div>
            <h5 className='text-lg sm:text-4xl'>The Big Day</h5>
            <div className='text-lg sm:text-3xl'>
              <Clock text='The Big Day is Here!' />
            </div>
            <div className='mt-12 sm:mt-24'>
              <Link to='#' className='text-3xl sm:text-4xl hover:text-blue-400'>
                &#x1f470;&#x1f3fb; Bachelorette Party &#128526;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridesmaids;
